import GeoJSONTile from './GeoJSONTile';
import extend from 'lodash.assign';

import Pbf from 'pbf';
import { VectorTile } from '@mapbox/vector-tile';

/**
 * TODO: Process raw MVT data rather than convert to GeoJSON.
 * TODO: Make it so full request and processing cycle occurs within a worker.
 */
class MVTTile extends GeoJSONTile {

    constructor( quadcode, path, layer, options ) {

        var defaults = {

            mvt: true,
            fetch: true,

        };

        options = extend( {}, defaults, options );

        super( quadcode, path, layer, options );

        this._controller;
        this._signal;

    }

    _requestTile() {

        var urlParams = {

            x: this._tile[0],
            y: this._tile[1],
            z: this._tile[2],

        };

        var url = this._getTileURL( urlParams );

        if ( 'AbortController' in window ) {

            // Abort any previous requests.
            if ( this._controller ) {

                this._controller.abort();

            }

            // Create a fresh abort controller so old ones don't cause problems.
            this._controller = new AbortController();
            this._signal = this._controller.signal;

        }

        this._aborted = false;

        fetch( url, {

            signal: this._signal,

        } ).then( ( response ) => {

            return response.arrayBuffer();

        } ).then( ( data ) => {

            var buffer = new Pbf( data );
            var vt = new VectorTile( buffer );

            var fc = { type: 'FeatureCollection', features: [] };

            var layers = [];

            if ( this._options.layers ) {

                layers = this._options.layers;

            }

            // Process defined layers (otherwise all).
            for ( var key in vt.layers ) {

                // console.log( key );

                if ( layers.length > 0 ) {

                    if ( !layers.includes( key ) ) {

                        continue;

                    }

                }

                var layer = vt.layers[ key ];
                for ( var f = 0; f < layer.length; f++ ) {

                    var feature = layer.feature( f );
                    fc.features.push( feature.toGeoJSON( urlParams.x, urlParams.y, urlParams.z ) );

                }
            }

            this._processTileData(fc);

            // Clean up.
            buffer = null;
            vt = null;
            layers = null;
            fc = null;

        } ).catch( ( err ) => {

            if ( err.name === 'AbortError' ) {

                return;

            }

            console.error( err );
        } );

    }

}

export default MVTTile;

var noNew = function( path, options ) {

    return new MVTTile( path, options );

};

export { noNew as mvtTile };
