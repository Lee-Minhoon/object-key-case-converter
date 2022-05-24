import _ from "lodash-es";

const pascalCase = (string: string): string => {
  return _.startCase(_.camelCase(string)).replace(/ /g, "");
};

const constantCase = (string: string): string => {
  return _.upperCase(string).replace(/ /g, "_");
};

const caseStyles = {
  camelCase: _.camelCase,
  pascalCase: pascalCase,
  snakeCase: _.snakeCase,
  constantCase: constantCase,
};

const CASE_STYLE = {
  CAMEL_CASE: "camelCase",
  PASCAL_CASE: "pascalCase",
  SNAKE_CASE: "snakeCase",
  CONSTANT_CASE: "constantCase",
} as const;
type CASE_STYLE = typeof CASE_STYLE[keyof typeof CASE_STYLE];

const caseConvert: any = (input: any, caseStyle: CASE_STYLE) => {
  const converter = caseStyles[caseStyle];
  if (input.constructor === Object) {
    const newObject: any = {};
    for (const [key, value] of Object.entries(input)) {
      const convertedKey: string = converter(key);
      newObject[convertedKey] = caseConvert(value, caseStyle);
    }
    return newObject;
  }

  if (input.constructor === Array) {
    const newArray: Array<any> = input.map((item) =>
      caseConvert(item, caseStyle)
    );
    return newArray;
  }

  return input;
};

export default caseConvert;
