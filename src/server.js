import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("combined");

const home = (req, res) => {
  res.send("I will respond");
  console.log("Hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅Sever listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
