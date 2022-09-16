const express = require("express"); //Server oluşturmak için express.js kullanılıyor
const app = express(); // server bu. ismide app
const cors = require("cors");
const pool = require("./db");

//MIDDLEWARE
app.use(cors());
// cors middleware olarak kullanılıyor.
// Böylece 5000 port ile 3000 port app'lerimiz birbiri ile interact edecekler.
app.use(express.json()); // "req.body" verisine ulaşmamızı sağlayan middleware

//ROUTES

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows); // allTodos.rows ile sadece row ları alırız.
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo); // todos.rows[0] ile sadece dönen ilk sonucu alırız.
  } catch (error) {
    console.error(error.message);
  }
});
//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description] // RETURNING *  ile veri döner
    );
    //res.json(req.body);
    res.json(newTodo); //newTodo.rows[0] ile sadece eklediğimiz veriyi alırız.
  } catch (err) {
    console.error(err.message);
  }
});

//update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description =$1 WHERE todo_id = $2",
      [description, id]
    );
    res.json(updateTodo);
  } catch (error) {
    console.error(error.message);
  }
});
//delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",[id]
        );
        //TODO
        res.json(deleteTodo) // buraya kayıt silindi gibi bir sonuç döndür
    } catch (error) {
        console.error(error.message);
    }
})

app.listen(5000, () => {
  console.log("Server is starting on port http://localhost:5000");
});
