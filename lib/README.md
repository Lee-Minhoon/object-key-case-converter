Converts the case of an object's key.

For example, you can convert the json data key from the server into a case suitable for your project.

## Params

First param is Object

Seconds param is case style(camelCase, pascalCase, snakeCase, constantCase)

## Usage

```javascript
import caseConvert from "object-key-case-converter";

const person = {
  name: "John Doe",
  age: 20,
  blood_type: "AB",
  hobbies_list: [
    { hobby: "baseball", hobby_for_several_year: 5 },
    { hobby: "movie", hobby_for_several_year: 10 },
  ],
};

const converted = caseConvert(object, "camelCase");
```

```
converted = {
  name: "John Doe",
  age: 20,
  bloodType: "AB",
  hobbiesList: [
    { hobby: "baseball", hobbyForSeveralYear: 5 },
    { hobby: "movie", hobbyForSeveralYear: 10 },
  ],
};
```
