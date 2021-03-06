# Famous People
An api of famous people whose objective is that developers can use it locally and test their front-end applications. This is the version without BD and only the GET method can be used.

## Getting Starting 🚀

_These instructions allow you to obtain a copy of the project in operation on your local machine for development and testing parameters._


### Pre requirements 📋

The first thing you should do is install nodejs, the following link will tell you how to do it: https://nodejs.org/en/download/

Then you must verify which version has been installed.
```
node -v
```
The next thing we are going to do is verify the version of the NPM package manager installed, for this using the open console we execute the following command:
```
npm -v
```
#### Execute a javascript file in the node server
Finally we will create a JavaScript file to run and test the installation of Node.js.
For this we create a file called test.js and to which we will add _the following code:_
```
console.log('Node is installed correctly!');
```
Then we position ourselves within the location where we created the test.js file and execute the following command from the console:
```
node test.js
```
If everything went well it will show us the message “Node is installed correctly!”.


## Installation 🔧

#### You must clone the project:
```
git clone https://github.com/LuisRivero021298/famous_people.git
```
#### _Within the project you must execute the following commands:_

**-1** The first command will create a folder called node_modules (all the modules we are going to use are stored) and we will install express and morgan.
_You can read more about express in the following link: https://expressjs.com/guide/routing.html_
```
npm i express morgan --save
```
**-2** Then you must install nodemon (this module restarts the server for us and the changes will be shown without the need to close and open the server)
```
npm i nodemon -D
```
**-3** To prove that the server works correctly, we will execute the following command in the console:
```
npm run dev
```
You should display the following message on the console: *"server on port 3000"*

#### Congratulations, you already have the api running on your machine!

## Routes ⌨️

Place the following route in the browser to get all the famous people
```
localhost:3000/api/famous_people
```
#### route variations
**last**
_Place the limit number of famous people you want to get:_
```
localhost:3000/api/famous_people/10
```
**By sex**
Options: male | female
```
localhost:3000/api/famous_people/sex/female
```
**By profession** 
Options: actors | athletes | singers | scientists | businessmen
```
localhost:3000/api/famous_people/profession/actors
```
**By name**
_Famous person finder by name, place the name (in upper and lower case) or any letter containing the name and return all that match._
```
localhost:3000/api/famous_people/name/C
```
_returns all famous people in their names that contain uppercase C._

## Built with 🛠️

* [Express](https://expressjs.com/es/) - The framework used
* [npm](https://www.npmjs.com) - Dependency Manager

## Author ✒️

* **Luis Rivero** - [LuisRivero021298](https://github.com/LuisRivero021298)
