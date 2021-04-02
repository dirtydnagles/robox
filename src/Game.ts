import { initShaderProgram, initSquareBuffers, loadTexture, drawScene, initWebGL } from "./Render";
import type { ProgramInfo, BufferInfo } from "./Render";
import { Sprite } from "./Sprite";

function main() {
    let mprogram_info = initWebGL();
    if (mprogram_info === null) {
        alert("Failed to initialize WebGL.");
        return;
    }
    let program_info = mprogram_info;
    const msquare_buffers = initSquareBuffers(program_info.gl);
    if (msquare_buffers === null) {
        alert("Failed to initialize square buffers.");
        return;
    }
    const square_buffers = msquare_buffers;
    const mtexture = loadTexture(program_info.gl, "res/test.png");
    if (mtexture === null) {
        alert("Failed to load textures.");
        return;
    }
    const texture = mtexture;

    let sprites: Sprite[] = [];
    const N = 10;
    for (let i = 0; i < N; i++) {
        let p = i / N;
        let theta = p * 2 * Math.PI;
        let dist = 100;
        let x = program_info.gl.drawingBufferWidth / 2 + dist * Math.cos(theta);
        let y = program_info.gl.drawingBufferHeight / 2 + dist * Math.sin(theta);
        let r = 1;
        let g = 1;
        let b = 1;
        let a = 1;
        sprites[i] = new Sprite(texture, 32, 32, square_buffers, x, y, theta, [r, g, b, a]);
    }

    let then = -1;
    function step(now: DOMHighResTimeStamp) {
        if (then === -1) {
            then = now;
        }
        const delta = now - then;
        update(program_info, sprites, delta);
        render(program_info, sprites, delta);
        requestAnimationFrame(step);
    } 

    requestAnimationFrame(step);
}

function update(program_info: ProgramInfo, sprites: Sprite[], delta: number) {
    let t = Date.now() / 1000;
    for (let i = 0; i < sprites.length; i++) {
        let sprite = sprites[i];
        let p = i / sprites.length;
        let theta = p * 2 * Math.PI;
        let dist = 50 + (1 + Math.cos(t)) / 2 * 150;
        sprite.x = program_info.gl.drawingBufferWidth / 2 + dist * Math.cos(theta + t);
        sprite.y = program_info.gl.drawingBufferHeight / 2 + dist * Math.sin(theta + t);
        switch (i % 3) {
            case 0:
                let r = (1 + Math.cos(t)) / 2;
                sprite.width = 16 + r * 32;
                sprite.colors = [r, 0, 0, 1];
                break;
            case 1:
                let g = (1 + Math.cos(t * 0.89)) / 2;
                sprite.width = 16 + g * 32;
                sprite.colors = [0, g, 0, 1];
                break;
            case 2:
                let b = (1 + Math.cos(t * 1.12)) / 2;
                sprite.width = 16 + b * 32;
                sprite.colors = [0, 0, b, 1];
                break;
        }
        sprite.height = sprite.width;
    }
}

function render(program_info: ProgramInfo, sprites: Sprite[], delta: number) {
    drawScene(program_info, sprites, delta);
}

window.onload = main;