# talkFriends

**Información de las tecnologias usadas**
Tecnologia |  Version
-----------| ------------- 
MariaDB    | 10.4.20
npm        | 8.5.2
node       | 16.14.0

Pasos para realizar el proceso de instalación de la aplicación en el ambiente local

**Paso 1**

Clonar la aplicación talkFriends que se encuentra en el repositorio

**Paso 2**

Ingresar a la carpeta **scriptDB**. Dentro de esta carpeta se encuentran los siguientes archivos

Archivo                   | Descripcion 
------------------------- | ------------- 
talkfriendsdb-Sindatos.sql| Este archivo contiene solo la estructura de la DB
talkfriendsdb-Condatos.sql| En este archivo se encuentra la estructura y datos de la DB

Crear la base de datos con el nombre **talkfriendsdb** y ejecutar alguno de los archivos de la carpeta **scriptDB**

**Paso 3**

Desde de creada la DB, guardar las credenciales correspondientes en el archivo **backend/index.js**
```
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'talkfriendsdb'
  })
```

**Paso 4**

En la ventana de línea de comandos, ingresar a la carpeta **frontend** del proyecto y ejecutar el siguiente comando

`npm install`

**Paso 5**

En la ventana de línea de comandos, ingresar a la carpeta **backend** del proyecto y ejecutar el siguiente comando

`npm install`

**Paso 6**

En la misma de ventana de línea de comandos, dentro de la carpeta **backend** ejecutar lo siguiente

`node index.js`

_Nota: Mantener la ventana abierta para mantener el servidor activo_

**Paso 7**

En otra ventana de línea de comandos, ingresar a la carpeta **frontend** del proyecto y ejecutar lo siguiente

`npm run serve`

_Nota: Mantener la ventana abierta para mantener el servidor activo_

**Paso 8**

Ingresar a la ruta generada en el paso anterior. En este caso fue http://localhost:8080/

**Notas**

* Si se ejecuto el archivo **talkfriendsdb-Condatos.sql** para cargar la DB, se pueden usar los siguientes usuarios ya registrados

Usuario          |  Contraseña
-----------------| ------------- 
usuario1@test.com| 123456
usuario2@test.com| 123456
usuario3@test.com| 123456
usuario4@test.com| 123456
