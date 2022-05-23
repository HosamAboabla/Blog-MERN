const express = require('express');
const Blog = require('../../models/Blog');
const router = express.Router();
const Comment = require('../../models/comments')
const {verify,verifyPremium} = require('../verifyToken')

// get all comments on post
router.get('/PostComments/:slug' , async (request , responce) => {
    try{
        const comments = await Comment.find({slug: request.params.slug});
        responce.status(200).json({Message: "success" , Data : comments});
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }
})


// create new comment
router.post('/PostComments/:slug' , verify , async (request , responce) => {
    try{
        const blog = await Blog.findOne({ slug : request.params.slug })
        const newComment = await Comment.create({
            user : request.user.id,
            post : blog.id,
            text : request.body.text
        })
        responce.status(200).json({Message: "success" , Data : newComment});
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }
})

// get user's comments on the post with id == postId
router.get('/UserComments/:postId',verify , async (request,responce) => {
    try{
        const comments = await Comment.find({user : request.user.id,post: request.params.postId});
        responce.status(200).json({Message: "success" , Data : comments});
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the data`,Error:err});
    }
})

router.put('/update/:commentId',verifyPremium , async (request,responce) => {
    try{
        const updated = await Comment.updateOne(
            {_id : request.params.commentId , user : request.user.id},
             { $set: {
                text: request.params.text}});
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the comment`,Error:err});
    }
})
// router.put('/incLike/:commentId',verify , async (request,responce) => {
//     try{
//         const id = request.user.id
//         const updated = await Comment.updateOne(
//             {_id :request.params.commentId,user : id},
//              { $inc: {
//                 iteraction}});
//         responce.status(201).json(updated)
//     }catch(err){
//         responce.status(500).json({Message:`There was an ERROR increasing the interaction`,Error:err});
//     }
// })

router.delete('/delete/:commentId',verifyPremium, async (request,responce) => {
    try{
        const removed = await Comment.deleteOne({_id : request.params.commentId,user: request.user.id});
        responce.status(200).json(removed);
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message: "The comment hasn't been deleted",Error: err})
    }
})


module.exports = router