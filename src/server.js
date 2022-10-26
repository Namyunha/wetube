import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
  console.log("PATH", req.path);
  next();
};
const methodLogger = (req, res, next) => {
  console.log("METHOD", req.method);
  next();
};
const home = (req, res) => {
  console.log("I will respond");
  return res.send("<h1>Hello!</h1>");
};

const login = (req, res) => {
  return res.send("login here");
};

app.use(routerLogger, methodLogger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
