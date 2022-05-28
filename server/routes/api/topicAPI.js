const express = require('express');
const router = express.Router();
const topic = require('../../models/topic')
const {verify,verifyPremium,verifyAndAdmin} = require('../verifyToken')

//Admin Dashboard required apis
//get all topics
//add atopic 
//edit a topic 
//delete a topic
//any api ('/api/topics/{custom}')

//get all topics, verify admin then...
//('/api/topics/list')
router.get("/list", async (request,responce) => {
    try{
        const productList = await topic.find()
        responce.status(200).json(productList)
    }catch(err) {
        responce.status(400).json({Message: `Error: ${err}`})
    }
});


//add a topic , verify admin then ...
//('/api/topics/add')
router.post("/add",verifyPremium , async (request,responce) => {
    try{
        const newTopic = new topic(
        {   name: request.body.name
        });
        await newTopic.save()
        responce.status(201).json({Message: `Added successfully`,_id:newTopic._id})
    }catch(err){
        responce.status(500).json({Message: `Error: ${err}`})
    }
})


//modify topic name , verify admin then ....
//('/api/topics/modify')
router.put('/modify/:id' ,verifyAndAdmin , async (request,responce) => {
    try{
        const updated = await topic.updateOne(
            {_id : request.params.id},
            { $set: {
                name: request.body.name,
            }});
        responce.status(201).json({Message:`Updated successfully`})
    }catch(err){
        responce.status(500).json({Message:`Error : ${err}`});
    }
})

//delete topic , verify admin then ...
//('/api/topics/delete')
router.delete('/delete/:id',verifyAndAdmin, async (request,responce) => {
    try{
        const id = request.params.id
        const removed = await topic.deleteOne({_id : id});
        responce.status(200).json({Message:`deleted successfully`});
    }catch(err){
        console.log(err.Message)
        responce.status(500).json({Message:`Error : ${err}`})
    }
})






module.exports = router;