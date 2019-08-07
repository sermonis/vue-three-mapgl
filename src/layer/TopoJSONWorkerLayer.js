import GeoJSONWorkerLayer from './GeoJSONWorkerLayer';
import extend from 'lodash.assign';

/**
 *
 */
class TopoJSONWorkerLayer extends GeoJSONWorkerLayer {

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

export default TopoJSONWorkerLayer;

var noNew = function( topojson, options ) {

    return new TopoJSONWorkerLayer( topojson, options );

};

/**
 * Initialise without requiring new keyword.
 */
export { noNew as topoJSONWorkerLayer };
