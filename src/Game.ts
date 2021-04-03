import { initShaderProgram, initSquareBuffers, loadTexture, initWebGL, renderSprite, preRender } from "./Render";
import type { ProgramInfo, BufferInfo } from "./Render";
import { Sprite, fromPath } from "./Sprite";
import { Level } from "./Level";

function main() {
    let mprogram_info = initWebGL();
    if (mprogram_info === null) {
        alert("Failed to initialize WebGL.");
        return;
    }
    let program_info = mprogram_info;
    let ms1: Sprite | null = fromPath(program_info, "res/test.png");
    if (ms1 === null) {
        alert("Failed to load sprite.");
        return;
    }
    let s1 = ms1;

    let level = new Level();
    let then = -1;
    function step(now: DOMHighResTimeStamp) {
        if (then === -1) {
            then = now;
        }
        const delta = now - then;
        // s1.render(program_info, 100, 100);
        preRender(program_info);
        renderSprite(program_info, s1, 100, 100);
        // level.update(delta);
        // level.render(program_info);
        // update(program_info, sprites, delta);
        // render(program_info, sprites, delta);
        requestAnimationFrame(step);
    } 

    requestAnimationFrame(step);
}

window.onload = main;