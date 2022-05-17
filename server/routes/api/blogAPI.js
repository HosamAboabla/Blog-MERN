const express = require('express');
const router = express.Router();
const Blog = require('../../models/Blog.js');


router.get("/list", async (request,responce) => {
    try{
        const blogs = await Blog.find()
        responce.status(200).json(blogs)
    }catch(err) {
        console.log(err);
        responce.status(400).json({Message: 'there was an ERROR fetching the products', Error: err})
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

router.post("/create" , async (request,responce) => {
    try{
        const blog = await Blog.create({
            'slug' : request.body.slug,
            'title' : request.body.title,
            'description' : request.body.description,
            'thumbnail' : request.body.thumbnail,
            'tag' : request.body.tag,
            'keywords' : request.body.keywords,
            'body' : request.body.body
        })
        responce.status(200).json(blog)
    }catch(err) {
        console.log(err);
        responce.status(400).json({Message: 'there was an ERROR fetching the products', Error: err})
    }
})

router.put('/update/:id' , async (request,responce) => {
    try{
        const updated = await Blog.updateOne(
            {_id : request.params.id},
             { $set: {
                'slug' : request.body.slug,
                'title' : request.body.title,
                'description' : request.body.description,
                'thumbnail' : request.body.thumbnail,
                'keywords' : request.body.keywords,
                'body' : request.body.body
                }
        });
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the user data with ID : ${request.params.id}`,Error:err});
    }
})


router.delete('/delete/:id' , async (request,responce) => {
    try{
        const removed = await Blog.deleteOne({_id : request.params.id});
        responce.status(200).json(removed);
    }catch(err){
        responce.status(500).json({Message: "The Blog hasn't been deleted",Error: err})
    }
})


module.exports = router