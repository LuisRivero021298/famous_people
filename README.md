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
git clone ...
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

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.
