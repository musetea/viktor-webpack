const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
	const pathToHtmlFile = path.resolve(__dirname, "../dist/hello.html");
	fs.readFile(pathToHtmlFile, "utf-8", (err, file) => {
		res.send(file);
	});
});

app.get("/kiwi", (req, res) => {
	const pathToHtmlFile = path.resolve(__dirname, "../dist/kiwi.html");
	fs.readFile(pathToHtmlFile, "utf-8", (err, file) => {
		res.send(file);
	});
});

app.listen(9001, () => {
	console.log("servier is running on port 9001");
});
