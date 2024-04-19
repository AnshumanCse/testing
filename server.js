import express from "express";
import dotenv from "dotenv"

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send( "<h1>Hellow this is node js Deployed successfully</h1>"
  );
});
app.get("/testing", (req, res) => {
  res.send( "<h1>Server on testing mode</h1>"
  );
});
const PORT = process.env.PORT ;
app.listen(PORT, (req, res) => {
  console.log(`app running on ${PORT} successfully:`);
});
