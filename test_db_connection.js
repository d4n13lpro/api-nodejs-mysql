const mysql = require("mysql");

// Opciones de conexión a la base de datos
const dbOptions = {
  host: 'localhost',
  port: '3306',
  user: 'tutorial',
  password: 'Crud_javascript1985*',
  database: 'library'
};

// Crear una conexión a la base de datos
const connection = mysql.createConnection(dbOptions);

// Intentar conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos!");
  }
});

// Cerrar la conexión después de unos segundos (opcional)
setTimeout(() => {
  connection.end(); // Cerrar la conexión
}, 5000); // Cerrar la conexión después de 5 segundos (puedes ajustar este valor según sea necesario)
