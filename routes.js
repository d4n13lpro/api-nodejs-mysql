const express = require("express");
const routes = express.Router();

// Obtener todos los libros
routes.get("/", (req, res) => {
  try {
    req.db.query("SELECT * FROM books", (err, rows) => {
      if (err) {
        throw err;
      } else {
        res.json(rows);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los libros", error: error.message });
  }
});

// Obtener un libro por su ID
routes.get("/:id", (req, res) => {
  try {
    const id = req.params.id;
    req.db.query("SELECT * FROM books WHERE id = ?", [id], (err, rows) => {
      if (err) {
        throw err;
      } else {
        if (rows.length === 0) {
          res.status(404).json({ message: "Libro no encontrado" });
        } else {
          res.json(rows[0]);
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el libro", error: error.message });
  }
});

// Crear un nuevo libro
routes.post("/", (req, res) => {
  try {
    const { titulo, autor, edicion } = req.body;
    req.db.query("INSERT INTO books (titulo, autor, edicion) VALUES (?, ?, ?)", [titulo, autor, edicion], (err, result) => {
      if (err) {
        throw err;
      } else {
        res.json({ message: "Libro creado correctamente", id: result.insertId });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el libro", error: error.message });
  }
});

// Actualizar un libro por su ID
routes.put("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const { titulo, autor, edicion } = req.body;
    req.db.query("UPDATE books SET titulo = ?, autor = ?, edicion = ? WHERE id = ?", [titulo, autor, edicion, id], (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Libro no encontrado" });
        } else {
          res.json({ message: "Libro modificado correctamente" });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al modificar el libro", error: error.message });
  }
});

// Eliminar un libro por su ID
routes.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    req.db.query("DELETE FROM books WHERE id = ?", [id], (err, result) => {
      if (err) {
        throw err;
      } else {
        if (result.affectedRows === 0) {
          res.status(404).json({ message: "Libro no encontrado" });
        } else {
          res.json({ message: "Libro eliminado correctamente" });
        }
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el libro", error: error.message });
  }
});

module.exports = routes;
