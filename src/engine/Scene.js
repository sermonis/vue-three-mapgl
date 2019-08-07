import * as THREE from 'three';

/**
 * This can be imported from anywhere and will still reference the same scene,
 * though there is a helper reference in Engine.scene.
 */
export default ( function () {

    let _scene = new THREE.Scene();

    /**
     * TODO: Re-enable when this works with the skybox.
     * TODO: Move fog to somewere else engine / world.
     * TODO: Make fog settings optional.
     */
    _scene.fog = new THREE.Fog( 0xffffff, 1, 45000 );

    // var _axesHelper = new THREE.AxesHelper( 5 );
    // var _axesHelper = new THREE.AxisHelper( 5 );
    // _scene.add( _axesHelper );

    // let _gridHelper = new THREE.GridHelper( 10, 10 );
    // _scene.add( _gridHelper );

    return _scene;

} )();
