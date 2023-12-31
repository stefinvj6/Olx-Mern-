const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 7777;
const dotenv = require("dotenv") 

dotenv.config()

main().then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log(err)
});
async function main(){
    await mongoose.connect(process.env.DB)
}

app.use(express.json())
app.use(cors())

const User = require("./Router/User")
app.use("/user",User)

const Product = require("./Router/Product")
app.use("/product",Product)

const Cart = require("./Router/Cart")
app.use("/cart",Cart)

const Review = require("./Router/Review")
app.use('/review',Review)


app.listen(port,()=>{
    console.log(`app is listen on : ${port}`)
})