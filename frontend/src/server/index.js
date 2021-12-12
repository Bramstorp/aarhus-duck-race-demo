const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

//Middleware
app.use(cors());
app.use(express.json());

//Create user
app.post("/create", async(req,res) => {
    try {
        const { username } = req.body;
        const newUser = await pool.query("INSERT INTO accounts (username, password, phone) VALUES($1, $2, $3)");
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})
//Get user
app.get("")

app.listen(5000, () => {
    console.log("Server has started.. listening on port 5000!");
})