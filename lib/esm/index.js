import _ from "lodash-es";
export var pascalCase = function (string) {
    return _.startCase(_.camelCase(string)).replace(/ /g, "");
};
export var constantCase = function (string) {
    return _.upperCase(string).replace(/ /g, "_");
};
var caseStyles = {
    camelCase: _.camelCase,
    pascalCase: pascalCase,
    snakeCase: _.snakeCase,
    constantCase: constantCase,
};
var CASE_STYLE = {
    CAMEL_CASE: "camelCase",
    PASCAL_CASE: "pascalCase",
    SNAKE_CASE: "snakeCase",
    CONSTANT_CASE: "constantCase",
};
export var caseConvert = function (input, caseStyle) {
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
var a = {
    b_ASdfasdf: "asdfadsf",
    adsfasd_sfasdfadsf: "asdfasdfsad",
    awefaewf: [
        {
            awefaw_asdfdfDF: "AWefawef",
            awef_DFdf: "qwdqwd",
            qwqwe_EEE: ["asdsf", { awefaewf_DDD: "dsfsdf" }],
        },
    ],
};
var newA = caseConvert(a, CASE_STYLE.SNAKE_CASE);
console.log(newA.awefaewf[0].qwqweEee);
