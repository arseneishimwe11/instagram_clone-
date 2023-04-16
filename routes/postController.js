const express = require ("express")
const router = express.Router();
const mongoose = require('mongoose')
const Post = require('../models/postSchema')
const Middleware = require('../middleware/checkLogging')

router.post('/createpost',Middleware,async(req,res)=>{
    try {
        const {title ,body } = req.body
        if(!title || !body){
            res.status(422).send({error:"Fill in all the fields!"})
        }
        console.log(req.user);
        const newPost = new Post({
            title,
            body,
            postedBy:req.user
        })
        await newPost.save()
        .then(result=>{
            res.json({newPost:result})
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/allpost',async(req,res)=>{
    try {
        const allposts = await Post.find().populate("postedBy","_id name")
        res.status(200).json(allposts)
    } catch (error) {
        console.log(error)
        res.status(404).json({error:"Can't retrive all posts"});
    }
})

router.get('/mypost',async(req,res)=>{
    try {
        const myposts = await Post.find({postedBy:req.user._id}).populate("postedBy","_id name")
        res.status(200).json(myposts)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Can't find your posts"})
    }
})


module.exports = router