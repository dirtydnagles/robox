import { Sprite } from "./Sprite";
import { mat4 } from "gl-matrix";

type ProgramInfo = {
    gl: WebGLRenderingContext,
    program: WebGLProgram,
    attribute_locations: {
        vertex_position: number,
        vertex_color: number,
        texture_coord: number,
    },
    uniform_locations: {
        projection_matrix: WebGLUniformLocation,
        model_view_matrix: WebGLUniformLocation,
        sampler: WebGLUniformLocation,
        tints: WebGLUniformLocation,
    },
};

type BufferInfo = {
    vertex: WebGLBuffer,
    texture_coord: WebGLBuffer,
    color: WebGLBuffer,
    index: WebGLBuffer,
};

const vs_source = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    attribute vec2 aTextureCoord;
    
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    
    varying lowp vec4 vColor;
    uniform lowp vec4 uTints;
    
    varying highp vec2 vTextureCoord;
    
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor * uTints;
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

function initShaderProgram(gl: WebGLRenderingContext, vs_source: string, fs_source: string) {
    const shader_program = gl.createProgram();
    if (shader_program === null) {
        alert("Failed to create program.");
        return null;
    }
    const vertex_shader = loadShader(gl, gl.VERTEX_SHADER, vs_source);
    if (vertex_shader === null) {
        alert("Failed to load vertex shader.");
        return null;
    }
    const fragment_shader = loadShader(gl, gl.FRAGMENT_SHADER, fs_source);
    if (fragment_shader === null) {
        alert("Failed to load fragment shader.");
        return null;
    }
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);
    
    if (!gl.getProgramParameter(shader_program, gl.LINK_STATUS)) {
        alert("Unable to initialize shader program: " + gl.getProgramInfoLog(shader_program));
        return null;
    }
    else {
        return shader_program;
    }
}

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    const shader = gl.createShader(type);
    if (shader === null) {
        alert("Failed to create shader.");
        return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("An error occured compiling shader: " + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    else {
        return shader;
    }
}

function loadTexture(gl: WebGLRenderingContext, url: string) {
    // Create a 1-pixel large default texture by default.
    const texture = gl.createTexture();
    const level = 0;
    const internal_format = gl.RGBA;
    const width = 1;
    const height = 1;
    const border = 0;
    const src_format = gl.RGBA;
    const src_type = gl.UNSIGNED_BYTE;
    const pixel = new Uint8Array([0, 255, 0, 255]);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(
        gl.TEXTURE_2D,
        level,
        internal_format,
        width,
        height,
        border,
        src_format, src_type,
        pixel
    );
    
    // Use the requested texture if it gets loaded.
    const image = new Image();
    image.onload = function() {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
            gl.TEXTURE_2D,
            level,
            internal_format,
            src_format,
            src_type,
            image
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    };
    image.src = url;
    
    return texture;
}

function initSquareBuffers(gl: WebGLRenderingContext): BufferInfo | null {
    // -- Initialize vertex buffer
    const vertex_buffer = gl.createBuffer();
    const vertices = [
        0.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    // -- Initialize texture coordinates buffer
    const texture_coord_buffer = gl.createBuffer();
    const texture_coords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, texture_coord_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture_coords), gl.STATIC_DRAW);
    
    // -- Initialize color buffer (tint)
    const color_buffer = gl.createBuffer();
    const colors = [
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
    // -- Initialize indices buffer
    const index_buffer = gl.createBuffer();
    const indices = [
      0, 1, 3, 2
    ];
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    if (vertex_buffer === null || texture_coord_buffer === null || color_buffer === null || index_buffer === null) {
        alert("Failed to initialize buffers.");
        return null;
    }

    return {
        vertex: vertex_buffer,
        texture_coord: texture_coord_buffer,
        color: color_buffer,
        index: index_buffer,
    };
}

function renderSprite(program_info: ProgramInfo, sprite: Sprite, delta_time: number) {
    let gl = program_info.gl;
    // -- Configure model_view_matrix and apply uniform to shaders.
    const model_view_matrix = mat4.create();
    mat4.translate(model_view_matrix, model_view_matrix, [sprite.x, sprite.y, -1]);
    mat4.rotate(model_view_matrix, model_view_matrix, sprite.rotation, [0, 0, 1]);
    mat4.translate(model_view_matrix, model_view_matrix, [-sprite.width / 2, -sprite.height / 2, 0]);
    mat4.scale(model_view_matrix, model_view_matrix, [sprite.width, sprite.height, 0]);

    gl.uniformMatrix4fv(
        program_info.uniform_locations.model_view_matrix,
        false,
        model_view_matrix
    );

    // -- Upload vertex position data
    {
        const count = 3;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.vertex);
        gl.vertexAttribPointer(
            program_info.attribute_locations.vertex_position,
            count,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(program_info.attribute_locations.vertex_position);
    }

    // -- Upload color data
    {
        const count = 4;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.color);
        gl.vertexAttribPointer(
            program_info.attribute_locations.vertex_color,
            count,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(program_info.attribute_locations.vertex_color);
    }

    // -- Upload texture coordinate data
    {
        const count = 2;
        const type = gl.FLOAT;
        const normalize = false;
        const stride = 0;
        const offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.texture_coord);
        gl.vertexAttribPointer(
            program_info.attribute_locations.texture_coord,
            count,
            type,
            normalize,
            stride,
            offset
        );
        gl.enableVertexAttribArray(program_info.attribute_locations.texture_coord);
    }

    // -- Bind active texture.
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sprite.texture);
    gl.uniform1i(program_info.uniform_locations.sampler, 0);

    // -- Adjust tints
    let cs = sprite.colors;
    gl.uniform4f(program_info.uniform_locations.tints, cs[0], cs[1], cs[2], cs[3]);

    // -- Draw using given indices.
    {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sprite.buffers.index);
        const count = 4;
        const type = gl.UNSIGNED_SHORT;
        const offset = 0;
        gl.drawElements(gl.TRIANGLE_STRIP, count, type, offset);
    }
}

function drawScene(program_info: ProgramInfo, sprites: Sprite[], delta_time: number) {
    let gl = program_info.gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    // const fov = 45 * Math.PI / 180;
    // const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    // const z_near = 0.1;
    // const z_far = 100.0;
    
    const projection_matrix = mat4.create();
    mat4.ortho(projection_matrix, 0, gl.drawingBufferWidth, 0, gl.drawingBufferHeight, 1, -1);
    // mat4.ortho(projection_matrix, -1.0, 1.0, -1.0, 1.0, 0.1, 1000);
    //mat4.perspective(projection_matrix, fov, aspect, z_near, z_far);
    
    gl.useProgram(program_info.program);
    gl.uniformMatrix4fv(
        program_info.uniform_locations.projection_matrix,
        false,
        projection_matrix
    );
    
    for (let i in sprites) {
        renderSprite(program_info, sprites[i], delta_time);
    }
}

function initWebGL(): ProgramInfo | null {
    const mcanvas: HTMLCanvasElement | null = document.querySelector("#gameCanvas");
    if (mcanvas === null) {
        alert("Failed to select canvas.");
        return null;
    }
    const canvas = mcanvas;
    const mgl: WebGLRenderingContext | null = canvas.getContext("webgl");
    if (mgl === null) {
        alert("Failed to initialize WebGL");
        return null;
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
        return null;
    }
    
    const shader_program = initShaderProgram(gl, vs_source, fs_source);
    if (shader_program === null) {
        alert("Failed to initialize shader program.");
        return null;
    }

    let projection_matrix = gl.getUniformLocation(shader_program, "uProjectionMatrix");
    let model_view_matrix = gl.getUniformLocation(shader_program, "uModelViewMatrix");
    let sampler = gl.getUniformLocation(shader_program, "uSampler");
    let tints = gl.getUniformLocation(shader_program, "uTints");
    if (projection_matrix === null || model_view_matrix === null || sampler === null || tints === null) {
        alert("Failed to get uniform locations.");
        return null;
    }

    const program_info: ProgramInfo = {
        gl,
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
            tints,
        },
    };

    return program_info;
}

export { initShaderProgram, initSquareBuffers, loadTexture, drawScene, initWebGL };
export type { ProgramInfo, BufferInfo };