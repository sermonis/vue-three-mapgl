import * as THREE from 'three';
import { CSS2DRenderer } from '../vendor/CSS2DRenderer';

import DOMScene2D from './DOMScene2D'; // ???

/**
 * This can only be accessed from Engine.renderer
 * if you want to reference the same scene in multiple places.
 */
export default function ( container ) {

    let _renderer = new CSS2DRenderer();

    _renderer.domElement.style.position = 'absolute';
    _renderer.domElement.style.top = 0;

    container.appendChild( _renderer.domElement );

    let _updateSize = () => {

        _renderer.setSize( container.clientWidth, container.clientHeight );

    }

    window.addEventListener( 'resize', _updateSize, false );

    _updateSize()

    return _renderer;

};
