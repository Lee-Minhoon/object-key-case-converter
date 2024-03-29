"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = require("lodash-es");
var pascalCase = function (string) {
    return lodash_es_1.default.startCase(lodash_es_1.default.camelCase(string)).replace(/ /g, "");
};
var constantCase = function (string) {
    return lodash_es_1.default.upperCase(string).replace(/ /g, "_");
};
var caseStyles = {
    camelCase: lodash_es_1.default.camelCase,
    pascalCase: pascalCase,
    snakeCase: lodash_es_1.default.snakeCase,
    constantCase: constantCase,
};
var CASE_STYLE = {
    CAMEL_CASE: "camelCase",
    PASCAL_CASE: "pascalCase",
    SNAKE_CASE: "snakeCase",
    CONSTANT_CASE: "constantCase",
};
var caseConvert = function (input, caseStyle) {
    var converter = caseStyles[caseStyle];
    if (input.constructor === Object) {
        var newObject = {};
        for (var _i = 0, _a = Object.entries(input); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            var convertedKey = converter(key);
            newObject[convertedKey] = caseConvert(value, caseStyle);
        }
        return newObject;
    }
    if (input.constructor === Array) {
        var newArray = input.map(function (item) {
            return caseConvert(item, caseStyle);
        });
        return newArray;
    }
    return input;
};
exports.default = caseConvert;
