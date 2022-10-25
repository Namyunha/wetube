import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("<h1>Hello my name is Yunha.</h1>");
};
const handleAbout = (req, res) => {
  return res.send("<h2>I'm from korea.</h2>");
};
const handleContact = (req, res) => {
  return res.send("<h3>My hobby is going to gym and codding.</h3>");
};

const handleLogin = (req, res) => {
  return res.send("</h4>I'will be front-end developer.</h4>");
};

app.get("/", handleHome);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
