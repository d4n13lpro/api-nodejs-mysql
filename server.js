// Importa los módulos necesarios
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const routes = require("./routes");

// Carga las variables de entorno
dotenv.config();

// Crea una aplicación Express
const app = express();

// Establece el puerto del servidor
app.set("port", process.env.PORT || 9000);

// Configura las opciones de la base de datos
const dbOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

let connection;
try {
  // Crea una conexión a la base de datos
  connection = mysql.createConnection(dbOptions);

  // Conecta a la base de datos
  connection.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log("Conexión exitosa a la base de datos!");
    }
  });
} catch (err) {
  console.error("Error al establecer la conexión a la base de datos:", err);
}

// Usa el middleware para parsear el cuerpo de la solicitud en formato JSON
app.use(express.json());

// Usa la conexión en la aplicación
app.use((req, res, next) => {
  req.db = connection;
  next();
});

// Ruta GET para la raíz
app.get("/", (req, res) => {
  res.send("Bienvenido a mi API");
});

// Monta las rutas
app.use("/api", routes);

// Inicia el servidor
app.listen(app.get("port"), () => {
  console.log("server corriendo en el puerto ", app.get("port"));
});

