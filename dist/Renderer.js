import { mat4 } from "gl-matrix";
function main() {
    var m = mat4.create();
    console.log("mat4 = " + m);
    return;
    // const canvas: HTMLCanvasElement | null = document.querySelector("#gameCanvas");
    // if (!canvas) {
    //     alert("No canvas!");
    //     return;
    // }
    // console.log("Hi");
    // canvas.width = 800;
    // canvas.height = 600;
    // const gl: WebGLRenderingContext | null = canvas.getContext("webgl");
    // if (!gl) {
    //     alert("Need webgl!");
    //     return;
    // }
    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
}
window.onload = main;
