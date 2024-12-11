const express = require("express");
const mongoose = require("mongoose");
const productData = require("./models/product");
const ProductRouter = require("./routers/productRouter");
const jwt = require("jsonwebtoken");
const userRouter = require("./routers/userRouter");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT
//req.body
app.use(express.json());
app.use(cors());
// app.post('/login',(req,res)=>{
//   //Authenticate

//   //Token creation

//   const username = req.body.username
//   const user = {name: username}
//   const secretKey = process.env.JWT_SECRET_KEY
//   const token = jwt.sign(user,secretKey)
//   res.json({accesstoken : token})
// })
app.use("/products", ProductRouter);
app.use("/users", userRouter);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

const mongourl = process.env.MONGODB_URL;

async function main() {
  await mongoose.connect(mongourl);
}

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));


app.listen(port, () => {
  console.log("server running");
});
