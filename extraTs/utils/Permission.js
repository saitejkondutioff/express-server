"use strict";
exports.__esModule = true;
// Function call and passing parameters for module type, role, permission
var hasPermissions = function (moduleName, Role, permissiontype) {
    return (moduleName[permissiontype] && moduleName[permissiontype].includes(Role)) ? true : false;
};
exports.hasPermissions = hasPermissions;
