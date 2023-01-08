"use strict";
exports.__esModule = true;
//Creating function
var str = "";
var equilateral = function (n) {
    //Row creation 
    for (var i = 1; i <= n; i++) {
        //Printing white spaces for the triangle
        for (var j = 0; j < n - i; j++) {
            str += " ";
        }
        //Printing stars for the triangle
        for (var k = 0; k < i; k++) {
            str += "* ";
        }
        str += "\n";
    }
    console.log(str);
};
exports["default"] = equilateral;
