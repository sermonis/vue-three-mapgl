import GeoJSONLayer from './GeoJSONLayer';
import extend from 'lodash.assign';

/**
 *
 */
class TopoJSONLayer extends GeoJSONLayer {

    /**
     *
     */
    constructor( topojson, options ) {

        let _defaults = {

            topojson: true,

        };

        let _options = extend( {}, _defaults, options );

        super( topojson, _options );

    }

}

export default TopoJSONLayer;

var noNew = function( topojson, options ) {

    return new TopoJSONLayer( topojson, options );

};

/**
 * Initialise without requiring new keyword.
 */
export { noNew as topoJSONLayer };
