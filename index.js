/*
    Funny/Surprise - A PingwinCo App!
*/

import path from "path";
import express from "express";
const app = express();

app.set("views", "./src");
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", { doctype: "html" });
});

app.use(express.static(path.join(process.cwd(), "/src")));

app.listen(process.env.PORT || 3000);