const express = require("express");
const router = express.Router();
const user = require("../Model/UserSchema");

router.get("/",async(req,res)=>{
    try{
        const user1 = await user.find()
        res.json(user1)
    }catch(err){
        res.send(err)
    }
})

router.get("/username/:username",async(req,res)=>{
    try{
        const username = req.params.username
        const username1 = await user.find({username:username},"-password")
        res.json(username1[0])
    }
    catch(err){
        console.log(err)
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const getUserId=await user.findById(req.params.id)
        res.json(getUserId)
    } catch (error) {
        res.send(error)
    }
})


router.post("/",async(req,res)=>{
    try{
        let user3=new user(req.body)
        const newUser=await user3.save()
        res.json(newUser)
    }catch(error){
        res.send('signup failed'+error)
        console.log(error)
    }
})

router.put("/:id",async(req,res)=>{
    try {
        const getUserId=await user.findByIdAndUpdate(req.params.id,req.body)
        res.json(getUserId)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id",async(req,res)=>{
    try {
        const getUserId=await user.findByIdAndDelete(req.params.id)
        res.json(getUserId)
    } catch (error) {
        res.send(error)
    }
})

router.post("/login",async(req,res)=>{
    try{
        const { username, password } = req.body;
        const User = await user.findOne({ username });
        if (!User) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
        if (password !== User.password) {
          return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    }catch(err){    
        res.status(404).send("user not found")
    } 
})

module.exports = router