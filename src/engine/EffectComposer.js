import * as THREE from 'three';
import EffectComposer from '../vendor/EffectComposer';

/**
 *
 */
export default function ( renderer, container ) {

    let _composer = new EffectComposer( renderer );

    let _updateSize = () => {

        /**
         * TODO: Re-enable this when performance issues can be solved.
         * Rendering double the resolution of the screen can be really slow.
         */
        // var pixelRatio = window.devicePixelRatio
        var pixelRatio = 1;

        _composer.setSize( container.clientWidth * pixelRatio, container.clientHeight * pixelRatio );

    };

    window.addEventListener( 'resize', _updateSize, false );

    _updateSize();

    return _composer;

};
