import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
  console.log("Allowed, you may continue.");
};

const handleHome = (req, res) => {
  return res.send("I love middleware");
};

app.use(logger);
app.use(privateMiddleware);

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);

// const handleAbout = (req, res) => {
//   return res.send("<h2>I'm from korea.</h2>");
// };
// const handleContact = (req, res) => {
//   return res.send("<h3>My hobby is going to gym and codding.</h3>");
// };

// const handleLogin = (req, res) => {
//   return res.send("</h4>I'will be front-end developer.</h4>");
// };

// app.get("/about", handleAbout);
// app.get("/contact", handleContact);
// app.get("/login", handleLogin);
