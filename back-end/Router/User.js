const express = require("express");
const router = express.Router();
const user = require("../Model/UserSchema");
const bcrypt = require("bcrypt");
const crypto = require('crypto');
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();
const saltRounds = 10;

router.get("/",async(req,res)=>{
    try{
        const user1 = await user.find().select("-password");
        res.json(user1)
    }catch(err){
        res.send(err)
    }
})

router.post("/",async(req,res)=>{
    try{
        let user3=new user(req.body)
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        user3["password"]=hashedPassword
        const newUser=await user3.save()
        res.json(newUser)
    }catch(error){
        res.status(500).send('Signup failed: ' + error);
        console.log(error)
    }
})

// LOGIN ROUTE

router.get("/random", async (req, res) => {
    try {
      const secret = crypto.randomBytes(64).toString('hex');
      res.send(secret);
    } catch (error) {
      res.status(404).send({ Message: "Error while getting random key" });
    }
  });

function generateAccessToken(username) {
    const token = jwt.sign({ username }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
  }

router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const loginUser = await user.findOne({ username });
      if (!loginUser) {
        return res.status(404).json({ Message: "User not found" });
      }
      const passwordMatch = await bcrypt.compare(password, loginUser.password); 
      if (!passwordMatch) {
        return res.status(401).json({ Message: "Invalid Password" });
      }
      const token = generateAccessToken(username)
      res.status(200).json({ message: "Login successful",token});  
    } catch (error) {
      res.status(500).send({ message: "An error occurred while login", error: error.message });
      console.log(error);
    }
  });

module.exports = router