import GeoJSONTileLayer from './GeoJSONTileLayer';
import MVTTile from './MVTTile';
import extend from 'lodash.assign';

class MVTTileLayer extends GeoJSONTileLayer {

    constructor( path, options ) {

        var defaults = {

            mvt: true,
            maxLOD: 16,

        };

        options = extend( {}, defaults, options );

        super( path, options );

    }

    _createTile( quadcode, layer ) {

        var newOptions = extend( {}, this.defaults, this._options, {

            outputToScene: false,

        } );

        delete newOptions.attribution;

        return new MVTTile( quadcode, this._path, layer, newOptions );

    }

}

export default MVTTileLayer;

var noNew = function( path, options ) {

    return new MVTTileLayer( path, options );

};

export { noNew as mvtTileLayer };
