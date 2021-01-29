const express = require("express");
const app = express();

const path = require("path");
const MYPORT = 3030;

//Middleware
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//Routes
app.listen(process.env.PORT || MYPORT, () => {
	console.log(`The server is running on ${MYPORT}`);
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.post("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.post("/register", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.post("/login", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
