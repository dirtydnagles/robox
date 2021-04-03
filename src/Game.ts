import { initShaderProgram, initSquareBuffers, loadTexture, initWebGL, renderSprite, preRender } from "./Render";
import type { ProgramInfo, BufferInfo } from "./Render";
import { Sprite, fromPath } from "./Sprite";
import { Level } from "./Level";
import { Entity } from "./Entity";

function main() {
    let mprogram_info = initWebGL();
    if (mprogram_info === null) {
        alert("Failed to initialize WebGL.");
        return;
    }
    let program_info = mprogram_info;
    // let ms1: Sprite | null = fromPath(program_info, "res/test.png");
    // if (ms1 === null) {
    //     alert("Failed to load sprite.");
    //     return;
    // }
    // let s1 = ms1;

    let ms1 = fromPath(program_info, "res/test.png");
    if (ms1 === null) {
        alert("Failed to load sprite from path.");
        return;
    }
    let s1 = ms1;

    let e1 = new Entity({x: 100, y: 100}, {x: 0, y: 0}, s1);
    
    let level = new Level();
    level.spawn(e1, 100, 100);
    let then = -1;
    function step(now: DOMHighResTimeStamp) {
        if (then === -1) {
            then = now;
        }
        const delta = now - then;
        level.update(delta);
        level.render(program_info);
        requestAnimationFrame(step);
    } 

    requestAnimationFrame(step);
}

window.onload = main;