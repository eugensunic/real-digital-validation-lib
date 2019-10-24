# Validation library built in native JavaScript

## Description
The project contains functions for validating: basic string, number, text, mail and url input
Functions are used by importing the required class/object and directly calling the function against
the provided input.

All functions return booleans (true or false).
Example: `numberValidation.isDecimal(value)` will return true or false depending on the value argument


## Getting started 1 (configure node and git)
- have **node** installed on your machine. Install node [here](https://nodejs.org/en/download/). Node comes with
  npm (package manager) needed for executing commands in order to install, and run the app.
- have **git** installed. Follow instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


## Download repository and run the app
 After setting up git and node (npm included)

 1. clone the repository to your computer: ` git clone https://github.com/eugensunic/real-digital-validation-lib.git ` 
 2. go inside that directory/folder (folder must contain package.json) and run: ` npm install `. 
 3. now run ` npm run start ` which will instantiate the app at [http://localhost:3000/](http://localhost:3000/). Open 
    the url and you will see the input fields where you can try validating your inputs.

## Validation folder 
 Inside src/validation you will find the validation files written in plain JavaScript (Vanilla.js) which can be used
 across the app to validate you inputs. Currently there are 5 separated .js files. Each one contains functions which are connected
 to the meaning of the function file.
 
 For example, NumberValidation.js file contains functions which validates only number inputs, BaseValidation.js file contains basic
 functions for general purpose input such as checking whether the input field is empty `isEmpty(value)`, contains a specific character
 `hasCharacter(value, char)` and so on.

 All functions return booleans (true or false).

 Example: `numberValidation.isDecimal(value)` will return true or false depending on the value argument.

 ## Validation function usage
 In order to demonstrate functions in action. The React.JS framework was chosen to implement the functions on input fields.
 Their implementation can be seen inside src/App.js file.


## Legend
 - Git: version-control system for tracking changes in source code during software development.
 - Node: an open-source JavaScript runtime environment that executes JavaScript code outside of a browser.
 - npm: package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. 