import { initShaderProgram, initSquareBuffers, loadTexture, drawScene } from "./Render";
import type { ProgramInfo, BufferInfo } from "./Render";
import { Sprite } from "./Sprite";

const vs_source = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    attribute vec2 aTextureCoord;
    
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    
    varying lowp vec4 vColor;
    
    varying highp vec2 vTextureCoord;
    
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
        vTextureCoord = aTextureCoord;
    }
`;

const fs_source = `
    varying lowp vec4 vColor;
    varying highp vec2 vTextureCoord;
    
    uniform sampler2D uSampler;
    
    void main() {
        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;
    }
`;

function main() {
    const mcanvas: HTMLCanvasElement | null = document.querySelector("#gameCanvas");
    if (mcanvas === null) {
        alert("Failed to select canvas.");
        return;
    }
    const canvas = mcanvas;
    const mgl: WebGLRenderingContext | null = canvas.getContext("webgl");
    if (mgl === null) {
        alert("Failed to initialize WebGL");
        return;
    }
    const gl = mgl;
    
    function fitCanvasToScreen() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    fitCanvasToScreen();
    window.onresize = fitCanvasToScreen;
    
    if (gl === null) {
        alert("Could not initialize WebGL.");
        return;
    }
    
    const shader_program = initShaderProgram(gl, vs_source, fs_source);
    if (shader_program === null) {
        alert("Failed to initialize shader program.");
        return;
    }

    let projection_matrix = gl.getUniformLocation(shader_program, "uProjectionMatrix");
    let model_view_matrix = gl.getUniformLocation(shader_program, "uModelViewMatrix");
    let sampler = gl.getUniformLocation(shader_program, "uSampler");
    if (projection_matrix === null || model_view_matrix === null || sampler === null) {
        alert("Failed to get uniform locations.");
        return;
    }

    const program_info: ProgramInfo = {
        program: shader_program,
        attribute_locations: {
            vertex_position: gl.getAttribLocation(shader_program, "aVertexPosition"),
            vertex_color: gl.getAttribLocation(shader_program, "aVertexColor"),
            texture_coord: gl.getAttribLocation(shader_program, "aTextureCoord"),
        },
        uniform_locations: {
            projection_matrix,
            model_view_matrix,
            sampler,
        },
    };
    
    const msquare_buffers = initSquareBuffers(gl);
    if (msquare_buffers === null) {
        alert("Failed to initialize square buffers.");
        return;
    }
    const square_buffers = msquare_buffers;
    const mtexture = loadTexture(gl, "res/test.png");
    if (mtexture === null) {
        alert("Failed to load textures.");
        return;
    }
    const texture = mtexture;

    let s1 = new Sprite(texture, 32, 32, square_buffers, 100.5, 0.5);
    let s2 = new Sprite(texture, 32, 32, square_buffers, 0.25, 0.25);
    let sprites = [s1, s2];

    let then = -1;
    function step(now: DOMHighResTimeStamp) {
        if (then === -1) {
            then = now;
        }
        const delta = now - then;
        update(sprites, delta);
        render(gl, program_info, sprites, delta);
        requestAnimationFrame(step);
    } 

    requestAnimationFrame(step);
}

function update(sprites: Sprite[], delta: number) {

}

function render(gl: WebGLRenderingContext, program_info: ProgramInfo, sprites: Sprite[], delta: number) {
    drawScene(gl, program_info, sprites, delta);
}

window.onload = main;