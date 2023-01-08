"use strict";
exports.__esModule = true;
var str = "";
var diamond = function (n) {
    // for upper triangle
    for (var i = 1; i <= n; i++) {
        // for spaces in the upper triangle
        for (var j = 0; j < n - i; j++) {
            str += " ";
        }
        // for star in the upper triangle
        for (var k = 0; k < 2 * i - 1; k++) {
            str += "*";
        }
        str += "\n";
    }
    // for lower triangle
    for (var i = 1; i < n; i++) {
        // for spaces in the lower triangle
        for (var j = 0; j < i; j++) {
            str += " ";
        }
        // for star in the lower triangle
        for (var k = 0; k < 2 * (n - i) - 1; k++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
};
exports["default"] = diamond;
