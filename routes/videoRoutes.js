const mongoose = require('mongoose');
require('../models/Video');
const Video = mongoose.model('videos');

//https://coursework.vschool.io/mongoose-crud/

module.exports = (app) => {

  app.get('/api/videos', async (req,res) =>{
    try {
      const data = await Video.find({});
      return res.status(200).send(data);
    }catch(err){
      return res.status(500).send(err);
    }
  })

  app.get('/api/videos/:id', async (req,res)=>{
    try {
      const data = await Video.findOne({_id: req.params.id})
      return res.status(200).send(data)
    } catch(err){
      return res.status(200).send(err);
    }
  })

  app.post('/api/videos', async (req,res)=>{
    try {
      const newVideo = new Video(req.body);
      const newVideoObj = await newVideo.save();
      return res.status(200).send(newVideoObj);

    }catch(err){
      return res.status(500).send(err);
    }
  })

  app.patch('/api/videos/:id', async (req,res)=>{
    try {
      const video = await Video.findByIdAndUpdate(req.params.id, req.body,{new: true});
      return res.send(video);

    }catch (err){
      return res.status(500).send(err);
    }
  })

  app.delete('/api/videos/:id', async (req,res)=>{
    try {
      const video = await Video.findByIdAndRemove(req.params.id);
      const response ={
        message: "Video was successfully deleted.",
        id: video._id
      }
      return res.status(200).send(response);

    }catch (err){
      return res.status(500).send(err);
    }
  })
}