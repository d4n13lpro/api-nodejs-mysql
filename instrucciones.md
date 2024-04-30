# Se instala node init -y

# Se instalan las dependencias
npm install express mysql dotenv
* **express**: Es un marco de aplicación web para Node.js que proporciona un conjunto de características robustas para desarrollar aplicaciones web y API de manera más sencilla. Con Express, puedes definir rutas, manejar solicitudes HTTP, trabajar con plantillas, y mucho más.
* **mysql**: Es un paquete npm que proporciona una interfaz para trabajar con bases de datos MySQL desde Node.js. Te permite realizar consultas SQL, conectarte a una base de datos MySQL, y manipular datos de manera programática.
* **dotenv**: Es un módulo npm que te permite cargar variables de entorno desde un archivo .env en tu entorno de desarrollo. Esto es útil para almacenar información sensible, como credenciales de bases de datos, sin exponerlas directamente en tu código fuente.


# se instala modulo nodemon para reiniciar el servidor automaticamente
  npm i nodemon --save-dev

# se modifica el script de package.json
  "start":"nodemon server.js"
  
# se modifica el main de package.json
  "main": "server.js"

# se crea el archivo server.js
  Este es el archivo principal de tu aplicación Node.js. Configura el servidor Express, la conexión a la base de datos y define el comportamiento de la aplicación.

# test_db_connection.js: Un archivo que prueba la conexión a la base de datos utilizando las credenciales y opciones de conexión proporcionadas en el código.

# routes.js: Este archivo contiene las rutas de tu aplicación Express, incluidas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para la entidad "books" en tu base de datos.

# instrucciones.md: Un archivo Markdown que puede contener instrucciones, documentación o información sobre cómo usar tu proyecto.

# request.http: Un archivo utilizado para realizar solicitudes HTTP de prueba, probablemente utilizando una extensión de cliente REST en un entorno de desarrollo.

# package-lock.json: Este archivo se genera automáticamente para mantener un registro de las versiones exactas de todas las dependencias instaladas en tu proyecto, junto con sus subdependencias.
# package.json: Este archivo contiene metadatos sobre tu proyecto, incluidas las dependencias necesarias para ejecutarlo y los scripts de comandos que puedes ejecutar.

