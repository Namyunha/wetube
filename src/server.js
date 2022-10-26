import express from "express";

const PORT = 4000;

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.path}`);
  next();
};

const timeLogger = (req, res, next) => {
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  console.log(`Time: ${year}.${month}.${date}`);
  next();
};

const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("secure");
  } else {
    console.log("insecure");
  }
  next();
};

const yunhaInfo = (req, res) => {
  res.send("Hello my name is yunha");
  console.log("I did it!");
};

const protectorMiddleware = (req, res) => {
  res.sendStatus(404);
};

app.use(urlLogger, timeLogger, securityLogger);
app.get("/", yunhaInfo);
app.get("/protected", protectorMiddleware);
// const routerLogger = (req, res, next) => {
//   console.log("PATH", req.path);
//   next();
// };
// const methodLogger = (req, res, next) => {
//   console.log("METHOD", req.method);
//   next();
// };
// const home = (req, res) => {
//   console.log("I will respond");
//   return res.send("<h1>Hello!</h1>");
// };

// const login = (req, res) => {
//   return res.send("login here");
// };

// app.use(routerLogger, methodLogger);
// app.get("/", home);
// app.get("/login", login);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
