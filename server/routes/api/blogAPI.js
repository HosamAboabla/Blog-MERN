const express = require('express');
const router = express.Router();
const Blog = require('../../models/Blog.js');
const {verify,verifyBasic,verifyPremium,verifyAndAdmin} = require('../verifyToken')


// any one can see the posts
router.get("/list", async (request,responce) => {
    try{
        const blogs = await Blog.find()
        responce.status(200).json(blogs)
    }catch(err) {
        console.log(err);
        responce.status(400).json({Message: 'there was an ERROR fetching the posts', Error: err})
    }
});


router.get('/list/:slug' , async (request,responce) => {
    try{
        const blog = await Blog.findOne({ slug: request.params.slug });
        responce.status(200).json(blog);
    }
    catch(err){
        responce.status(400).json({Message:`There was an ERROR fetching the product data with ID :${request.params.id}`,Error:err});
    }
})

router.post("/create" ,verifyPremium, async (request,responce) => {
    try{
        const blog = await Blog.create({
            slug : request.body.slug,
            title : request.body.title,
            description : request.body.description,
            thumbnail : request.body.thumbnail,
            tag : request.body.tag,
            keywords : request.body.keywords,
            body : request.body.body,
            likes:request.body.likes,
        })
        responce.status(200).json(blog)
    }catch(err) {
        console.log(err);
        responce.status(400).json({Message: 'there was an ERROR fetching the products', Error: err})
    }
})

router.put('/update/:id' ,verifyPremium, async (request,responce) => {
    try{
        const updated = await Blog.updateOne(
            {_id : request.params.id,user: request.user.id},
             { $set: {
                slug : request.body.slug,
                title : request.body.title,
                description : request.body.description,
                thumbnail : request.body.thumbnail,
                keywords : request.body.keywords,
                body : request.body.body
                }
        });
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the user data with ID : ${request.params.id}`,Error:err});
    }
})


router.delete('/delete/:id',verifyPremium , async (request,responce) => {
    try{
        if(request.user.isAdmin){
            const removed = await Blog.deleteOne({_id : request.params.id});
        }else{
            const removed = await Blog.deleteOne({_id : request.params.id,user : request.user.id});
        }
        responce.status(200).json({Message: "The Post has been deleted", removed});
    }catch(err){
        responce.status(500).json({Message: "The Post hasn't been deleted",Error: err})
    }
})

//api for count blogs(for Admin)
//api for post with most interactions 
//('/api/blogs/count')
router.get('/count' , async (request , responce) => {
    try{
        const count = await Blog.collection.count();
        responce.status(200).json(count);
    }
    catch(err){
        responce.status(500).json({Message:`Error: ${err}`});
    }
})


//api for most likes blog(for Admin)
//api for post with most interactions 
//('/api/blogs/mostlikes')
router.get('/mostlikes' , async (request , responce) => {
    try{
        const mostLikesPost = await Blog.findOne().sort({"likes":-1});
        responce.status(200).json(mostLikesPost);
    }
    catch(err){
        responce.status(500).json({Message:`Error: ${err}`});
    }
})

module.exports = router