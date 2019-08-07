/**
 * TODO: Look at using @chrisveness's geodesy functions.
 * https://github.com/chrisveness/geodesy
 *
 * See: skolkovo_dc\src\modules\lab\3d\mercator\converters\convertLngLatToScene
 *
 * import LatLon from 'geodesy/latlon-ellipsoidal'
 * import Vector3d from 'geodesy/vector3d'
 */
import { latLon as LatLon } from './LatLon';
import { point as Point } from './Point';

var Geo = {};

// Radius / WGS84 semi-major axis.
Geo.R = 6378137;
Geo.MAX_LATITUDE = 85.0511287798;

// WGS84 eccentricity.
Geo.ECC = 0.081819191;
Geo.ECC2 = 0.081819191 * 0.081819191;

/**
 * Multiplier is used to expand or compress the WebGL coordinate space relative
 * to the EPSG:3857 / Pseudo-Mercator coordinate space (metres).
 *
 * This is useful for keeping coordinate calculations to smaller numbers and
 * helps increase accuracy of things like the z-buffer, object intersection,
 * and camera near and far clipping.
 *
 * A multiplier of 1 would mean a 1:1 mapping between WebGL and EPSG:3857
 * coordinates (1 EPSG:3857 metre === 1 WebGL unit).
 *
 * A multiplier of 0.1 would mean a 1:0.1 mapping between WebGL and EPSG:3857
 * coordinates (1 EPSG:3857 metre === 0.1 WebGL units).
 */
Geo.multiplier = 0.1;

/**
 *
 */
Geo.project = function ( latlon ) {

    let _d = Math.PI / 180;
    let _max = Geo.MAX_LATITUDE;
    let _lat = Math.max( Math.min( _max, latlon.lat ), -(_max) );
    let _sin = Math.sin( _lat * _d );

    return Point(

        Geo.R * latlon.lon * _d,
        Geo.R * Math.log( ( 1 + _sin ) / ( 1 - _sin ) ) / 2,

    );

};

/**
 *
 */
Geo.unproject = function ( point ) {

    let _d = 180 / Math.PI;

    return LatLon(

        ( 2 * Math.atan( Math.exp( point.y / Geo.R ) ) - ( Math.PI / 2 ) ) * _d,
        point.x * _d / Geo.R,

    );

};

/**
 * Converts geo coords to pixel / WebGL ones.
 * This just reverses the Y axis to match WebGL.
 */
Geo.latLonToPoint = function ( latlon ) {

    let _projected = Geo.project( latlon );

    _projected.y *= -1;

    _projected.x *= Geo.multiplier;
    _projected.y *= Geo.multiplier;

    return _projected;

};

/**
 * Converts pixel / WebGL coords to geo coords.
 * This just reverses the Y axis to match WebGL.
 */
Geo.pointToLatLon = function ( point ) {

    let _point = Point( point.x, point.y * -1 );

    _point.x /= Geo.multiplier;
    _point.y /= Geo.multiplier;

    return Geo.unproject( _point );

};

/**
 * Scale factor for converting between real metres and projected metres.
 *
 * projectedMetres = realMetres * pointScale
 * realMetres = projectedMetres / pointScale
 *
 * Accurate scale factor uses proper Web Mercator scaling.
 * See pg.9: http://www.hydrometronics.com/downloads/Web%20Mercator%20-%20Non-Conformal,%20Non-Mercator%20(notes).pdf
 * See: http://jsfiddle.net/robhawkes/yws924cf/
 */
Geo.pointScale = function ( latlon, accurate ) {

    var rad = Math.PI / 180;

    var k;

    if ( !accurate ) {

        k = 1 / Math.cos( latlon.lat * rad );

        // [ scaleX, scaleY ]
        return [ k, k ];

    } else {

        var lat = latlon.lat * rad;
        var lon = latlon.lon * rad;

        var a = Geo.R;

        var sinLat = Math.sin( lat );
        var sinLat2 = sinLat * sinLat;

        var cosLat = Math.cos( lat );

        // Radius meridian.
        var p = a * ( 1 - Geo.ECC2 ) / Math.pow( 1 - Geo.ECC2 * sinLat2, 3 / 2 );

        // Radius prime meridian.
        var v = a / Math.sqrt( 1 - Geo.ECC2 * sinLat2 );

        // Scale N/S.
        var h = ( a / p ) / cosLat;

        // Scale E/W.
        k = ( a / v ) / cosLat;

        // [ scaleX, scaleY ]
        return [ k, h ];

    }

};

/**
 * Convert real metres to projected units.
 * Latitude scale is chosen because it fluctuates more than longitude.
 */
Geo.metresToProjected = function ( metres, pointScale ) {

    return metres * pointScale[ 1 ];

};

/**
 * Convert projected units to real metres.
 * Latitude scale is chosen because it fluctuates more than longitude.
 */
Geo.projectedToMetres = function ( projectedUnits, pointScale ) {

    return projectedUnits / pointScale[ 1 ];

};

/**
 * Convert real metres to a value in world (WebGL) units.
 */
Geo.metresToWorld = function ( metres, pointScale ) {

    /**
     * Transform metres to projected metres using the latitude point scale.
     * Latitude scale is chosen because it fluctuates more than longitude.
     */
    let _projectedMetres = Geo.metresToProjected( metres, pointScale );
    return _projectedMetres * Geo.multiplier;

};

/**
 * Convert world (WebGL) units to a value in real metres.
 */
Geo.worldToMetres = function ( worldUnits, pointScale ) {

    let _projectedUnits = worldUnits;
    let _realMetres = Geo.projectedToMetres( _projectedUnits, pointScale );

    return _realMetres / Geo.multiplier;

};

/**
 * Returns the world width in pixels for a given zoom,
 * assuming tile dimensions of 256x256 pixels.
 */
Geo.scale = function ( zoom ) {

    return 256 * Math.pow( 2, zoom );

};

/**
 * Returns zoom level for a given scale value.
 * This only works with a scale value that is based on map pixel width.
 */
Geo.zoom = function ( scale ) {

    return Math.log( scale / 256 ) / Math.LN2;

};

/**
 * Distance between two geographical points using spherical
 * law of cosines approximation or Haversine.
 *
 * See: http://www.movable-type.co.uk/scripts/latlong.html
 */
Geo.distance = function ( latlon1, latlon2, accurate ) {

    var rad = Math.PI / 180;

    var lat1;
    var lat2;

    var a;

    if ( !accurate ) {

        lat1 = latlon1.lat * rad;
        lat2 = latlon2.lat * rad;

        a = Math.sin( lat1 ) * Math.sin( lat2 ) + Math.cos( lat1 ) * Math.cos( lat2 ) * Math.cos( ( latlon2.lon - latlon1.lon ) * rad);

        return Geo.R * Math.acos( Math.min( a, 1 ) );

    } else {

        lat1 = latlon1.lat * rad;
        lat2 = latlon2.lat * rad;

        var lon1 = latlon1.lon * rad;
        var lon2 = latlon2.lon * rad;

        var deltaLat = lat2 - lat1;
        var deltaLon = lon2 - lon1;

        var halfDeltaLat = deltaLat / 2;
        var halfDeltaLon = deltaLon / 2;

        a = Math.sin( halfDeltaLat ) * Math.sin( halfDeltaLat ) + Math.cos( lat1 ) * Math.cos( lat2 ) * Math.sin( halfDeltaLon ) * Math.sin( halfDeltaLon );

        var c = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) );

        return Geo.R * c;

    }

};

/**
 *
 */
Geo.bounds = ( function() {

    let _d = Geo.R * Math.PI * Geo.multiplier;
    return [ [ -(_d), -(_d) ], [ _d, _d ] ];

} )();

export default Geo;
