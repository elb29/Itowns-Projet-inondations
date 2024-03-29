import * as THREE from 'three';
import computeBuffers from 'Core/Prefab/computeBufferTileGeometry';

function defaultBuffers(params) {
    params.buildIndex = true;
    params.center = params.builder.center(params.extent).clone();
    const buffers = computeBuffers(params);
    buffers.index = new THREE.BufferAttribute(buffers.index, 1);
    buffers.position = new THREE.BufferAttribute(buffers.position, 3);
    return buffers;
}

class TileGeometry extends THREE.BufferGeometry {
    constructor(params, buffers = defaultBuffers(params)) {
        super();
        this.center = params.center;
        this.extent = params.extent;

        this.setIndex(buffers.index);
        this.addAttribute('position', buffers.position);
    }
}

export default TileGeometry;
