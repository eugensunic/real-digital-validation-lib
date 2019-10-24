# Validation library built in native JavaScript

## Description

The project contains functions for validating: basic string, number, text, mail and url inputs.
Functions are used by importing the required object and directly calling the function against
the provided input.

## Getting started (configure node and git)

- have **Node.js** installed on your machine. Install node [here](https://nodejs.org/en/download/). Node comes with
  npm (package manager) needed for executing commands in order to install, and run the app.
- have **Git** installed. Follow instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Download repository and run the app

After setting up Git and Node (npm included) open your Terminal/Command Prompt.

1.  clone the repository to your computer: `git clone https://github.com/eugensunic/real-digital-validation-lib.git`
2.  go inside the directory/folder **real-digital-validation-lib*  (folder must contain package.json) and run: `npm install`. 
3.  run `npm run start` which will instantiate the app at [http://localhost:3000/](http://localhost:3000/). Open
    the url and you will see the input fields where you can try validating your inputs.

## Validation folder

Inside _src/validation_ you will find the validation files written in plain JavaScript (Vanilla.js) which can be used
across the app to validate you inputs. Currently, there are 5 separated .js files. Each one contains functions which are connected
to the meaning of the function file.

For example, _NumberValidation.js_ file contains functions which validates only number inputs, _BaseValidation.js_ file contains basic
functions for general purpose input such as checking whether the input field is empty `isEmpty(value)`, or checking for a specific character
in the string by using `hasCharacter(value, char)` and so on.

All functions return booleans (true or false).

Example: `numberValidation.isDecimal(value)` will return true or false depending on the value argument.

## Validation function usage

In order to demonstrate functions in action. The React.JS framework was chosen to implement the functions on input fields.
Their implementation can be seen inside _src/App.js_ file.

You can implement your own validation depending on your needs and provide custom validation by using the validation library functions.

Function placeholder for testing your validation:

```javascript
validateCustom = () => {
  return;
};
```

## Legend

- Git: version-control system for tracking changes in source code during software development.
- Node: an open-source JavaScript runtime environment that executes JavaScript code outside of a browser.
- npm: package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
