import extend from 'lodash.assign';
import reqwest from 'reqwest';

import LayerGroup from './LayerGroup';

import GeoJSON from '../util/GeoJSON';
import Buffer from '../util/Buffer';

import PickingMaterial from '../engine/PickingMaterial';
import PolygonLayer from './geometry/PolygonLayer';
import PolylineLayer from './geometry/PolylineLayer';
import PointLayer from './geometry/PointLayer';

/**
 * TODO: Consider adopting GeoJSON CSS.
 * http://wiki.openstreetmap.org/wiki/Geojson_CSS
 */

/**
 * TODO: Allow interaction to be defined per-layer to save on resources.
 * For example, only allow polygons to be interactive via a polygonInteractive option.
 */
class ThreeJSONLayer extends LayerGroup {

    /**
     *
     */
    constructor( json, options ) {

        let _defaults = {

            output: false,
            interactive: false,
            topojson: false,
            filter: null,
            layers: null,
            onEachFeature: null,
            polygonMaterial: null,
            onPolygonMesh: null,
            onPolygonBufferAttributes: null,
            polylineMaterial: null,
            onPolylineMesh: null,
            onPolylineBufferAttributes: null,
            pointGeometry: null,
            pointMaterial: null,
            onPointMesh: null,
            style: GeoJSON.defaultStyle,
            keepFeatures: true,

        };

        let _options = extend( {}, _defaults, options );

        if ( typeof options.style === 'function' ) {

            _options.style = options.style;

        } else {

            _options.style = extend( {}, _defaults.style, options.style );

        }

        super( _options );

        this._json = json;

    }

    /**
     *
     */
    _onAdd( world ) {

        /**
         * Only add to picking mesh if this layer is controlling output.
         * Otherwise, assume another component will eventually add a mesh to
         * the picking scene.
         */
        if ( this.isOutput() ) {

            this._pickingMesh = new THREE.Object3D();
            this.addToPicking( this._pickingMesh );

        }

        // Request data from URL if needed.
        if ( typeof this._json === 'string' ) {

            return this._requestData( this._json );

        } else {

            // TODO: remove
            // -----------------------------------------
            // -----------------------------------------
            // -----------------------------------------
            let _loader = new THREE.ObjectLoader();
            _result = _loader.parse( this._json );

            this.add( _result );
            // -----------------------------------------
            // -----------------------------------------
            // -----------------------------------------

            // Process and add ThreeJSON to layer.
            return this._processData( this._json );

        }

    }

    /**
     *
     */
    _requestData( url ) {

        return new Promise( ( resolve, reject ) => {

            this._request = reqwest( {

                url: url,
                type: 'json',
                crossOrigin: true,

            } ).then( result => {

                // Clear request reference.
                this._request = null;
                this._processData( result ).then( () => {

                    resolve( this );

                } );

            } ).catch( err => {

                console.error( err );

                // Clear request reference.
                this._request = null;
                reject( err );

            } );

        } );

    }

    /**
     * TODO: Wrap into a helper method so this isn't
     * duplicated in the tiled GeoJSON output layer.
     *
     * Need to be careful as to not make it impossible to fork
     * this off into a worker script at a later stage.
     */
    _processData( data ) {

        return new Promise( ( resolve, reject ) => {

            var layers = [];
            let _loader, _result, _mesh;

            if ( this._options.layers ) {

                layers = this._options.layers;

            }

            // Run filter, if provided.
            if ( this._options.filter ) {

                features = this._json.features.filter( this._options.filter );

            }

            // https://github.com/mrdoob/three.js/blob/c4f53e0b4afe365d94da9230d2c9273a57c0561f/editor/js/Loader.js#L524
            switch ( data.metadata.type.toLowerCase() ) {

    			case 'buffergeometry':

    				_loader = new THREE.BufferGeometryLoader();
    				_result = _loader.parse( data );

    				_mesh = new THREE.Mesh( _result );

    				// editor.execute( new AddObjectCommand( editor, mesh ) );

    				break;

    			case 'geometry':

    				console.error( 'Loader: "Geometry" is no longer supported.' );

    				break;

    			case 'object':

    				_loader = new THREE.ObjectLoader();
    				// loader.setResourcePath( scope.texturePath );

    				_result = _loader.parse( data );

                    console.dir( _result );
                    console.dir( this._layers );

                    // this._polylineMesh = result.mesh;
                    // this.add( _result );

                    // console.dir( this._object3D );

                    //
                    // if ( result.pickingMesh ) {
                    //
                    //     this._pickingMesh.add( result.pickingMesh );
                    //
                    // }

    				if ( _result.isScene ) {

    					// editor.execute( new SetSceneCommand( editor, result ) );

    				} else {

    					// editor.execute( new AddObjectCommand( editor, result ) );

    				}

    				break;

    			case 'app':

    				// editor.fromJSON( data );

    				break;

    		}


        } );

        // this._polylineMesh = result.mesh;
        // this.add( this._polylineMesh );
        //
        // if ( result.pickingMesh ) {
        //
        //     this._pickingMesh.add( result.pickingMesh );
        //
        // }

        return new Promise( ( resolve ) => {

            var layers = [];

            if ( this._options.layers ) {

                layers = this._options.layers;

            }

            /**
             * Collects features into a single FeatureCollection.
             * Also converts TopoJSON to GeoJSON if instructed.
             */
            this._json = GeoJSON.collectFeatures( data, layers, this._options.topojson );

            /**
             * Check that GeoJSON is valid / usable.
             */
            var features = this._json.features;

            // Run filter, if provided.
            if ( this._options.filter ) {

                features = this._json.features.filter( this._options.filter );

            }

            var defaults = {};

            // Assume that a style won't be set per feature.
            var style = this._options.style;

            var layerPromises = [];

            var options;

            features.forEach( feature => {

                // Get per-feature style object, if provided.
                if ( typeof this._options.style === 'function' ) {

                    style = extend( {}, GeoJSON.defaultStyle, this._options.style( feature ) );

                }

                options = extend( {}, defaults, {

                    /**
                     * If merging feature layers, stop them outputting themselves.
                     * If not, let feature layers output themselves to the world.
                     */
                    output: !this.isOutput(),
                    interactive: this._options.interactive,
                    style: style,

                } );

                var layer = this._featureToLayer( feature, options );

                if ( !layer ) {

                    return;

                }

                /**
                 * Sometimes you don't want to store a reference to the feature.
                 * For example, to save memory when being used by tile layers.
                 */
                if ( this._options.keepFeatures ) {

                    layer.feature = feature;

                }

                /**
                 * If defined, call a function for each feature.
                 * This is commonly used for adding event listeners from the user script.
                 */
                if ( this._options.onEachFeature ) {

                    this._options.onEachFeature( feature, layer );

                }

                /**
                 * TODO: Make this a promise array and only continue on completion.
                 */
                layerPromises.push( this.addLayer( layer ) );

            } );

            Promise.all( layerPromises ).then( ( results ) => {

                /**
                 * If merging layers do that now, otherwise skip as the geometry layers
                 * should have already outputted themselves.
                 */
                if ( !this.isOutput() ) {

                    resolve();
                    return;

                }

                /**
                 * From here on we can assume that we want to merge the layers.
                 */
                var polygonAttributes = [];
                var polygonOutlineAttributes = [];
                var polygonAttributeLengths = {

                    positions: 3,
                    normals: 3,
                    colors: 3,

                };

                var polygonFlat = true;

                var polylineAttributes = [];
                var polylineAttributeLengths = {

                    positions: 3,
                    colors: 3,

                };

                var polylineFlat = true;

                var pointAttributes = [];
                var pointAttributeLengths = {

                    positions: 3,
                    normals: 3,
                    colors: 3,

                };

                var pointFlat = true;

                this._layers.forEach( layer => {

                    if ( layer instanceof PolygonLayer ) {

                        polygonAttributes.push( layer.getBufferAttributes() );

                        var outlineBufferAttributes = layer.getOutlineBufferAttributes();

                        if ( outlineBufferAttributes ) {

                            polygonOutlineAttributes.push( outlineBufferAttributes );

                        }

                        if ( polygonFlat && !layer.isFlat() ) {

                            polygonFlat = false;

                        }

                        if (this._options.interactive) {

                            polygonAttributeLengths.pickingIds = 1;

                        }

                    } else if ( layer instanceof PolylineLayer ) {

                        polylineAttributes.push( layer.getBufferAttributes() );

                        if ( polylineFlat && !layer.isFlat() ) {

                            polylineFlat = false;

                        }

                        if ( this._options.interactive ) {

                            polylineAttributeLengths.pickingIds = 1;

                        }

                    } else if ( layer instanceof PointLayer ) {

                        pointAttributes.push( layer.getBufferAttributes() );

                        if ( pointFlat && !layer.isFlat() ) {

                            pointFlat = false;

                        }

                        if ( this._options.interactive ) {

                            pointAttributeLengths.pickingIds = 1;

                        }
                    }

                } );

                var style;

                if ( polygonAttributes.length > 0 ) {

                    var mergedPolygonAttributes = Buffer.mergeAttributes( polygonAttributes );

                    var mergedPolygonOutlineAttributes;

                    if ( polygonOutlineAttributes.length > 0 ) {

                        mergedPolygonOutlineAttributes = Buffer.mergeAttributes( polygonOutlineAttributes );

                    }

                    style = ( typeof this._options.style === 'function' ) ? this._options.style( this._json.features[ 0 ] ) : this._options.style;
                    style = extend( {}, GeoJSON.defaultStyle, style );

                    this._setPolygonMesh( mergedPolygonAttributes, polygonAttributeLengths, style, polygonFlat ).then( ( result ) => {

                        this._polygonMesh = result.mesh;
                        this.add( this._polygonMesh );

                        if ( mergedPolygonOutlineAttributes ) {

                            style = ( typeof this._options.style === 'function' ) ? this._options.style( this._json.features[ 0 ] ) : this._options.style;
                            style = extend( {}, GeoJSON.defaultStyle, style );

                            if ( style.outlineRenderOrder !== undefined ) {

                                style.lineRenderOrder = style.outlineRenderOrder;

                            } else {

                                style.lineRenderOrder = ( style.renderOrder ) ? style.renderOrder + 1 : 4;

                            }

                            if ( style.outlineWidth ) {

                                style.lineWidth = style.outlineWidth;

                            }

                            this._setPolylineMesh( mergedPolygonOutlineAttributes, polylineAttributeLengths, style, true ).then( ( result ) => {

                                this.add( result.mesh );

                            } );
                        }

                        if ( result.pickingMesh ) {

                            this._pickingMesh.add( result.pickingMesh );

                        }

                    } );

                }

                if ( polylineAttributes.length > 0 ) {

                    var mergedPolylineAttributes = Buffer.mergeAttributes( polylineAttributes );

                    style = ( typeof this._options.style === 'function' ) ? this._options.style( this._json.features[ 0 ] ) : this._options.style;
                    style = extend( {}, GeoJSON.defaultStyle, style );

                    this._setPolylineMesh( mergedPolylineAttributes, polylineAttributeLengths, style, polylineFlat ).then( ( result ) => {

                        this._polylineMesh = result.mesh;
                        this.add( this._polylineMesh );

                        if ( result.pickingMesh ) {

                            this._pickingMesh.add( result.pickingMesh );

                        }

                    } );

                }

                if ( pointAttributes.length > 0 ) {

                    var mergedPointAttributes = Buffer.mergeAttributes( pointAttributes );

                    style = ( typeof this._options.style === 'function' ) ? this._options.style( this._json.features[ 0 ] ) : this._options.style;
                    style = extend( {}, GeoJSON.defaultStyle, style );

                    this._setPointMesh( mergedPointAttributes, pointAttributeLengths, style, pointFlat ).then( ( result ) => {

                        this._pointMesh = result.mesh;
                        this.add( this._pointMesh );

                        if ( result.pickingMesh ) {

                            this._pickingMesh.add( result.pickingMesh );

                        }

                    } );

                }

                /**
                 * Clean up layers.
                 *
                 * TODO: Are there ever situations where the unmerged buffer attributes
                 * and coordinates would still be required?
                 */
                this._layers.forEach( layer => {

                    layer.clearBufferAttributes();
                    layer.clearCoordinates();

                } );

                resolve();

            } );

        } );

    }

    /**
     * Create and store mesh from buffer attributes.
     *
     * TODO: Probably remove this and call static method directly as it's just a proxy.
     */
    _setPolygonMesh( attributes, attributeLengths, style, flat ) {

        return PolygonLayer.SetMesh( attributes, attributeLengths, flat, style, this._options, this._world._environment._skybox );

    }

    /**
     *
     */
    _setPolylineMesh( attributes, attributeLengths, style, flat ) {

        return PolylineLayer.SetMesh( attributes, attributeLengths, flat, style, this._options );

    }

    /**
     *
     */
    _setPointMesh( attributes, attributeLengths, style, flat ) {

        return PointLayer.SetMesh( attributes, attributeLengths, flat, style, this._options );

    }

    /**
     * TODO: Support all GeoJSON geometry types.
     */
    _featureToLayer( feature, options ) {

        var geometry = feature.geometry;
        var coordinates = ( geometry.coordinates ) ? geometry.coordinates : null;

        if ( !coordinates || !geometry ) {

            return;

        }

        if ( geometry.type === 'Polygon' || geometry.type === 'MultiPolygon' ) {

            // Get material instance to use for polygon, if provided.
            if ( typeof this._options.polygonMaterial === 'function' ) {

                options.polygonMaterial = this._options.polygonMaterial( feature );

            }

            if ( typeof this._options.onPolygonMesh === 'function' ) {

                options.onPolygonMesh = this._options.onPolygonMesh;

            }

            // Pass onBufferAttributes callback, if defined.
            if ( typeof this._options.onPolygonBufferAttributes === 'function' ) {

                options.onBufferAttributes = this._options.onPolygonBufferAttributes;

            }

            return new PolygonLayer( coordinates, options );

        }

        if ( geometry.type === 'LineString' || geometry.type === 'MultiLineString' ) {

            // Get material instance to use for line, if provided.
            if ( typeof this._options.lineMaterial === 'function' ) {

                options.lineMaterial = this._options.lineMaterial( feature );

            }

            if ( typeof this._options.onPolylineMesh === 'function' ) {

                options.onPolylineMesh = this._options.onPolylineMesh;

            }

            // Pass onBufferAttributes callback, if defined.
            if ( typeof this._options.onPolylineBufferAttributes === 'function' ) {

                options.onBufferAttributes = this._options.onPolylineBufferAttributes;

            }

            return new PolylineLayer( coordinates, options );

        }

        if ( geometry.type === 'Point' || geometry.type === 'MultiPoint' ) {

            // Get geometry object to use for point, if provided.
            if ( typeof this._options.pointGeometry === 'function' ) {

                options.pointGeometry = this._options.pointGeometry( feature );

            }

            // Get material instance to use for point, if provided.
            if ( typeof this._options.pointMaterial === 'function' ) {

                options.pointMaterial = this._options.pointMaterial( feature );

            }

            if ( typeof this._options.onPointMesh === 'function' ) {

                options.onPointMesh = this._options.onPointMesh;

            }

            return new PointLayer( coordinates, options );

        }

    }

    /**
     *
     */
    _abortRequest() {

        if ( !this._request ) {

            return;

        }

        this._request.abort();

    }

    /**
     * Destroy the layers and remove them from the scene and memory.
     */
    destroy() {

        // Cancel any pending requests.
        this._abortRequest();

        // Clear request reference.
        this._request = null;

        this._json = null;

        if ( this._pickingMesh ) {

            /**
             * TODO: Properly dispose of picking mesh.
             */
            this._pickingMesh = null;

        }

        if ( this._polygonMesh ) {

            this._polygonMesh = null;

        }

        if ( this._polylineMesh ) {

            this._polylineMesh = null;

        }

        if ( this._pointMesh ) {

            this._pointMesh = null;

        }

        // Run common destruction logic from parent.
        super.destroy();

    }

    /**
     * Proxy to destroy().
     */
    terminate() {

        this.destroy();

    }

}

export default ThreeJSONLayer;

var noNew = function( json, options ) {

    return new ThreeJSONLayer( json, options );

};

/**
 * Initialise without requiring new keyword.
 */
export { noNew as threeJSONLayer };
