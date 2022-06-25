const express = require("express");
const app = express();
// const helmet = require("helmet");
// const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


const port = process.env.port || 3002;

require("./db/connect");

//middleware
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.get( "/", async(req, res) => {


  res.send("Hello world");




})




app.listen(port, () => {
  
  console.log("Backend server is running!");
});