const express = require('express');
const router = express.Router();
const Comment = require('../../models/comments')
const {verify,verifyAndAuthorization,verifyAndAdmin} = require('../verifyToken')

// get all comments on the post with id == postId
router.get('/list/:postId',verify , async (request , responce) => {
    try{
        const comments = await Comment.find({post: request.params.postId});
        responce.status(200).json({Message: "success" , Data : comments});
    }
    catch(err){
        responce.status(500).json({Message:'There was an ERROR fetching the data',Error:err});
    }
})

// get user's comments on the post with id == postId
router.get('/list/:postId',verify , async (request,responce) => {
    try{
        const comments = await Comment.find({user : request.user.id,post: request.params.postId});
        responce.status(200).json({Message: "success" , Data : comments});
    }
    catch(err){
        responce.status(500).json({Message:`There was an ERROR fetching the data`,Error:err});
    }
})

router.put('/update/:commentId',verify , async (request,responce) => {
    try{
        const id = request.user.id
        const updated = await Comment.updateOne(
            {_id : request.params.commentId , user : id},
             { $set: {
                text: request.params.text}});
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR Updating the comment`,Error:err});
    }
})
router.put('/incLike/:commentId',verify , async (request,responce) => {
    try{
        const id = request.user.id
        const updated = await Comment.updateOne(
            {_id :request.params.commentId,user : id},
             { $inc: {
                iteraction}});
        responce.status(201).json(updated)
    }catch(err){
        responce.status(500).json({Message:`There was an ERROR increasing the interaction`,Error:err});
    }
})

router.delete('/delete/:commentId',verifyAndAuthorization, async (request,responce) => {
    try{
        const id = request.user.id
        const removed = await Comment.deleteOne({_id : request.params.commentId,user: id});
        responce.status(200).json(removed);
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message: "The comment hasn't been deleted",Error: err})
    }
})


module.exports = router