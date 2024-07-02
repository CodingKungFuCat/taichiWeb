import express from "express";
import morgan from "morgan";

const app = express();
const port = 6707;
const logger = morgan("dev");

// views 디렉토리와 pug 설정
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(logger);
console.log(logger);

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
