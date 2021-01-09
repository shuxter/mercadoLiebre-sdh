const express = require("express");
const app = express();

const path = require("path");
const PORT = 3030;

//Middleware
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//Routes
app.listen(PORT, () => {
	console.log(`The server is running on ${PORT}`);
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
