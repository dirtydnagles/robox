import { BufferInfo } from "./Render";

class Sprite {
    texture: WebGLTexture;
    buffers: BufferInfo;
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(texture: WebGLTexture, width: number, height: number, buffers: BufferInfo, x: number, y: number) {
        this.texture = texture;
        this.buffers = buffers;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export { Sprite };