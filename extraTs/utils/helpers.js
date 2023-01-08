"use strict";
exports.__esModule = true;
var validateEmail = function (emailParams) {
    var pattern = /^\w+([\.-]?\w+)*@+([successive]+)?(\.[tech]{4})+$/;
    return emailParams.match(pattern) != null ? true : false;
};
exports.validateEmail = validateEmail;
