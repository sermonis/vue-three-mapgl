/*
 * Color helpers.
 */
import * as THREE from 'three';

var Color = ( function () {

    var random = function ( color ) {

        let _color = color || 0xffffff;

        return new THREE.Color( _color * Math.random() );

    };

    // TODO: Remove
    var material = function () {

        return new THREE.MeshBasicMaterial( {

            color: 0xff0000,
            // TODO: Remove this by implementing logic to make points clockwise
            side: THREE.BackSide,
            depthWrite: false,
            transparent: true,

        } );

    };

    // TODO: Remove
    var mesh = function ( geometry, material ) {

        return new THREE.Mesh( geometry, material )

    };

    return {

        random: random,
        material: material,
        mesh: mesh,

    };

} )();

export default Color;
