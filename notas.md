# ApiGateway

## Package.json
Creamos `package.json`, la configuracion inicial de nuestro proyecti

## Creamo el proyecto
Con el comando `npm install`, creamos nuestro proyecto de JS

## Index
Creamos la carpeta y dentro creamos nuestro index en `src/index.js`

## dataDef
Definimos los tipos de los objetos con los que vamos a trabajar
para ello creamos la carpeta `typeDefs` dentro de `src/`

## dataSource
Creamos la conexión a nuestro backend
para ello creamos la carpeta `dataSources` dentro de `src/`

Dentro de `src/` creamos un archivo llamado `server.js` donde guardaremos nuestras url`s

## resolvers
Implementamos los querys y mutations en los resolvers para que el front acceda a ellos  
para ello creamos la carpeta `resolvers` dentro de `src/`

Tambien creamos `index.js` dentro de `src/resolvers`, aqui vamos a manejar todos los resolvers

### index
Con esto convertimos las carpetas en paquetes

## Servidor
Realizamos la config dentro de `src/index.js`

Corremos el server con `node src/index.js`