import * as THREE from 'three';

/**
 * This can only be accessed from Engine.camera
 * if you want to reference the same scene in multiple places.
 */

/**
 * TODO: Ensure that FOV looks natural on all aspect ratios.
 * http://stackoverflow.com/q/26655930/997339
 */
export default function ( container ) {

    let _camera = new THREE.PerspectiveCamera( 45, 1, 1, 2000000 );

    // camera.position.y = 4000;
    // camera.position.z = 4000;

    _camera.position.y = 11000;
    _camera.position.z = 0;

    let _updateSize = function() {

        _camera.aspect = container.clientWidth / container.clientHeight;
        _camera.updateProjectionMatrix();

    }

    window.addEventListener( 'resize', _updateSize, false );

    _updateSize();

    return _camera;

};
