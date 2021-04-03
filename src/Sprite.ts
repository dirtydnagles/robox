import { ProgramInfo, BufferInfo, loadTexture, renderSprite, initSquareBuffers } from "./Render";

class Sprite {
    texture: WebGLTexture;
    buffers: BufferInfo;
    rotation: number;
    colors: [number, number, number, number];
    width: number;
    height: number;

    constructor(texture: WebGLTexture, buffers: BufferInfo, width: number, height: number, rotation: number, colors: [number, number, number, number]) {
        this.texture = texture;
        this.buffers = buffers;
        this.width = width;
        this.height = height;
        this.rotation = rotation;
        this.colors = colors;
    }

    render(program_info: ProgramInfo, x: number, y: number) {
        renderSprite(program_info, this, x, y);
    }
}

function fromPath(program_info: ProgramInfo, path: string): Sprite | null {
    let sprite: Sprite;
    function onLoad(image: HTMLImageElement) {
        sprite.width = image.width;
        sprite.height = image.height;
        console.log("Bazinga!");
    }
    let texture = loadTexture(program_info.gl, path, onLoad);
    if (texture === null) {
        return null;
    }
    let buffers = initSquareBuffers(program_info.gl);
    if (buffers === null) {
        return null;
    }
    sprite = new Sprite(texture, buffers, 1, 1, 0, [1, 1, 1, 1]);
    return sprite;
}

export { Sprite, fromPath };