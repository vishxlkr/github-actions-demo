import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
   return res.json({
      msg: "hello from the server vishal",
   });
});

app.listen(PORT, () => {
   console.log(`Server is running on PORT ${PORT}.`);
});
