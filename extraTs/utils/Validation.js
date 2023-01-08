"use strict";
exports.__esModule = true;
//const validate_email = require('./helpers.js')
var helpers_1 = require("./helpers");
// validating list of emails
var validateUsers = function (userParams) {
    var valid = 0;
    var invalid = 0;
    for (var _i = 0, _a = Object.entries(userParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        var result = helpers_1.validateEmail(value);
        result === true ? valid++ : invalid++;
    }
    //Printing the count for valid users
    console.log("The number of vaild users: " + valid);
    //Printing the count for invalid users
    console.log("The number of invaild users: " + invalid);
};
exports.validateUsers = validateUsers;
