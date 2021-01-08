const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

let port = 3030;

app.listen(3030, () => {
	console.log(`The server is running on ${port}`);
});
