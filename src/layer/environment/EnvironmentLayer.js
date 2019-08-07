import * as THREE from 'three';
import extend from 'lodash.assign';

import Skybox from './Skybox';
import Layer from './../Layer';

/**
 * TODO: Make sure nothing is left behind
 * in the heap after calling destroy().
 */
class EnvironmentLayer extends Layer {

    /**
     *
     */
    constructor( options ) {

        var defaults = {

            skybox: false,

        };

        var _options = extend( {}, defaults, options );

        super( _options );

    }

    /**
     *
     */
    _onAdd() {

        this._initLights();

        if ( this._options.skybox ) {

            this._initSkybox();

        }

        // this._initGrid();

        return Promise.resolve( this );

    }

    /**
     * Not fleshed out or thought through yet.
     *
     * Lights could potentially be put it their own 'layer'
     * to keep this class much simpler and less messy.
     */
    _initLights() {

        /**
         * Position doesn't really matter (the angle is important),
         * however it's used here so the helpers look more natural.
         */
        if ( !this._options.skybox ) {

            let _directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );

            _directionalLight.position.x = 10000;
            _directionalLight.position.y = 10000;
            _directionalLight.position.z = 10000;

            /**
             * Physically based rendering (PBR).
             * https://en.wikipedia.org/wiki/Physically_based_rendering
             *
             * TODO: Get shadows working in non-PBR scenes.
             */

            // _directionalLight.castShadow = true;
            //
            // var d = 100;
            // _directionalLight.shadow.camera.left = -d;
            // _directionalLight.shadow.camera.right = d;
            // _directionalLight.shadow.camera.top = d;
            // _directionalLight.shadow.camera.bottom = -d;
            //
            // _directionalLight.shadow.camera.near = 10;
            // _directionalLight.shadow.camera.far = 100;
            //
            // // TODO: Need to dial in on a good shadowmap size
            // _directionalLight.shadow.mapSize.width = 2048;
            // _directionalLight.shadow.mapSize.height = 2048;
            //
            // // _directionalLight.shadowBias = -0.0010;
            // // _directionalLight.shadow.darkness = 0.15;

            let _directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.5 );

            _directionalLight2.position.x = -10000;
            _directionalLight2.position.y = 10000;
            _directionalLight2.position.z = 0;

            let _directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.5 );

            _directionalLight3.position.x = 10000;
            _directionalLight3.position.y = 10000;
            _directionalLight3.position.z = -10000;

            this.add(_directionalLight);
            this.add(_directionalLight2);
            this.add(_directionalLight3);

            // Debug lights.
            // let _helper = new THREE.DirectionalLightHelper(_directionalLight, 10);
            // let _helper2 = new THREE.DirectionalLightHelper(_directionalLight2, 10);
            // let _helper3 = new THREE.DirectionalLightHelper(_directionalLight3, 10);
            //
            // this.add(_helper);
            // this.add(_helper2);
            // this.add(_helper3);

        } else {

            // Directional light that will be projected from the sun.
            this._skyboxLight = new THREE.DirectionalLight( 0xffffff, 1 );
            this._skyboxLight.castShadow = true;

            var d = 10000;

            this._skyboxLight.shadow.camera.left = -d;
            this._skyboxLight.shadow.camera.right = d;
            this._skyboxLight.shadow.camera.top = d;
            this._skyboxLight.shadow.camera.bottom = -d;

            this._skyboxLight.shadow.camera.near = 10000;
            this._skyboxLight.shadow.camera.far = 70000;

            // TODO: Need to dial in on a good shadowmap size.
            this._skyboxLight.shadow.mapSize.width = 2048;
            this._skyboxLight.shadow.mapSize.height = 2048;

            // this._skyboxLight.shadowBias = -0.0010;
            // this._skyboxLight.shadow.darkness = 0.15;

            // this._object3D.add( new THREE.CameraHelper( this._skyboxLight.shadow.camera ));

            this.add( this._skyboxLight );

        }

    }

    /**
     *
     */
    _initSkybox() {

        this._skybox = new Skybox( this._world, this._skyboxLight );
        this.add( this._skybox._mesh );

    }

    //

    /**
     * Add grid helper for context
     * during initial development.
     */
    _initGrid() {

        let _size = 4000;
        let _step = 100;

        let _gridHelper = new THREE.GridHelper( _size, _step );
        this.add( _gridHelper );

    }

    /**
     * Clean up environment.
     */
    destroy() {

        this._skyboxLight = null;

        if ( this._skybox ) {

            this.remove( this._skybox._mesh );
            this._skybox.destroy();
            this._skybox = null;

        }

        super.destroy();

    }

    /**
     * Proxy to destroy().
     */
    terminate() {

        this.destroy();

    }

}

export default EnvironmentLayer;

var noNew = function ( options ) {

    return new EnvironmentLayer( options );

};

/**
 * Initialise without requiring new keyword.
 */
export { noNew as environmentLayer };
