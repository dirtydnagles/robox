/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "sub": () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./src/Entity.ts":
/*!***********************!*\
  !*** ./src/Entity.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
var Entity = /** @class */ (function () {
    function Entity(pos, vel, sprite) {
        this.pos = pos;
        this.vel = vel;
        this.sprite = sprite;
    }
    Entity.prototype.update = function () {
    };
    Entity.prototype.render = function (program_info) {
        this.sprite.render(program_info, this.pos.x, this.pos.y);
    };
    Entity.prototype.onCollision = function () {
    };
    return Entity;
}());



/***/ }),

/***/ "./src/Level.ts":
/*!**********************!*\
  !*** ./src/Level.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Level": () => (/* binding */ Level)
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/Render.ts");

var Level = /** @class */ (function () {
    function Level() {
        this.entities = [];
    }
    // constructor() {}
    Level.prototype.spawn = function (entity, x, y) {
        entity.pos = { x: x, y: y };
        this.entities.push(entity);
    };
    Level.prototype.update = function (delta) {
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            // entity.update(delta);
            entity.update();
        }
        for (var _b = 0, _c = this.entities; _b < _c.length; _b++) {
            var entity = _c[_b];
            for (var _d = 0, _e = this.entities; _d < _e.length; _d++) {
                var other = _e[_d];
                // if (entity === other || !entity.isColliding(other)) {
                if (entity === other) {
                    continue;
                }
                // entity.onCollision(other);
                entity.onCollision();
            }
        }
    };
    Level.prototype.render = function (program_info) {
        (0,_Render__WEBPACK_IMPORTED_MODULE_0__.preRender)(program_info);
        for (var _i = 0, _a = this.entities; _i < _a.length; _i++) {
            var entity = _a[_i];
            entity.render(program_info);
        }
    };
    return Level;
}());



/***/ }),

/***/ "./src/Render.ts":
/*!***********************!*\
  !*** ./src/Render.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initShaderProgram": () => (/* binding */ initShaderProgram),
/* harmony export */   "initSquareBuffers": () => (/* binding */ initSquareBuffers),
/* harmony export */   "loadTexture": () => (/* binding */ loadTexture),
/* harmony export */   "renderSprite": () => (/* binding */ renderSprite),
/* harmony export */   "preRender": () => (/* binding */ preRender),
/* harmony export */   "initWebGL": () => (/* binding */ initWebGL)
/* harmony export */ });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/mat4.js");

var vs_source = "\n    attribute vec4 aVertexPosition;\n    attribute vec4 aVertexColor;\n    attribute vec2 aTextureCoord;\n    \n    uniform mat4 uModelViewMatrix;\n    uniform mat4 uProjectionMatrix;\n    \n    varying lowp vec4 vColor;\n    uniform lowp vec4 uTints;\n    \n    varying highp vec2 vTextureCoord;\n    \n    void main() {\n        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n        vColor = aVertexColor * uTints;\n        vTextureCoord = aTextureCoord;\n    }\n";
var fs_source = "\n    varying lowp vec4 vColor;\n    varying highp vec2 vTextureCoord;\n    \n    uniform sampler2D uSampler;\n    \n    void main() {\n        gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n    }\n";
function initShaderProgram(gl, vs_source, fs_source) {
    var shader_program = gl.createProgram();
    if (shader_program === null) {
        alert("Failed to create program.");
        return null;
    }
    var vertex_shader = loadShader(gl, gl.VERTEX_SHADER, vs_source);
    if (vertex_shader === null) {
        alert("Failed to load vertex shader.");
        return null;
    }
    var fragment_shader = loadShader(gl, gl.FRAGMENT_SHADER, fs_source);
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
function loadShader(gl, type, source) {
    var shader = gl.createShader(type);
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
function loadTexture(gl, url, onLoad) {
    // Create a 1-pixel large default texture by default.
    var texture = gl.createTexture();
    var level = 0;
    var internal_format = gl.RGBA;
    var width = 1;
    var height = 1;
    var border = 0;
    var src_format = gl.RGBA;
    var src_type = gl.UNSIGNED_BYTE;
    var pixel = new Uint8Array([0, 255, 0, 255]);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, level, internal_format, width, height, border, src_format, src_type, pixel);
    // Use the requested texture if it gets loaded.
    var image = new Image();
    image.onload = function () {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, level, internal_format, src_format, src_type, image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        onLoad(image);
    };
    image.src = url;
    return texture;
}
function initSquareBuffers(gl) {
    // -- Initialize vertex buffer
    var vertex_buffer = gl.createBuffer();
    var vertices = [
        0.0, 1.0, 0.0,
        1.0, 1.0, 0.0,
        1.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    // -- Initialize texture coordinates buffer
    var texture_coord_buffer = gl.createBuffer();
    var texture_coords = [
        0.0, 0.0,
        1.0, 0.0,
        1.0, 1.0,
        0.0, 1.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, texture_coord_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture_coords), gl.STATIC_DRAW);
    // -- Initialize color buffer (tint)
    var color_buffer = gl.createBuffer();
    var colors = [
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
        1.0, 1.0, 1.0, 1.0,
    ];
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    // -- Initialize indices buffer
    var index_buffer = gl.createBuffer();
    var indices = [
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
function renderSprite(program_info, sprite, x, y) {
    var gl = program_info.gl;
    // -- Configure model_view_matrix and apply uniform to shaders.
    var model_view_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(model_view_matrix, model_view_matrix, [x, y, -1]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.rotate(model_view_matrix, model_view_matrix, sprite.rotation, [0, 0, 1]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.translate(model_view_matrix, model_view_matrix, [-sprite.width / 2, -sprite.height / 2, 0]);
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.scale(model_view_matrix, model_view_matrix, [sprite.width, sprite.height, 0]);
    gl.uniformMatrix4fv(program_info.uniform_locations.model_view_matrix, false, model_view_matrix);
    // -- Upload vertex position data
    {
        var count = 3;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.vertex);
        gl.vertexAttribPointer(program_info.attribute_locations.vertex_position, count, type, normalize, stride, offset);
        gl.enableVertexAttribArray(program_info.attribute_locations.vertex_position);
    }
    // -- Upload color data
    {
        var count = 4;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.color);
        gl.vertexAttribPointer(program_info.attribute_locations.vertex_color, count, type, normalize, stride, offset);
        gl.enableVertexAttribArray(program_info.attribute_locations.vertex_color);
    }
    // -- Upload texture coordinate data
    {
        var count = 2;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, sprite.buffers.texture_coord);
        gl.vertexAttribPointer(program_info.attribute_locations.texture_coord, count, type, normalize, stride, offset);
        gl.enableVertexAttribArray(program_info.attribute_locations.texture_coord);
    }
    // -- Bind active texture.
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, sprite.texture);
    gl.uniform1i(program_info.uniform_locations.sampler, 0);
    // -- Adjust tints
    var cs = sprite.colors;
    gl.uniform4f(program_info.uniform_locations.tints, cs[0], cs[1], cs[2], cs[3]);
    // -- Draw using given indices.
    {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sprite.buffers.index);
        var count = 4;
        var type = gl.UNSIGNED_SHORT;
        var offset = 0;
        gl.drawElements(gl.TRIANGLE_STRIP, count, type, offset);
    }
}
function preRender(program_info) {
    var gl = program_info.gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // const fov = 45 * Math.PI / 180;
    // const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    // const z_near = 0.1;
    // const z_far = 100.0;
    var projection_matrix = gl_matrix__WEBPACK_IMPORTED_MODULE_0__.create();
    gl_matrix__WEBPACK_IMPORTED_MODULE_0__.ortho(projection_matrix, 0, gl.drawingBufferWidth, 0, gl.drawingBufferHeight, 1, -1);
    // mat4.ortho(projection_matrix, -1.0, 1.0, -1.0, 1.0, 0.1, 1000);
    //mat4.perspective(projection_matrix, fov, aspect, z_near, z_far);
    gl.useProgram(program_info.program);
    gl.uniformMatrix4fv(program_info.uniform_locations.projection_matrix, false, projection_matrix);
}
function initWebGL() {
    var mcanvas = document.querySelector("#gameCanvas");
    if (mcanvas === null) {
        alert("Failed to select canvas.");
        return null;
    }
    var canvas = mcanvas;
    var mgl = canvas.getContext("webgl");
    if (mgl === null) {
        alert("Failed to initialize WebGL");
        return null;
    }
    var gl = mgl;
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
    var shader_program = initShaderProgram(gl, vs_source, fs_source);
    if (shader_program === null) {
        alert("Failed to initialize shader program.");
        return null;
    }
    var projection_matrix = gl.getUniformLocation(shader_program, "uProjectionMatrix");
    var model_view_matrix = gl.getUniformLocation(shader_program, "uModelViewMatrix");
    var sampler = gl.getUniformLocation(shader_program, "uSampler");
    var tints = gl.getUniformLocation(shader_program, "uTints");
    if (projection_matrix === null || model_view_matrix === null || sampler === null || tints === null) {
        alert("Failed to get uniform locations.");
        return null;
    }
    var program_info = {
        gl: gl,
        program: shader_program,
        attribute_locations: {
            vertex_position: gl.getAttribLocation(shader_program, "aVertexPosition"),
            vertex_color: gl.getAttribLocation(shader_program, "aVertexColor"),
            texture_coord: gl.getAttribLocation(shader_program, "aTextureCoord"),
        },
        uniform_locations: {
            projection_matrix: projection_matrix,
            model_view_matrix: model_view_matrix,
            sampler: sampler,
            tints: tints,
        },
    };
    return program_info;
}



/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite),
/* harmony export */   "fromPath": () => (/* binding */ fromPath)
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/Render.ts");

var Sprite = /** @class */ (function () {
    function Sprite(texture, buffers, width, height, rotation, colors) {
        this.texture = texture;
        this.buffers = buffers;
        this.width = width;
        this.height = height;
        this.rotation = rotation;
        this.colors = colors;
    }
    Sprite.prototype.render = function (program_info, x, y) {
        (0,_Render__WEBPACK_IMPORTED_MODULE_0__.renderSprite)(program_info, this, x, y);
    };
    return Sprite;
}());
function fromPath(program_info, path) {
    var sprite;
    function onLoad(image) {
        sprite.width = image.width;
        sprite.height = image.height;
        console.log("Bazinga!");
    }
    var texture = (0,_Render__WEBPACK_IMPORTED_MODULE_0__.loadTexture)(program_info.gl, path, onLoad);
    if (texture === null) {
        return null;
    }
    var buffers = (0,_Render__WEBPACK_IMPORTED_MODULE_0__.initSquareBuffers)(program_info.gl);
    if (buffers === null) {
        return null;
    }
    sprite = new Sprite(texture, buffers, 1, 1, 0, [1, 1, 1, 1]);
    return sprite;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/Render.ts");
/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ "./src/Sprite.ts");
/* harmony import */ var _Level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Level */ "./src/Level.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Entity */ "./src/Entity.ts");




function main() {
    var mprogram_info = (0,_Render__WEBPACK_IMPORTED_MODULE_0__.initWebGL)();
    if (mprogram_info === null) {
        alert("Failed to initialize WebGL.");
        return;
    }
    var program_info = mprogram_info;
    // let ms1: Sprite | null = fromPath(program_info, "res/test.png");
    // if (ms1 === null) {
    //     alert("Failed to load sprite.");
    //     return;
    // }
    // let s1 = ms1;
    var ms1 = (0,_Sprite__WEBPACK_IMPORTED_MODULE_1__.fromPath)(program_info, "res/test.png");
    if (ms1 === null) {
        alert("Failed to load sprite from path.");
        return;
    }
    var s1 = ms1;
    var e1 = new _Entity__WEBPACK_IMPORTED_MODULE_3__.Entity({ x: 100, y: 100 }, { x: 0, y: 0 }, s1);
    var level = new _Level__WEBPACK_IMPORTED_MODULE_2__.Level();
    level.spawn(e1, 100, 100);
    var then = -1;
    function step(now) {
        if (then === -1) {
            then = now;
        }
        var delta = now - then;
        level.update(delta);
        level.render(program_info);
        requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
window.onload = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JveC8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9yb2JveC8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDQuanMiLCJ3ZWJwYWNrOi8vcm9ib3gvLi9zcmMvRW50aXR5LnRzIiwid2VicGFjazovL3JvYm94Ly4vc3JjL0xldmVsLnRzIiwid2VicGFjazovL3JvYm94Ly4vc3JjL1JlbmRlci50cyIsIndlYnBhY2s6Ly9yb2JveC8uL3NyYy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vcm9ib3gvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9ib3gvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvYm94L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9ib3gvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2JveC8uL3NyYy9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQ0FBMkM7QUFDdEQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakR3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1COztBQUVuQyxNQUFNLGtEQUFtQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1AsZ0JBQWdCLGtEQUFtQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUCxnQkFBZ0Isa0RBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsTUFBTTtBQUNqQixXQUFXLGFBQWE7QUFDeEIsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsYUFBYTtBQUN4QjtBQUNBLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUUsR0FBRyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV4RCxJQUFJLEtBQUssR0FBRyxJQUFJLHlDQUFLLEVBQUUsQ0FBQztJQUN4QixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZCxTQUFTLElBQUksQ0FBQyxHQUF3QjtRQUNsQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNiLElBQUksR0FBRyxHQUFHLENBQUM7U0FDZDtRQUNELElBQU0sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDekIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoicm9ib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29tbW9uIHV0aWxpdGllc1xyXG4gKiBAbW9kdWxlIGdsTWF0cml4XHJcbiAqL1xuLy8gQ29uZmlndXJhdGlvbiBDb25zdGFudHNcbmV4cG9ydCB2YXIgRVBTSUxPTiA9IDAuMDAwMDAxO1xuZXhwb3J0IHZhciBBUlJBWV9UWVBFID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBGbG9hdDMyQXJyYXkgOiBBcnJheTtcbmV4cG9ydCB2YXIgUkFORE9NID0gTWF0aC5yYW5kb207XG4vKipcclxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXHJcbiAqXHJcbiAqIEBwYXJhbSB7RmxvYXQzMkFycmF5Q29uc3RydWN0b3IgfCBBcnJheUNvbnN0cnVjdG9yfSB0eXBlIEFycmF5IHR5cGUsIHN1Y2ggYXMgRmxvYXQzMkFycmF5IG9yIEFycmF5XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxyXG4gKiBDb252ZXJ0IERlZ3JlZSBUbyBSYWRpYW5cclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUmFkaWFuKGEpIHtcbiAgcmV0dXJuIGEgKiBkZWdyZWU7XG59XG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgdGhlIGFyZ3VtZW50cyBoYXZlIGFwcHJveGltYXRlbHkgdGhlIHNhbWUgdmFsdWUsIHdpdGhpbiBhbiBhYnNvbHV0ZVxyXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXHJcbiAqIHRoYW4gb3IgZXF1YWwgdG8gMS4wLCBhbmQgYSByZWxhdGl2ZSB0b2xlcmFuY2UgaXMgdXNlZCBmb3IgbGFyZ2VyIHZhbHVlcylcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIG51bWJlciB0byB0ZXN0LlxyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbnVtYmVycyBhcmUgYXBwcm94aW1hdGVseSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcclxuICogNHg0IE1hdHJpeDxicj5Gb3JtYXQ6IGNvbHVtbi1tYWpvciwgd2hlbiB0eXBlZCBvdXQgaXQgbG9va3MgbGlrZSByb3ctbWFqb3I8YnI+VGhlIG1hdHJpY2VzIGFyZSBiZWluZyBwb3N0IG11bHRpcGxpZWQuXHJcbiAqIEBtb2R1bGUgbWF0NFxyXG4gKi9cblxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgaWRlbnRpdHkgbWF0NFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcblxuICBpZiAoZ2xNYXRyaXguQVJSQVlfVFlQRSAhPSBGbG9hdDMyQXJyYXkpIHtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gICAgb3V0WzNdID0gMDtcbiAgICBvdXRbNF0gPSAwO1xuICAgIG91dFs2XSA9IDA7XG4gICAgb3V0WzddID0gMDtcbiAgICBvdXRbOF0gPSAwO1xuICAgIG91dFs5XSA9IDA7XG4gICAgb3V0WzExXSA9IDA7XG4gICAgb3V0WzEyXSA9IDA7XG4gICAgb3V0WzEzXSA9IDA7XG4gICAgb3V0WzE0XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNV0gPSAxO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIG1hdHJpeCB0byBjbG9uZVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0NCB0byBhbm90aGVyXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KG91dCwgYSkge1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICBvdXRbOV0gPSBhWzldO1xuICBvdXRbMTBdID0gYVsxMF07XG4gIG91dFsxMV0gPSBhWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZSBhIG5ldyBtYXQ0IHdpdGggdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBBIG5ldyBtYXQ0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDQgdG8gdGhlIGdpdmVuIHZhbHVlc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTAzIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDMgcG9zaXRpb24gKGluZGV4IDMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNClcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDYpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTMgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggNylcclxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDkpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTApXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzAgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMTIpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzEgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMTMpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzMgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTUpXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFNldCBhIG1hdDQgdG8gdGhlIGlkZW50aXR5IG1hdHJpeFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMDMgPSBhWzNdO1xuICAgIHZhciBhMTIgPSBhWzZdLFxuICAgICAgICBhMTMgPSBhWzddO1xuICAgIHZhciBhMjMgPSBhWzExXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYTAxO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYTAyO1xuICAgIG91dFs5XSA9IGExMjtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGEwMztcbiAgICBvdXRbMTNdID0gYTEzO1xuICAgIG91dFsxNF0gPSBhMjM7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzBdID0gYVswXTtcbiAgICBvdXRbMV0gPSBhWzRdO1xuICAgIG91dFsyXSA9IGFbOF07XG4gICAgb3V0WzNdID0gYVsxMl07XG4gICAgb3V0WzRdID0gYVsxXTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbOV07XG4gICAgb3V0WzddID0gYVsxM107XG4gICAgb3V0WzhdID0gYVsyXTtcbiAgICBvdXRbOV0gPSBhWzZdO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxNF07XG4gICAgb3V0WzEyXSA9IGFbM107XG4gICAgb3V0WzEzXSA9IGFbN107XG4gICAgb3V0WzE0XSA9IGFbMTFdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogSW52ZXJ0cyBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICB2YXIgZGV0ID0gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xuXG4gIGlmICghZGV0KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBkZXQgPSAxLjAgLyBkZXQ7XG4gIG91dFswXSA9IChhMTEgKiBiMTEgLSBhMTIgKiBiMTAgKyBhMTMgKiBiMDkpICogZGV0O1xuICBvdXRbMV0gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzJdID0gKGEzMSAqIGIwNSAtIGEzMiAqIGIwNCArIGEzMyAqIGIwMykgKiBkZXQ7XG4gIG91dFszXSA9IChhMjIgKiBiMDQgLSBhMjEgKiBiMDUgLSBhMjMgKiBiMDMpICogZGV0O1xuICBvdXRbNF0gPSAoYTEyICogYjA4IC0gYTEwICogYjExIC0gYTEzICogYjA3KSAqIGRldDtcbiAgb3V0WzVdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs2XSA9IChhMzIgKiBiMDIgLSBhMzAgKiBiMDUgLSBhMzMgKiBiMDEpICogZGV0O1xuICBvdXRbN10gPSAoYTIwICogYjA1IC0gYTIyICogYjAyICsgYTIzICogYjAxKSAqIGRldDtcbiAgb3V0WzhdID0gKGExMCAqIGIxMCAtIGExMSAqIGIwOCArIGExMyAqIGIwNikgKiBkZXQ7XG4gIG91dFs5XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbMTBdID0gKGEzMCAqIGIwNCAtIGEzMSAqIGIwMiArIGEzMyAqIGIwMCkgKiBkZXQ7XG4gIG91dFsxMV0gPSAoYTIxICogYjAyIC0gYTIwICogYjA0IC0gYTIzICogYjAwKSAqIGRldDtcbiAgb3V0WzEyXSA9IChhMTEgKiBiMDcgLSBhMTAgKiBiMDkgLSBhMTIgKiBiMDYpICogZGV0O1xuICBvdXRbMTNdID0gKGEwMCAqIGIwOSAtIGEwMSAqIGIwNyArIGEwMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxNF0gPSAoYTMxICogYjAxIC0gYTMwICogYjAzIC0gYTMyICogYjAwKSAqIGRldDtcbiAgb3V0WzE1XSA9IChhMjAgKiBiMDMgLSBhMjEgKiBiMDEgKyBhMjIgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRqb2ludChvdXQsIGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIG91dFswXSA9IGExMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKTtcbiAgb3V0WzFdID0gLShhMDEgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMikpO1xuICBvdXRbMl0gPSBhMDEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMSAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMik7XG4gIG91dFszXSA9IC0oYTAxICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMSAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzRdID0gLShhMTAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpICsgYTMwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikpO1xuICBvdXRbNV0gPSBhMDAgKiAoYTIyICogYTMzIC0gYTIzICogYTMyKSAtIGEyMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGEyMyAtIGEwMyAqIGEyMik7XG4gIG91dFs2XSA9IC0oYTAwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgLSBhMTAgKiAoYTAyICogYTMzIC0gYTAzICogYTMyKSArIGEzMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpKTtcbiAgb3V0WzddID0gYTAwICogKGExMiAqIGEyMyAtIGExMyAqIGEyMikgLSBhMTAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSArIGEyMCAqIChhMDIgKiBhMTMgLSBhMDMgKiBhMTIpO1xuICBvdXRbOF0gPSBhMTAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSk7XG4gIG91dFs5XSA9IC0oYTAwICogKGEyMSAqIGEzMyAtIGEyMyAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpKTtcbiAgb3V0WzEwXSA9IGEwMCAqIChhMTEgKiBhMzMgLSBhMTMgKiBhMzEpIC0gYTEwICogKGEwMSAqIGEzMyAtIGEwMyAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTEzIC0gYTAzICogYTExKTtcbiAgb3V0WzExXSA9IC0oYTAwICogKGExMSAqIGEyMyAtIGExMyAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIzIC0gYTAzICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpKTtcbiAgb3V0WzEyXSA9IC0oYTEwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSArIGEzMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpKTtcbiAgb3V0WzEzXSA9IGEwMCAqIChhMjEgKiBhMzIgLSBhMjIgKiBhMzEpIC0gYTIwICogKGEwMSAqIGEzMiAtIGEwMiAqIGEzMSkgKyBhMzAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKTtcbiAgb3V0WzE0XSA9IC0oYTAwICogKGExMSAqIGEzMiAtIGExMiAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpKTtcbiAgb3V0WzE1XSA9IGEwMCAqIChhMTEgKiBhMjIgLSBhMTIgKiBhMjEpIC0gYTEwICogKGEwMSAqIGEyMiAtIGEwMiAqIGEyMSkgKyBhMjAgKiAoYTAxICogYTEyIC0gYTAyICogYTExKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcclxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07XG4gIHZhciBiMDAgPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHZhciBiMDEgPSBhMDAgKiBhMTIgLSBhMDIgKiBhMTA7XG4gIHZhciBiMDIgPSBhMDAgKiBhMTMgLSBhMDMgKiBhMTA7XG4gIHZhciBiMDMgPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIHZhciBiMDQgPSBhMDEgKiBhMTMgLSBhMDMgKiBhMTE7XG4gIHZhciBiMDUgPSBhMDIgKiBhMTMgLSBhMDMgKiBhMTI7XG4gIHZhciBiMDYgPSBhMjAgKiBhMzEgLSBhMjEgKiBhMzA7XG4gIHZhciBiMDcgPSBhMjAgKiBhMzIgLSBhMjIgKiBhMzA7XG4gIHZhciBiMDggPSBhMjAgKiBhMzMgLSBhMjMgKiBhMzA7XG4gIHZhciBiMDkgPSBhMjEgKiBhMzIgLSBhMjIgKiBhMzE7XG4gIHZhciBiMTAgPSBhMjEgKiBhMzMgLSBhMjMgKiBhMzE7XG4gIHZhciBiMTEgPSBhMjIgKiBhMzMgLSBhMjMgKiBhMzI7IC8vIENhbGN1bGF0ZSB0aGUgZGV0ZXJtaW5hbnRcblxuICByZXR1cm4gYjAwICogYjExIC0gYjAxICogYjEwICsgYjAyICogYjA5ICsgYjAzICogYjA4IC0gYjA0ICogYjA3ICsgYjA1ICogYjA2O1xufVxuLyoqXHJcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkob3V0LCBhLCBiKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdOyAvLyBDYWNoZSBvbmx5IHRoZSBjdXJyZW50IGxpbmUgb2YgdGhlIHNlY29uZCBtYXRyaXhcblxuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICBvdXRbMF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzFdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsyXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbM10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzRdO1xuICBiMSA9IGJbNV07XG4gIGIyID0gYls2XTtcbiAgYjMgPSBiWzddO1xuICBvdXRbNF0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzVdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFs2XSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbN10gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzhdO1xuICBiMSA9IGJbOV07XG4gIGIyID0gYlsxMF07XG4gIGIzID0gYlsxMV07XG4gIG91dFs4XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbOV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzEwXSA9IGIwICogYTAyICsgYjEgKiBhMTIgKyBiMiAqIGEyMiArIGIzICogYTMyO1xuICBvdXRbMTFdID0gYjAgKiBhMDMgKyBiMSAqIGExMyArIGIyICogYTIzICsgYjMgKiBhMzM7XG4gIGIwID0gYlsxMl07XG4gIGIxID0gYlsxM107XG4gIGIyID0gYlsxNF07XG4gIGIzID0gYlsxNV07XG4gIG91dFsxMl0gPSBiMCAqIGEwMCArIGIxICogYTEwICsgYjIgKiBhMjAgKyBiMyAqIGEzMDtcbiAgb3V0WzEzXSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTRdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxNV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgdmVjdG9yIHRvIHRyYW5zbGF0ZSBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gIGlmIChhID09PSBvdXQpIHtcbiAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgfSBlbHNlIHtcbiAgICBhMDAgPSBhWzBdO1xuICAgIGEwMSA9IGFbMV07XG4gICAgYTAyID0gYVsyXTtcbiAgICBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07XG4gICAgYTExID0gYVs1XTtcbiAgICBhMTIgPSBhWzZdO1xuICAgIGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTtcbiAgICBhMjEgPSBhWzldO1xuICAgIGEyMiA9IGFbMTBdO1xuICAgIGEyMyA9IGFbMTFdO1xuICAgIG91dFswXSA9IGEwMDtcbiAgICBvdXRbMV0gPSBhMDE7XG4gICAgb3V0WzJdID0gYTAyO1xuICAgIG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7XG4gICAgb3V0WzVdID0gYTExO1xuICAgIG91dFs2XSA9IGExMjtcbiAgICBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwO1xuICAgIG91dFs5XSA9IGEyMTtcbiAgICBvdXRbMTBdID0gYTIyO1xuICAgIG91dFsxMV0gPSBhMjM7XG4gICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTY2FsZXMgdGhlIG1hdDQgYnkgdGhlIGRpbWVuc2lvbnMgaW4gdGhlIGdpdmVuIHZlYzMgbm90IHVzaW5nIHZlY3Rvcml6YXRpb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiB0aGUgdmVjMyB0byBzY2FsZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdLFxuICAgICAgeiA9IHZbMl07XG4gIG91dFswXSA9IGFbMF0gKiB4O1xuICBvdXRbMV0gPSBhWzFdICogeDtcbiAgb3V0WzJdID0gYVsyXSAqIHg7XG4gIG91dFszXSA9IGFbM10gKiB4O1xuICBvdXRbNF0gPSBhWzRdICogeTtcbiAgb3V0WzVdID0gYVs1XSAqIHk7XG4gIG91dFs2XSA9IGFbNl0gKiB5O1xuICBvdXRbN10gPSBhWzddICogeTtcbiAgb3V0WzhdID0gYVs4XSAqIHo7XG4gIG91dFs5XSA9IGFbOV0gKiB6O1xuICBvdXRbMTBdID0gYVsxMF0gKiB6O1xuICBvdXRbMTFdID0gYVsxMV0gKiB6O1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUm90YXRlcyBhIG1hdDQgYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgZ2l2ZW4gYXhpc1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICB2YXIgYjAwLCBiMDEsIGIwMjtcbiAgdmFyIGIxMCwgYjExLCBiMTI7XG4gIHZhciBiMjAsIGIyMSwgYjIyO1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdOyAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcblxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjOyAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWCBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTEwID0gYVs0XTtcbiAgdmFyIGExMSA9IGFbNV07XG4gIHZhciBhMTIgPSBhWzZdO1xuICB2YXIgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVsxXTtcbiAgICBvdXRbMl0gPSBhWzJdO1xuICAgIG91dFszXSA9IGFbM107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFs0XSA9IGExMCAqIGMgKyBhMjAgKiBzO1xuICBvdXRbNV0gPSBhMTEgKiBjICsgYTIxICogcztcbiAgb3V0WzZdID0gYTEyICogYyArIGEyMiAqIHM7XG4gIG91dFs3XSA9IGExMyAqIGMgKyBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMjAgKiBjIC0gYTEwICogcztcbiAgb3V0WzldID0gYTIxICogYyAtIGExMSAqIHM7XG4gIG91dFsxMF0gPSBhMjIgKiBjIC0gYTEyICogcztcbiAgb3V0WzExXSA9IGEyMyAqIGMgLSBhMTMgKiBzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGEyMCA9IGFbOF07XG4gIHZhciBhMjEgPSBhWzldO1xuICB2YXIgYTIyID0gYVsxMF07XG4gIHZhciBhMjMgPSBhWzExXTtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgcm93c1xuICAgIG91dFs0XSA9IGFbNF07XG4gICAgb3V0WzVdID0gYVs1XTtcbiAgICBvdXRbNl0gPSBhWzZdO1xuICAgIG91dFs3XSA9IGFbN107XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgLSBhMjAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjIC0gYTIxICogcztcbiAgb3V0WzJdID0gYTAyICogYyAtIGEyMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgLSBhMjMgKiBzO1xuICBvdXRbOF0gPSBhMDAgKiBzICsgYTIwICogYztcbiAgb3V0WzldID0gYTAxICogcyArIGEyMSAqIGM7XG4gIG91dFsxMF0gPSBhMDIgKiBzICsgYTIyICogYztcbiAgb3V0WzExXSA9IGEwMyAqIHMgKyBhMjMgKiBjO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgZGVzdCwgdmVjKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3Igc2NhbGluZ1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TY2FsaW5nKG91dCwgdikge1xuICBvdXRbMF0gPSB2WzBdO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSB2WzFdO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gdlsyXTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGUoZGVzdCwgZGVzdCwgcmFkLCBheGlzKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYXhpcyB0aGUgYXhpcyB0byByb3RhdGUgYXJvdW5kXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb24ob3V0LCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYzsgLy8gUGVyZm9ybSByb3RhdGlvbi1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSB4ICogeCAqIHQgKyBjO1xuICBvdXRbMV0gPSB5ICogeCAqIHQgKyB6ICogcztcbiAgb3V0WzJdID0geiAqIHggKiB0IC0geSAqIHM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHggKiB5ICogdCAtIHogKiBzO1xuICBvdXRbNV0gPSB5ICogeSAqIHQgKyBjO1xuICBvdXRbNl0gPSB6ICogeSAqIHQgKyB4ICogcztcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIG91dFs5XSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBvdXRbMTBdID0geiAqIHogKiB0ICsgYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBYIGF4aXNcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21YUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSBzO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAtcztcbiAgb3V0WzEwXSA9IGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXHJcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxyXG4gKlxyXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcclxuICogICAgIG1hdDQucm90YXRlWShkZXN0LCBkZXN0LCByYWQpO1xyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHM7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFogYXhpc1xyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnJvdGF0ZVooZGVzdCwgZGVzdCwgcmFkKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVpSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGM7XG4gIG91dFsxXSA9IHM7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IC1zO1xuICBvdXRbNV0gPSBjO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMTtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24gYW5kIHZlY3RvciB0cmFuc2xhdGlvblxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgb3V0WzFdID0geHkgKyB3ejtcbiAgb3V0WzJdID0geHogLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geHkgLSB3ejtcbiAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgb3V0WzZdID0geXogKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geHogKyB3eTtcbiAgb3V0WzldID0geXogLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDQgZnJvbSBhIGR1YWwgcXVhdC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgTWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0Mn0gYSBEdWFsIFF1YXRlcm5pb25cclxuICogQHJldHVybnMge21hdDR9IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdDIob3V0LCBhKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidzsgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgYSwgdHJhbnNsYXRpb24pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRyYW5zbGF0aW9uIHZlY3RvciBjb21wb25lbnQgb2YgYSB0cmFuc2Zvcm1hdGlvblxyXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLFxyXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSB0cmFuc2xhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2xhdGlvbihvdXQsIG1hdCkge1xuICBvdXRbMF0gPSBtYXRbMTJdO1xuICBvdXRbMV0gPSBtYXRbMTNdO1xuICBvdXRbMl0gPSBtYXRbMTRdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXHJcbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZVxyXG4gKiAgd2l0aCBhIG5vcm1hbGl6ZWQgUXVhdGVybmlvbiBwYXJhbXRlciwgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlXHJcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcclxuICogIG9yaWdpbmFsbHkgc3VwcGxpZWQuXHJcbiAqIEBwYXJhbSAge3ZlYzN9IG91dCBWZWN0b3IgdG8gcmVjZWl2ZSBzY2FsaW5nIGZhY3RvciBjb21wb25lbnRcclxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxyXG4gKiBAcmV0dXJuIHt2ZWMzfSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTY2FsaW5nKG91dCwgbWF0KSB7XG4gIHZhciBtMTEgPSBtYXRbMF07XG4gIHZhciBtMTIgPSBtYXRbMV07XG4gIHZhciBtMTMgPSBtYXRbMl07XG4gIHZhciBtMjEgPSBtYXRbNF07XG4gIHZhciBtMjIgPSBtYXRbNV07XG4gIHZhciBtMjMgPSBtYXRbNl07XG4gIHZhciBtMzEgPSBtYXRbOF07XG4gIHZhciBtMzIgPSBtYXRbOV07XG4gIHZhciBtMzMgPSBtYXRbMTBdO1xuICBvdXRbMF0gPSBNYXRoLmh5cG90KG0xMSwgbTEyLCBtMTMpO1xuICBvdXRbMV0gPSBNYXRoLmh5cG90KG0yMSwgbTIyLCBtMjMpO1xuICBvdXRbMl0gPSBNYXRoLmh5cG90KG0zMSwgbTMyLCBtMzMpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWF0ZXJuaW9uIHJlcHJlc2VudGluZyB0aGUgcm90YXRpb25hbCBjb21wb25lbnRcclxuICogIG9mIGEgdHJhbnNmb3JtYXRpb24gbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoXHJcbiAqICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbiwgdGhlIHJldHVybmVkIHF1YXRlcm5pb24gd2lsbCBiZSB0aGVcclxuICogIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gb3JpZ2luYWxseSBzdXBwbGllZC5cclxuICogQHBhcmFtIHtxdWF0fSBvdXQgUXVhdGVybmlvbiB0byByZWNlaXZlIHRoZSByb3RhdGlvbiBjb21wb25lbnRcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG1hdCBNYXRyaXggdG8gYmUgZGVjb21wb3NlZCAoaW5wdXQpXHJcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdGF0aW9uKG91dCwgbWF0KSB7XG4gIHZhciBzY2FsaW5nID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMyk7XG4gIGdldFNjYWxpbmcoc2NhbGluZywgbWF0KTtcbiAgdmFyIGlzMSA9IDEgLyBzY2FsaW5nWzBdO1xuICB2YXIgaXMyID0gMSAvIHNjYWxpbmdbMV07XG4gIHZhciBpczMgPSAxIC8gc2NhbGluZ1syXTtcbiAgdmFyIHNtMTEgPSBtYXRbMF0gKiBpczE7XG4gIHZhciBzbTEyID0gbWF0WzFdICogaXMyO1xuICB2YXIgc20xMyA9IG1hdFsyXSAqIGlzMztcbiAgdmFyIHNtMjEgPSBtYXRbNF0gKiBpczE7XG4gIHZhciBzbTIyID0gbWF0WzVdICogaXMyO1xuICB2YXIgc20yMyA9IG1hdFs2XSAqIGlzMztcbiAgdmFyIHNtMzEgPSBtYXRbOF0gKiBpczE7XG4gIHZhciBzbTMyID0gbWF0WzldICogaXMyO1xuICB2YXIgc20zMyA9IG1hdFsxMF0gKiBpczM7XG4gIHZhciB0cmFjZSA9IHNtMTEgKyBzbTIyICsgc20zMztcbiAgdmFyIFMgPSAwO1xuXG4gIGlmICh0cmFjZSA+IDApIHtcbiAgICBTID0gTWF0aC5zcXJ0KHRyYWNlICsgMS4wKSAqIDI7XG4gICAgb3V0WzNdID0gMC4yNSAqIFM7XG4gICAgb3V0WzBdID0gKHNtMjMgLSBzbTMyKSAvIFM7XG4gICAgb3V0WzFdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzJdID0gKHNtMTIgLSBzbTIxKSAvIFM7XG4gIH0gZWxzZSBpZiAoc20xMSA+IHNtMjIgJiYgc20xMSA+IHNtMzMpIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMTEgLSBzbTIyIC0gc20zMykgKiAyO1xuICAgIG91dFszXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFswXSA9IDAuMjUgKiBTO1xuICAgIG91dFsxXSA9IChzbTEyICsgc20yMSkgLyBTO1xuICAgIG91dFsyXSA9IChzbTMxICsgc20xMykgLyBTO1xuICB9IGVsc2UgaWYgKHNtMjIgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTIyIC0gc20xMSAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20zMSAtIHNtMTMpIC8gUztcbiAgICBvdXRbMF0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMV0gPSAwLjI1ICogUztcbiAgICBvdXRbMl0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgfSBlbHNlIHtcbiAgICBTID0gTWF0aC5zcXJ0KDEuMCArIHNtMzMgLSBzbTExIC0gc20yMikgKiAyO1xuICAgIG91dFszXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICAgIG91dFswXSA9IChzbTMxICsgc20xMykgLyBTO1xuICAgIG91dFsxXSA9IChzbTIzICsgc20zMikgLyBTO1xuICAgIG91dFsyXSA9IDAuMjUgKiBTO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZVxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcclxuICpcclxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XHJcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xyXG4gKiAgICAgbGV0IHF1YXRNYXQgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcclxuICogICAgIG1hdDQuc2NhbGUoZGVzdCwgc2NhbGUpXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcclxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb25TY2FsZShvdXQsIHEsIHYsIHMpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgdmFyIHN4ID0gc1swXTtcbiAgdmFyIHN5ID0gc1sxXTtcbiAgdmFyIHN6ID0gc1syXTtcbiAgb3V0WzBdID0gKDEgLSAoeXkgKyB6eikpICogc3g7XG4gIG91dFsxXSA9ICh4eSArIHd6KSAqIHN4O1xuICBvdXRbMl0gPSAoeHogLSB3eSkgKiBzeDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gKHh5IC0gd3opICogc3k7XG4gIG91dFs1XSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICBvdXRbNl0gPSAoeXogKyB3eCkgKiBzeTtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gKHh6ICsgd3kpICogc3o7XG4gIG91dFs5XSA9ICh5eiAtIHd4KSAqIHN6O1xuICBvdXRbMTBdID0gKDEgLSAoeHggKyB5eSkpICogc3o7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XHJcbiAqXHJcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xyXG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgdmVjKTtcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG9yaWdpbik7XHJcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XHJcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XHJcbiAqICAgICBtYXQ0Lm11bHRpcGx5KGRlc3QsIHF1YXRNYXQpO1xyXG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcclxuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIG5lZ2F0aXZlT3JpZ2luKTtcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBzIFNjYWxpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBvIFRoZSBvcmlnaW4gdmVjdG9yIGFyb3VuZCB3aGljaCB0byBzY2FsZSBhbmQgcm90YXRlXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlT3JpZ2luKG91dCwgcSwgdiwgcywgbykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICB2YXIgb3ggPSBvWzBdO1xuICB2YXIgb3kgPSBvWzFdO1xuICB2YXIgb3ogPSBvWzJdO1xuICB2YXIgb3V0MCA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICB2YXIgb3V0MSA9ICh4eSArIHd6KSAqIHN4O1xuICB2YXIgb3V0MiA9ICh4eiAtIHd5KSAqIHN4O1xuICB2YXIgb3V0NCA9ICh4eSAtIHd6KSAqIHN5O1xuICB2YXIgb3V0NSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICB2YXIgb3V0NiA9ICh5eiArIHd4KSAqIHN5O1xuICB2YXIgb3V0OCA9ICh4eiArIHd5KSAqIHN6O1xuICB2YXIgb3V0OSA9ICh5eiAtIHd4KSAqIHN6O1xuICB2YXIgb3V0MTAgPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzBdID0gb3V0MDtcbiAgb3V0WzFdID0gb3V0MTtcbiAgb3V0WzJdID0gb3V0MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gb3V0NDtcbiAgb3V0WzVdID0gb3V0NTtcbiAgb3V0WzZdID0gb3V0NjtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gb3V0ODtcbiAgb3V0WzldID0gb3V0OTtcbiAgb3V0WzEwXSA9IG91dDEwO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXQwICogb3ggKyBvdXQ0ICogb3kgKyBvdXQ4ICogb3opO1xuICBvdXRbMTNdID0gdlsxXSArIG95IC0gKG91dDEgKiBveCArIG91dDUgKiBveSArIG91dDkgKiBveik7XG4gIG91dFsxNF0gPSB2WzJdICsgb3ogLSAob3V0MiAqIG94ICsgb3V0NiAqIG95ICsgb3V0MTAgKiBveik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSA0eDQgbWF0cml4IGZyb20gdGhlIGdpdmVuIHF1YXRlcm5pb25cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBRdWF0ZXJuaW9uIHRvIGNyZWF0ZSBtYXRyaXggZnJvbVxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVF1YXQob3V0LCBxKSB7XG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeXggPSB5ICogeDI7XG4gIHZhciB5eSA9IHkgKiB5MjtcbiAgdmFyIHp4ID0geiAqIHgyO1xuICB2YXIgenkgPSB6ICogeTI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtIHl5IC0geno7XG4gIG91dFsxXSA9IHl4ICsgd3o7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHl4IC0gd3o7XG4gIG91dFs1XSA9IDEgLSB4eCAtIHp6O1xuICBvdXRbNl0gPSB6eSArIHd4O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB6eCArIHd5O1xuICBvdXRbOV0gPSB6eSAtIHd4O1xuICBvdXRbMTBdID0gMSAtIHh4IC0geXk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBmcnVzdHVtIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge051bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICB2YXIgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IG5lYXIgKiAyICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IG5lYXIgKiAyICogdGI7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyICogMiAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXHJcbiAqIFBhc3NpbmcgbnVsbC91bmRlZmluZWQvbm8gdmFsdWUgZm9yIGZhciB3aWxsIGdlbmVyYXRlIGluZmluaXRlIHByb2plY3Rpb24gbWF0cml4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmb3Z5IFZlcnRpY2FsIGZpZWxkIG9mIHZpZXcgaW4gcmFkaWFuc1xyXG4gKiBAcGFyYW0ge251bWJlcn0gYXNwZWN0IEFzcGVjdCByYXRpby4gdHlwaWNhbGx5IHZpZXdwb3J0IHdpZHRoL2hlaWdodFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtLCBjYW4gYmUgbnVsbCBvciBJbmZpbml0eVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUob3V0LCBmb3Z5LCBhc3BlY3QsIG5lYXIsIGZhcikge1xuICB2YXIgZiA9IDEuMCAvIE1hdGgudGFuKGZvdnkgLyAyKSxcbiAgICAgIG5mO1xuICBvdXRbMF0gPSBmIC8gYXNwZWN0O1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSBmO1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTFdID0gLTE7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE1XSA9IDA7XG5cbiAgaWYgKGZhciAhPSBudWxsICYmIGZhciAhPT0gSW5maW5pdHkpIHtcbiAgICBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gICAgb3V0WzEwXSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICAgIG91dFsxNF0gPSAyICogZmFyICogbmVhciAqIG5mO1xuICB9IGVsc2Uge1xuICAgIG91dFsxMF0gPSAtMTtcbiAgICBvdXRbMTRdID0gLTIgKiBuZWFyO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBmaWVsZCBvZiB2aWV3LlxyXG4gKiBUaGlzIGlzIHByaW1hcmlseSB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgcHJvamVjdGlvbiBtYXRyaWNlcyB0byBiZSB1c2VkXHJcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVGcm9tRmllbGRPZlZpZXcob3V0LCBmb3YsIG5lYXIsIGZhcikge1xuICB2YXIgdXBUYW4gPSBNYXRoLnRhbihmb3YudXBEZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGRvd25UYW4gPSBNYXRoLnRhbihmb3YuZG93bkRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgbGVmdFRhbiA9IE1hdGgudGFuKGZvdi5sZWZ0RGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciByaWdodFRhbiA9IE1hdGgudGFuKGZvdi5yaWdodERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgeFNjYWxlID0gMi4wIC8gKGxlZnRUYW4gKyByaWdodFRhbik7XG4gIHZhciB5U2NhbGUgPSAyLjAgLyAodXBUYW4gKyBkb3duVGFuKTtcbiAgb3V0WzBdID0geFNjYWxlO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICBvdXRbNF0gPSAwLjA7XG4gIG91dFs1XSA9IHlTY2FsZTtcbiAgb3V0WzZdID0gMC4wO1xuICBvdXRbN10gPSAwLjA7XG4gIG91dFs4XSA9IC0oKGxlZnRUYW4gLSByaWdodFRhbikgKiB4U2NhbGUgKiAwLjUpO1xuICBvdXRbOV0gPSAodXBUYW4gLSBkb3duVGFuKSAqIHlTY2FsZSAqIDAuNTtcbiAgb3V0WzEwXSA9IGZhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzExXSA9IC0xLjA7XG4gIG91dFsxMl0gPSAwLjA7XG4gIG91dFsxM10gPSAwLjA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMTVdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG9ydGhvZ29uYWwgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cclxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3J0aG8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDIgKiBuZjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAobGVmdCArIHJpZ2h0KSAqIGxyO1xuICBvdXRbMTNdID0gKHRvcCArIGJvdHRvbSkgKiBidDtcbiAgb3V0WzE0XSA9IChmYXIgKyBuZWFyKSAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBsb29rLWF0IG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBleWUgcG9zaXRpb24sIGZvY2FsIHBvaW50LCBhbmQgdXAgYXhpcy5cclxuICogSWYgeW91IHdhbnQgYSBtYXRyaXggdGhhdCBhY3R1YWxseSBtYWtlcyBhbiBvYmplY3QgbG9vayBhdCBhbm90aGVyIG9iamVjdCwgeW91IHNob3VsZCB1c2UgdGFyZ2V0VG8gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHVwIHZlYzMgcG9pbnRpbmcgdXBcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICB9XG5cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguaHlwb3QoejAsIHoxLCB6Mik7XG4gIHowICo9IGxlbjtcbiAgejEgKj0gbGVuO1xuICB6MiAqPSBsZW47XG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguaHlwb3QoeDAsIHgxLCB4Mik7XG5cbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgbGVuID0gTWF0aC5oeXBvdCh5MCwgeTEsIHkyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG1hdHJpeCB0aGF0IG1ha2VzIHNvbWV0aGluZyBsb29rIGF0IHNvbWV0aGluZyBlbHNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gY2VudGVyIFBvaW50IHRoZSB2aWV3ZXIgaXMgbG9va2luZyBhdFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdGFyZ2V0VG8ob3V0LCBleWUsIHRhcmdldCwgdXApIHtcbiAgdmFyIGV5ZXggPSBleWVbMF0sXG4gICAgICBleWV5ID0gZXllWzFdLFxuICAgICAgZXlleiA9IGV5ZVsyXSxcbiAgICAgIHVweCA9IHVwWzBdLFxuICAgICAgdXB5ID0gdXBbMV0sXG4gICAgICB1cHogPSB1cFsyXTtcbiAgdmFyIHowID0gZXlleCAtIHRhcmdldFswXSxcbiAgICAgIHoxID0gZXlleSAtIHRhcmdldFsxXSxcbiAgICAgIHoyID0gZXlleiAtIHRhcmdldFsyXTtcbiAgdmFyIGxlbiA9IHowICogejAgKyB6MSAqIHoxICsgejIgKiB6MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB6MCAqPSBsZW47XG4gICAgejEgKj0gbGVuO1xuICAgIHoyICo9IGxlbjtcbiAgfVxuXG4gIHZhciB4MCA9IHVweSAqIHoyIC0gdXB6ICogejEsXG4gICAgICB4MSA9IHVweiAqIHowIC0gdXB4ICogejIsXG4gICAgICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IHgwICogeDAgKyB4MSAqIHgxICsgeDIgKiB4MjtcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgICB4MCAqPSBsZW47XG4gICAgeDEgKj0gbGVuO1xuICAgIHgyICo9IGxlbjtcbiAgfVxuXG4gIG91dFswXSA9IHgwO1xuICBvdXRbMV0gPSB4MTtcbiAgb3V0WzJdID0geDI7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IHoxICogeDIgLSB6MiAqIHgxO1xuICBvdXRbNV0gPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgb3V0WzZdID0gejAgKiB4MSAtIHoxICogeDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHowO1xuICBvdXRbOV0gPSB6MTtcbiAgb3V0WzEwXSA9IHoyO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IGV5ZXg7XG4gIG91dFsxM10gPSBleWV5O1xuICBvdXRbMTRdID0gZXllejtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDQoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIiwgXCIgKyBhWzldICsgXCIsIFwiICsgYVsxMF0gKyBcIiwgXCIgKyBhWzExXSArIFwiLCBcIiArIGFbMTJdICsgXCIsIFwiICsgYVsxM10gKyBcIiwgXCIgKyBhWzE0XSArIFwiLCBcIiArIGFbMTVdICsgXCIpXCI7XG59XG4vKipcclxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDRcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBjYWxjdWxhdGUgRnJvYmVuaXVzIG5vcm0gb2ZcclxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSwgYVs2XSwgYVs3XSwgYVs4XSwgYVs5XSwgYVsxMF0sIGFbMTFdLCBhWzEyXSwgYVsxM10sIGFbMTRdLCBhWzE1XSk7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICBvdXRbM10gPSBhWzNdICsgYlszXTtcbiAgb3V0WzRdID0gYVs0XSArIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XTtcbiAgb3V0WzddID0gYVs3XSArIGJbN107XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdO1xuICBvdXRbOV0gPSBhWzldICsgYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdICsgYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdICsgYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBTdWJ0cmFjdHMgbWF0cml4IGIgZnJvbSBtYXRyaXggYVxyXG4gKlxyXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcclxuICogQHJldHVybnMge21hdDR9IG91dFxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICBvdXRbM10gPSBhWzNdIC0gYlszXTtcbiAgb3V0WzRdID0gYVs0XSAtIGJbNF07XG4gIG91dFs1XSA9IGFbNV0gLSBiWzVdO1xuICBvdXRbNl0gPSBhWzZdIC0gYls2XTtcbiAgb3V0WzddID0gYVs3XSAtIGJbN107XG4gIG91dFs4XSA9IGFbOF0gLSBiWzhdO1xuICBvdXRbOV0gPSBhWzldIC0gYls5XTtcbiAgb3V0WzEwXSA9IGFbMTBdIC0gYlsxMF07XG4gIG91dFsxMV0gPSBhWzExXSAtIGJbMTFdO1xuICBvdXRbMTJdID0gYVsxMl0gLSBiWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdIC0gYlsxM107XG4gIG91dFsxNF0gPSBhWzE0XSAtIGJbMTRdO1xuICBvdXRbMTVdID0gYVsxNV0gLSBiWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxyXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cclxuICpcclxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxyXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XHJcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcclxuICogQWRkcyB0d28gbWF0NCdzIGFmdGVyIG11bHRpcGx5aW5nIGVhY2ggZWxlbWVudCBvZiB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXHJcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xyXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICBvdXRbOV0gPSBhWzldICsgYls5XSAqIHNjYWxlO1xuICBvdXRbMTBdID0gYVsxMF0gKyBiWzEwXSAqIHNjYWxlO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXSAqIHNjYWxlO1xuICBvdXRbMTJdID0gYVsxMl0gKyBiWzEyXSAqIHNjYWxlO1xuICBvdXRbMTNdID0gYVsxM10gKyBiWzEzXSAqIHNjYWxlO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XSAqIHNjYWxlO1xuICBvdXRbMTVdID0gYVsxNV0gKyBiWzE1XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XSAmJiBhWzldID09PSBiWzldICYmIGFbMTBdID09PSBiWzEwXSAmJiBhWzExXSA9PT0gYlsxMV0gJiYgYVsxMl0gPT09IGJbMTJdICYmIGFbMTNdID09PSBiWzEzXSAmJiBhWzE0XSA9PT0gYlsxNF0gJiYgYVsxNV0gPT09IGJbMTVdO1xufVxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgVGhlIGZpcnN0IG1hdHJpeC5cclxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXHJcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYTQgPSBhWzRdLFxuICAgICAgYTUgPSBhWzVdLFxuICAgICAgYTYgPSBhWzZdLFxuICAgICAgYTcgPSBhWzddO1xuICB2YXIgYTggPSBhWzhdLFxuICAgICAgYTkgPSBhWzldLFxuICAgICAgYTEwID0gYVsxMF0sXG4gICAgICBhMTEgPSBhWzExXTtcbiAgdmFyIGExMiA9IGFbMTJdLFxuICAgICAgYTEzID0gYVsxM10sXG4gICAgICBhMTQgPSBhWzE0XSxcbiAgICAgIGExNSA9IGFbMTVdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICB2YXIgYjQgPSBiWzRdLFxuICAgICAgYjUgPSBiWzVdLFxuICAgICAgYjYgPSBiWzZdLFxuICAgICAgYjcgPSBiWzddO1xuICB2YXIgYjggPSBiWzhdLFxuICAgICAgYjkgPSBiWzldLFxuICAgICAgYjEwID0gYlsxMF0sXG4gICAgICBiMTEgPSBiWzExXTtcbiAgdmFyIGIxMiA9IGJbMTJdLFxuICAgICAgYjEzID0gYlsxM10sXG4gICAgICBiMTQgPSBiWzE0XSxcbiAgICAgIGIxNSA9IGJbMTVdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpICYmIE1hdGguYWJzKGE0IC0gYjQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE0KSwgTWF0aC5hYnMoYjQpKSAmJiBNYXRoLmFicyhhNSAtIGI1KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNSksIE1hdGguYWJzKGI1KSkgJiYgTWF0aC5hYnMoYTYgLSBiNikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTYpLCBNYXRoLmFicyhiNikpICYmIE1hdGguYWJzKGE3IC0gYjcpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE3KSwgTWF0aC5hYnMoYjcpKSAmJiBNYXRoLmFicyhhOCAtIGI4KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOCksIE1hdGguYWJzKGI4KSkgJiYgTWF0aC5hYnMoYTkgLSBiOSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTkpLCBNYXRoLmFicyhiOSkpICYmIE1hdGguYWJzKGExMCAtIGIxMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEwKSwgTWF0aC5hYnMoYjEwKSkgJiYgTWF0aC5hYnMoYTExIC0gYjExKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTEpLCBNYXRoLmFicyhiMTEpKSAmJiBNYXRoLmFicyhhMTIgLSBiMTIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMiksIE1hdGguYWJzKGIxMikpICYmIE1hdGguYWJzKGExMyAtIGIxMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEzKSwgTWF0aC5hYnMoYjEzKSkgJiYgTWF0aC5hYnMoYTE0IC0gYjE0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTQpLCBNYXRoLmFicyhiMTQpKSAmJiBNYXRoLmFicyhhMTUgLSBiMTUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNSksIE1hdGguYWJzKGIxNSkpO1xufVxuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXHJcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cclxuICogQGZ1bmN0aW9uXHJcbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCB7IFByb2dyYW1JbmZvIH0gZnJvbSBcIi4vUmVuZGVyXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiIFxyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBzcHJpdGU6IFNwcml0ZVxyXG4gICAgcG9zOiB7XHJcbiAgICAgICAgeDogbnVtYmVyO1xyXG4gICAgICAgIHk6IG51bWJlcjtcclxuICAgIH1cclxuICAgIHZlbDoge1xyXG4gICAgICAgIHg6IG51bWJlcjtcclxuICAgICAgICB5OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9ncmFtX2luZm86IFByb2dyYW1JbmZvKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUucmVuZGVyKHByb2dyYW1faW5mbywgdGhpcy5wb3MueCwgdGhpcy5wb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBvczoge3g6IG51bWJlciwgeTogbnVtYmVyfSwgdmVsOiB7eDogbnVtYmVyLCB5OiBudW1iZXJ9LCBzcHJpdGU6IFNwcml0ZSl7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3NcclxuICAgICAgICB0aGlzLnZlbCA9IHZlbFxyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gc3ByaXRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9ncmFtSW5mbywgcHJlUmVuZGVyIH0gZnJvbSBcIi4vUmVuZGVyXCI7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuY2xhc3MgTGV2ZWwge1xyXG4gICAgZW50aXRpZXM6IEVudGl0eVtdID0gW107XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHNwYXduKGVudGl0eTogRW50aXR5LCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIGVudGl0eS5wb3MgPSB7eCwgeX07XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5wdXNoKGVudGl0eSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgLy8gZW50aXR5LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgICAgIGVudGl0eS51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG90aGVyIG9mIHRoaXMuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChlbnRpdHkgPT09IG90aGVyIHx8ICFlbnRpdHkuaXNDb2xsaWRpbmcob3RoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5ID09PSBvdGhlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZW50aXR5Lm9uQ29sbGlzaW9uKG90aGVyKTtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5vbkNvbGxpc2lvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9ncmFtX2luZm86IFByb2dyYW1JbmZvKSB7XHJcbiAgICAgICAgcHJlUmVuZGVyKHByb2dyYW1faW5mbyk7XHJcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgZW50aXR5LnJlbmRlcihwcm9ncmFtX2luZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgTGV2ZWwgfTsiLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuaW1wb3J0IHsgbWF0NCB9IGZyb20gXCJnbC1tYXRyaXhcIjtcclxuXHJcbnR5cGUgUHJvZ3JhbUluZm8gPSB7XHJcbiAgICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LFxyXG4gICAgcHJvZ3JhbTogV2ViR0xQcm9ncmFtLFxyXG4gICAgYXR0cmlidXRlX2xvY2F0aW9uczoge1xyXG4gICAgICAgIHZlcnRleF9wb3NpdGlvbjogbnVtYmVyLFxyXG4gICAgICAgIHZlcnRleF9jb2xvcjogbnVtYmVyLFxyXG4gICAgICAgIHRleHR1cmVfY29vcmQ6IG51bWJlcixcclxuICAgIH0sXHJcbiAgICB1bmlmb3JtX2xvY2F0aW9uczoge1xyXG4gICAgICAgIHByb2plY3Rpb25fbWF0cml4OiBXZWJHTFVuaWZvcm1Mb2NhdGlvbixcclxuICAgICAgICBtb2RlbF92aWV3X21hdHJpeDogV2ViR0xVbmlmb3JtTG9jYXRpb24sXHJcbiAgICAgICAgc2FtcGxlcjogV2ViR0xVbmlmb3JtTG9jYXRpb24sXHJcbiAgICAgICAgdGludHM6IFdlYkdMVW5pZm9ybUxvY2F0aW9uLFxyXG4gICAgfSxcclxufTtcclxuXHJcbnR5cGUgQnVmZmVySW5mbyA9IHtcclxuICAgIHZlcnRleDogV2ViR0xCdWZmZXIsXHJcbiAgICB0ZXh0dXJlX2Nvb3JkOiBXZWJHTEJ1ZmZlcixcclxuICAgIGNvbG9yOiBXZWJHTEJ1ZmZlcixcclxuICAgIGluZGV4OiBXZWJHTEJ1ZmZlcixcclxufTtcclxuXHJcbmNvbnN0IHZzX3NvdXJjZSA9IGBcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcclxuICAgIGF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhDb2xvcjtcclxuICAgIGF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XHJcbiAgICBcclxuICAgIHVuaWZvcm0gbWF0NCB1TW9kZWxWaWV3TWF0cml4O1xyXG4gICAgdW5pZm9ybSBtYXQ0IHVQcm9qZWN0aW9uTWF0cml4O1xyXG4gICAgXHJcbiAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3I7XHJcbiAgICB1bmlmb3JtIGxvd3AgdmVjNCB1VGludHM7XHJcbiAgICBcclxuICAgIHZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgZ2xfUG9zaXRpb24gPSB1UHJvamVjdGlvbk1hdHJpeCAqIHVNb2RlbFZpZXdNYXRyaXggKiBhVmVydGV4UG9zaXRpb247XHJcbiAgICAgICAgdkNvbG9yID0gYVZlcnRleENvbG9yICogdVRpbnRzO1xyXG4gICAgICAgIHZUZXh0dXJlQ29vcmQgPSBhVGV4dHVyZUNvb3JkO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgZnNfc291cmNlID0gYFxyXG4gICAgdmFyeWluZyBsb3dwIHZlYzQgdkNvbG9yO1xyXG4gICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmQ7XHJcbiAgICBcclxuICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xyXG4gICAgXHJcbiAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB2VGV4dHVyZUNvb3JkKSAqIHZDb2xvcjtcclxuICAgIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIGluaXRTaGFkZXJQcm9ncmFtKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHZzX3NvdXJjZTogc3RyaW5nLCBmc19zb3VyY2U6IHN0cmluZyk6IFdlYkdMUHJvZ3JhbSB8IG51bGwge1xyXG4gICAgY29uc3Qgc2hhZGVyX3Byb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICBpZiAoc2hhZGVyX3Byb2dyYW0gPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgcHJvZ3JhbS5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJ0ZXhfc2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNfc291cmNlKTtcclxuICAgIGlmICh2ZXJ0ZXhfc2hhZGVyID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gbG9hZCB2ZXJ0ZXggc2hhZGVyLlwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNvbnN0IGZyYWdtZW50X3NoYWRlciA9IGxvYWRTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNfc291cmNlKTtcclxuICAgIGlmIChmcmFnbWVudF9zaGFkZXIgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIGZyYWdtZW50IHNoYWRlci5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIoc2hhZGVyX3Byb2dyYW0sIHZlcnRleF9zaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlcl9wcm9ncmFtLCBmcmFnbWVudF9zaGFkZXIpO1xyXG4gICAgZ2wubGlua1Byb2dyYW0oc2hhZGVyX3Byb2dyYW0pO1xyXG4gICAgXHJcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyX3Byb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgIGFsZXJ0KFwiVW5hYmxlIHRvIGluaXRpYWxpemUgc2hhZGVyIHByb2dyYW06IFwiICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyX3Byb2dyYW0pKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaGFkZXJfcHJvZ3JhbTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNoYWRlcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIgfCBudWxsIHtcclxuICAgIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgIGlmIChzaGFkZXIgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBjcmVhdGUgc2hhZGVyLlwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBcclxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cmVkIGNvbXBpbGluZyBzaGFkZXI6IFwiICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpKTtcclxuICAgICAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaGFkZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUZXh0dXJlKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHVybDogc3RyaW5nLCBvbkxvYWQ6IChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4gdm9pZCk6IFdlYkdMVGV4dHVyZSB8IG51bGwge1xyXG4gICAgLy8gQ3JlYXRlIGEgMS1waXhlbCBsYXJnZSBkZWZhdWx0IHRleHR1cmUgYnkgZGVmYXVsdC5cclxuICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICBjb25zdCBsZXZlbCA9IDA7XHJcbiAgICBjb25zdCBpbnRlcm5hbF9mb3JtYXQgPSBnbC5SR0JBO1xyXG4gICAgY29uc3Qgd2lkdGggPSAxO1xyXG4gICAgY29uc3QgaGVpZ2h0ID0gMTtcclxuICAgIGNvbnN0IGJvcmRlciA9IDA7XHJcbiAgICBjb25zdCBzcmNfZm9ybWF0ID0gZ2wuUkdCQTtcclxuICAgIGNvbnN0IHNyY190eXBlID0gZ2wuVU5TSUdORURfQllURTtcclxuICAgIGNvbnN0IHBpeGVsID0gbmV3IFVpbnQ4QXJyYXkoWzAsIDI1NSwgMCwgMjU1XSk7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleEltYWdlMkQoXHJcbiAgICAgICAgZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBpbnRlcm5hbF9mb3JtYXQsXHJcbiAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgIGJvcmRlcixcclxuICAgICAgICBzcmNfZm9ybWF0LCBzcmNfdHlwZSxcclxuICAgICAgICBwaXhlbFxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgLy8gVXNlIHRoZSByZXF1ZXN0ZWQgdGV4dHVyZSBpZiBpdCBnZXRzIGxvYWRlZC5cclxuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKFxyXG4gICAgICAgICAgICBnbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgICAgaW50ZXJuYWxfZm9ybWF0LFxyXG4gICAgICAgICAgICBzcmNfZm9ybWF0LFxyXG4gICAgICAgICAgICBzcmNfdHlwZSxcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcclxuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XHJcbiAgICAgICAgb25Mb2FkKGltYWdlKTtcclxuICAgIH07XHJcbiAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICBcclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0U3F1YXJlQnVmZmVycyhnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KTogQnVmZmVySW5mbyB8IG51bGwge1xyXG4gICAgLy8gLS0gSW5pdGlhbGl6ZSB2ZXJ0ZXggYnVmZmVyXHJcbiAgICBjb25zdCB2ZXJ0ZXhfYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFtcclxuICAgICAgICAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgIDEuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgMS4wLCAwLjAsIDAuMCxcclxuICAgICAgICAwLjAsIDAuMCwgMC4wLFxyXG4gICAgXTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2ZXJ0ZXhfYnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHZlcnRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgXHJcbiAgICAvLyAtLSBJbml0aWFsaXplIHRleHR1cmUgY29vcmRpbmF0ZXMgYnVmZmVyXHJcbiAgICBjb25zdCB0ZXh0dXJlX2Nvb3JkX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgdGV4dHVyZV9jb29yZHMgPSBbXHJcbiAgICAgICAgMC4wLCAwLjAsXHJcbiAgICAgICAgMS4wLCAwLjAsXHJcbiAgICAgICAgMS4wLCAxLjAsXHJcbiAgICAgICAgMC4wLCAxLjAsXHJcbiAgICBdO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVfY29vcmRfYnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KHRleHR1cmVfY29vcmRzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgXHJcbiAgICAvLyAtLSBJbml0aWFsaXplIGNvbG9yIGJ1ZmZlciAodGludClcclxuICAgIGNvbnN0IGNvbG9yX2J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG4gICAgY29uc3QgY29sb3JzID0gW1xyXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsIDEuMCxcclxuICAgICAgICAxLjAsIDEuMCwgMS4wLCAxLjAsXHJcbiAgICAgICAgMS4wLCAxLjAsIDEuMCwgMS4wLFxyXG4gICAgICAgIDEuMCwgMS4wLCAxLjAsIDEuMCxcclxuICAgIF07XHJcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgY29sb3JfYnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIGdsLlNUQVRJQ19EUkFXKTtcclxuICAgIFxyXG4gICAgLy8gLS0gSW5pdGlhbGl6ZSBpbmRpY2VzIGJ1ZmZlclxyXG4gICAgY29uc3QgaW5kZXhfYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCBpbmRpY2VzID0gW1xyXG4gICAgICAwLCAxLCAzLCAyXHJcbiAgICBdO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5FTEVNRU5UX0FSUkFZX0JVRkZFUiwgaW5kZXhfYnVmZmVyKTtcclxuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuRUxFTUVOVF9BUlJBWV9CVUZGRVIsIG5ldyBVaW50MTZBcnJheShpbmRpY2VzKSwgZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgXHJcbiAgICBpZiAodmVydGV4X2J1ZmZlciA9PT0gbnVsbCB8fCB0ZXh0dXJlX2Nvb3JkX2J1ZmZlciA9PT0gbnVsbCB8fCBjb2xvcl9idWZmZXIgPT09IG51bGwgfHwgaW5kZXhfYnVmZmVyID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBidWZmZXJzLlwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHZlcnRleDogdmVydGV4X2J1ZmZlcixcclxuICAgICAgICB0ZXh0dXJlX2Nvb3JkOiB0ZXh0dXJlX2Nvb3JkX2J1ZmZlcixcclxuICAgICAgICBjb2xvcjogY29sb3JfYnVmZmVyLFxyXG4gICAgICAgIGluZGV4OiBpbmRleF9idWZmZXIsXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTcHJpdGUocHJvZ3JhbV9pbmZvOiBQcm9ncmFtSW5mbywgc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBsZXQgZ2wgPSBwcm9ncmFtX2luZm8uZ2w7XHJcbiAgICAvLyAtLSBDb25maWd1cmUgbW9kZWxfdmlld19tYXRyaXggYW5kIGFwcGx5IHVuaWZvcm0gdG8gc2hhZGVycy5cclxuICAgIGNvbnN0IG1vZGVsX3ZpZXdfbWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcclxuICAgIG1hdDQudHJhbnNsYXRlKG1vZGVsX3ZpZXdfbWF0cml4LCBtb2RlbF92aWV3X21hdHJpeCwgW3gsIHksIC0xXSk7XHJcbiAgICBtYXQ0LnJvdGF0ZShtb2RlbF92aWV3X21hdHJpeCwgbW9kZWxfdmlld19tYXRyaXgsIHNwcml0ZS5yb3RhdGlvbiwgWzAsIDAsIDFdKTtcclxuICAgIG1hdDQudHJhbnNsYXRlKG1vZGVsX3ZpZXdfbWF0cml4LCBtb2RlbF92aWV3X21hdHJpeCwgWy1zcHJpdGUud2lkdGggLyAyLCAtc3ByaXRlLmhlaWdodCAvIDIsIDBdKTtcclxuICAgIG1hdDQuc2NhbGUobW9kZWxfdmlld19tYXRyaXgsIG1vZGVsX3ZpZXdfbWF0cml4LCBbc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0LCAwXSk7XHJcblxyXG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihcclxuICAgICAgICBwcm9ncmFtX2luZm8udW5pZm9ybV9sb2NhdGlvbnMubW9kZWxfdmlld19tYXRyaXgsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgbW9kZWxfdmlld19tYXRyaXhcclxuICAgICk7XHJcblxyXG4gICAgLy8gLS0gVXBsb2FkIHZlcnRleCBwb3NpdGlvbiBkYXRhXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSAzO1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnbC5GTE9BVDtcclxuICAgICAgICBjb25zdCBub3JtYWxpemUgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBzdHJpZGUgPSAwO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDA7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHNwcml0ZS5idWZmZXJzLnZlcnRleCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgcHJvZ3JhbV9pbmZvLmF0dHJpYnV0ZV9sb2NhdGlvbnMudmVydGV4X3Bvc2l0aW9uLFxyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbm9ybWFsaXplLFxyXG4gICAgICAgICAgICBzdHJpZGUsXHJcbiAgICAgICAgICAgIG9mZnNldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocHJvZ3JhbV9pbmZvLmF0dHJpYnV0ZV9sb2NhdGlvbnMudmVydGV4X3Bvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLSBVcGxvYWQgY29sb3IgZGF0YVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gNDtcclxuICAgICAgICBjb25zdCB0eXBlID0gZ2wuRkxPQVQ7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc3RyaWRlID0gMDtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBzcHJpdGUuYnVmZmVycy5jb2xvcik7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgcHJvZ3JhbV9pbmZvLmF0dHJpYnV0ZV9sb2NhdGlvbnMudmVydGV4X2NvbG9yLFxyXG4gICAgICAgICAgICBjb3VudCxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgICAgbm9ybWFsaXplLFxyXG4gICAgICAgICAgICBzdHJpZGUsXHJcbiAgICAgICAgICAgIG9mZnNldFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkocHJvZ3JhbV9pbmZvLmF0dHJpYnV0ZV9sb2NhdGlvbnMudmVydGV4X2NvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLSBVcGxvYWQgdGV4dHVyZSBjb29yZGluYXRlIGRhdGFcclxuICAgIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDI7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGdsLkZMT0FUO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHN0cmlkZSA9IDA7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMDtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgc3ByaXRlLmJ1ZmZlcnMudGV4dHVyZV9jb29yZCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcclxuICAgICAgICAgICAgcHJvZ3JhbV9pbmZvLmF0dHJpYnV0ZV9sb2NhdGlvbnMudGV4dHVyZV9jb29yZCxcclxuICAgICAgICAgICAgY291bnQsXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZSxcclxuICAgICAgICAgICAgc3RyaWRlLFxyXG4gICAgICAgICAgICBvZmZzZXRcclxuICAgICAgICApO1xyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHByb2dyYW1faW5mby5hdHRyaWJ1dGVfbG9jYXRpb25zLnRleHR1cmVfY29vcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tIEJpbmQgYWN0aXZlIHRleHR1cmUuXHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHNwcml0ZS50ZXh0dXJlKTtcclxuICAgIGdsLnVuaWZvcm0xaShwcm9ncmFtX2luZm8udW5pZm9ybV9sb2NhdGlvbnMuc2FtcGxlciwgMCk7XHJcblxyXG4gICAgLy8gLS0gQWRqdXN0IHRpbnRzXHJcbiAgICBsZXQgY3MgPSBzcHJpdGUuY29sb3JzO1xyXG4gICAgZ2wudW5pZm9ybTRmKHByb2dyYW1faW5mby51bmlmb3JtX2xvY2F0aW9ucy50aW50cywgY3NbMF0sIGNzWzFdLCBjc1syXSwgY3NbM10pO1xyXG5cclxuICAgIC8vIC0tIERyYXcgdXNpbmcgZ2l2ZW4gaW5kaWNlcy5cclxuICAgIHtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkVMRU1FTlRfQVJSQVlfQlVGRkVSLCBzcHJpdGUuYnVmZmVycy5pbmRleCk7XHJcbiAgICAgICAgY29uc3QgY291bnQgPSA0O1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBnbC5VTlNJR05FRF9TSE9SVDtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAwO1xyXG4gICAgICAgIGdsLmRyYXdFbGVtZW50cyhnbC5UUklBTkdMRV9TVFJJUCwgY291bnQsIHR5cGUsIG9mZnNldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZVJlbmRlcihwcm9ncmFtX2luZm86IFByb2dyYW1JbmZvKSB7XHJcbiAgICBsZXQgZ2wgPSBwcm9ncmFtX2luZm8uZ2w7XHJcbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XHJcbiAgICBnbC5jbGVhckRlcHRoKDEuMCk7XHJcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XHJcbiAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcclxuICAgIFxyXG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IGdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBmb3YgPSA0NSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAvLyBjb25zdCBhc3BlY3QgPSBnbC5jYW52YXMuY2xpZW50V2lkdGggLyBnbC5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgLy8gY29uc3Qgel9uZWFyID0gMC4xO1xyXG4gICAgLy8gY29uc3Qgel9mYXIgPSAxMDAuMDtcclxuICAgIFxyXG4gICAgY29uc3QgcHJvamVjdGlvbl9tYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gICAgbWF0NC5vcnRobyhwcm9qZWN0aW9uX21hdHJpeCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCAwLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0LCAxLCAtMSk7XHJcbiAgICAvLyBtYXQ0Lm9ydGhvKHByb2plY3Rpb25fbWF0cml4LCAtMS4wLCAxLjAsIC0xLjAsIDEuMCwgMC4xLCAxMDAwKTtcclxuICAgIC8vbWF0NC5wZXJzcGVjdGl2ZShwcm9qZWN0aW9uX21hdHJpeCwgZm92LCBhc3BlY3QsIHpfbmVhciwgel9mYXIpO1xyXG4gICAgXHJcbiAgICBnbC51c2VQcm9ncmFtKHByb2dyYW1faW5mby5wcm9ncmFtKTtcclxuICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYoXHJcbiAgICAgICAgcHJvZ3JhbV9pbmZvLnVuaWZvcm1fbG9jYXRpb25zLnByb2plY3Rpb25fbWF0cml4LFxyXG4gICAgICAgIGZhbHNlLFxyXG4gICAgICAgIHByb2plY3Rpb25fbWF0cml4XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0V2ViR0woKTogUHJvZ3JhbUluZm8gfCBudWxsIHtcclxuICAgIGNvbnN0IG1jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZUNhbnZhc1wiKTtcclxuICAgIGlmIChtY2FudmFzID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gc2VsZWN0IGNhbnZhcy5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYW52YXMgPSBtY2FudmFzO1xyXG4gICAgY29uc3QgbWdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcclxuICAgIGlmIChtZ2wgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBpbml0aWFsaXplIFdlYkdMXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2wgPSBtZ2w7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGZpdENhbnZhc1RvU2NyZWVuKCkge1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuZHJhd2luZ0J1ZmZlcldpZHRoLCBnbC5kcmF3aW5nQnVmZmVySGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGZpdENhbnZhc1RvU2NyZWVuKCk7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBmaXRDYW52YXNUb1NjcmVlbjtcclxuICAgIFxyXG4gICAgaWYgKGdsID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJDb3VsZCBub3QgaW5pdGlhbGl6ZSBXZWJHTC5cIik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHNoYWRlcl9wcm9ncmFtID0gaW5pdFNoYWRlclByb2dyYW0oZ2wsIHZzX3NvdXJjZSwgZnNfc291cmNlKTtcclxuICAgIGlmIChzaGFkZXJfcHJvZ3JhbSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGluaXRpYWxpemUgc2hhZGVyIHByb2dyYW0uXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBwcm9qZWN0aW9uX21hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJfcHJvZ3JhbSwgXCJ1UHJvamVjdGlvbk1hdHJpeFwiKTtcclxuICAgIGxldCBtb2RlbF92aWV3X21hdHJpeCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihzaGFkZXJfcHJvZ3JhbSwgXCJ1TW9kZWxWaWV3TWF0cml4XCIpO1xyXG4gICAgbGV0IHNhbXBsZXIgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyX3Byb2dyYW0sIFwidVNhbXBsZXJcIik7XHJcbiAgICBsZXQgdGludHMgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24oc2hhZGVyX3Byb2dyYW0sIFwidVRpbnRzXCIpO1xyXG4gICAgaWYgKHByb2plY3Rpb25fbWF0cml4ID09PSBudWxsIHx8IG1vZGVsX3ZpZXdfbWF0cml4ID09PSBudWxsIHx8IHNhbXBsZXIgPT09IG51bGwgfHwgdGludHMgPT09IG51bGwpIHtcclxuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBnZXQgdW5pZm9ybSBsb2NhdGlvbnMuXCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2dyYW1faW5mbzogUHJvZ3JhbUluZm8gPSB7XHJcbiAgICAgICAgZ2wsXHJcbiAgICAgICAgcHJvZ3JhbTogc2hhZGVyX3Byb2dyYW0sXHJcbiAgICAgICAgYXR0cmlidXRlX2xvY2F0aW9uczoge1xyXG4gICAgICAgICAgICB2ZXJ0ZXhfcG9zaXRpb246IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlcl9wcm9ncmFtLCBcImFWZXJ0ZXhQb3NpdGlvblwiKSxcclxuICAgICAgICAgICAgdmVydGV4X2NvbG9yOiBnbC5nZXRBdHRyaWJMb2NhdGlvbihzaGFkZXJfcHJvZ3JhbSwgXCJhVmVydGV4Q29sb3JcIiksXHJcbiAgICAgICAgICAgIHRleHR1cmVfY29vcmQ6IGdsLmdldEF0dHJpYkxvY2F0aW9uKHNoYWRlcl9wcm9ncmFtLCBcImFUZXh0dXJlQ29vcmRcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmlmb3JtX2xvY2F0aW9uczoge1xyXG4gICAgICAgICAgICBwcm9qZWN0aW9uX21hdHJpeCxcclxuICAgICAgICAgICAgbW9kZWxfdmlld19tYXRyaXgsXHJcbiAgICAgICAgICAgIHNhbXBsZXIsXHJcbiAgICAgICAgICAgIHRpbnRzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBwcm9ncmFtX2luZm87XHJcbn1cclxuXHJcbmV4cG9ydCB7IGluaXRTaGFkZXJQcm9ncmFtLCBpbml0U3F1YXJlQnVmZmVycywgbG9hZFRleHR1cmUsIHJlbmRlclNwcml0ZSwgcHJlUmVuZGVyLCBpbml0V2ViR0wgfTtcclxuZXhwb3J0IHR5cGUgeyBQcm9ncmFtSW5mbywgQnVmZmVySW5mbyB9OyIsImltcG9ydCB7IFByb2dyYW1JbmZvLCBCdWZmZXJJbmZvLCBsb2FkVGV4dHVyZSwgcmVuZGVyU3ByaXRlLCBpbml0U3F1YXJlQnVmZmVycyB9IGZyb20gXCIuL1JlbmRlclwiO1xyXG5cclxuY2xhc3MgU3ByaXRlIHtcclxuICAgIHRleHR1cmU6IFdlYkdMVGV4dHVyZTtcclxuICAgIGJ1ZmZlcnM6IEJ1ZmZlckluZm87XHJcbiAgICByb3RhdGlvbjogbnVtYmVyO1xyXG4gICAgY29sb3JzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBXZWJHTFRleHR1cmUsIGJ1ZmZlcnM6IEJ1ZmZlckluZm8sIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyLCBjb2xvcnM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBidWZmZXJzO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcm90YXRpb247XHJcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb2dyYW1faW5mbzogUHJvZ3JhbUluZm8sIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmVuZGVyU3ByaXRlKHByb2dyYW1faW5mbywgdGhpcywgeCwgeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21QYXRoKHByb2dyYW1faW5mbzogUHJvZ3JhbUluZm8sIHBhdGg6IHN0cmluZyk6IFNwcml0ZSB8IG51bGwge1xyXG4gICAgbGV0IHNwcml0ZTogU3ByaXRlO1xyXG4gICAgZnVuY3Rpb24gb25Mb2FkKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgc3ByaXRlLndpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhemluZ2EhXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IHRleHR1cmUgPSBsb2FkVGV4dHVyZShwcm9ncmFtX2luZm8uZ2wsIHBhdGgsIG9uTG9hZCk7XHJcbiAgICBpZiAodGV4dHVyZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IGJ1ZmZlcnMgPSBpbml0U3F1YXJlQnVmZmVycyhwcm9ncmFtX2luZm8uZ2wpO1xyXG4gICAgaWYgKGJ1ZmZlcnMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHNwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSwgYnVmZmVycywgMSwgMSwgMCwgWzEsIDEsIDEsIDFdKTtcclxuICAgIHJldHVybiBzcHJpdGU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwcml0ZSwgZnJvbVBhdGggfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRTaGFkZXJQcm9ncmFtLCBpbml0U3F1YXJlQnVmZmVycywgbG9hZFRleHR1cmUsIGluaXRXZWJHTCwgcmVuZGVyU3ByaXRlLCBwcmVSZW5kZXIgfSBmcm9tIFwiLi9SZW5kZXJcIjtcclxuaW1wb3J0IHR5cGUgeyBQcm9ncmFtSW5mbywgQnVmZmVySW5mbyB9IGZyb20gXCIuL1JlbmRlclwiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIGZyb21QYXRoIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcbmltcG9ydCB7IExldmVsIH0gZnJvbSBcIi4vTGV2ZWxcIjtcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgbGV0IG1wcm9ncmFtX2luZm8gPSBpbml0V2ViR0woKTtcclxuICAgIGlmIChtcHJvZ3JhbV9pbmZvID09PSBudWxsKSB7XHJcbiAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBXZWJHTC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHByb2dyYW1faW5mbyA9IG1wcm9ncmFtX2luZm87XHJcbiAgICAvLyBsZXQgbXMxOiBTcHJpdGUgfCBudWxsID0gZnJvbVBhdGgocHJvZ3JhbV9pbmZvLCBcInJlcy90ZXN0LnBuZ1wiKTtcclxuICAgIC8vIGlmIChtczEgPT09IG51bGwpIHtcclxuICAgIC8vICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIHNwcml0ZS5cIik7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gbGV0IHMxID0gbXMxO1xyXG5cclxuICAgIGxldCBtczEgPSBmcm9tUGF0aChwcm9ncmFtX2luZm8sIFwicmVzL3Rlc3QucG5nXCIpO1xyXG4gICAgaWYgKG1zMSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGxvYWQgc3ByaXRlIGZyb20gcGF0aC5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHMxID0gbXMxO1xyXG5cclxuICAgIGxldCBlMSA9IG5ldyBFbnRpdHkoe3g6IDEwMCwgeTogMTAwfSwge3g6IDAsIHk6IDB9LCBzMSk7XHJcbiAgICBcclxuICAgIGxldCBsZXZlbCA9IG5ldyBMZXZlbCgpO1xyXG4gICAgbGV2ZWwuc3Bhd24oZTEsIDEwMCwgMTAwKTtcclxuICAgIGxldCB0aGVuID0gLTE7XHJcbiAgICBmdW5jdGlvbiBzdGVwKG5vdzogRE9NSGlnaFJlc1RpbWVTdGFtcCkge1xyXG4gICAgICAgIGlmICh0aGVuID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aGVuID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkZWx0YSA9IG5vdyAtIHRoZW47XHJcbiAgICAgICAgbGV2ZWwudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICBsZXZlbC5yZW5kZXIocHJvZ3JhbV9pbmZvKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9IFxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9IG1haW47Il0sInNvdXJjZVJvb3QiOiIifQ==