const mongoose = require('mongoose');
const {Schema} = mongoose;

const videoSchema = new Schema({
  title: {type: String, default: null},
  description: {type: String, default: null},
  imgUrl: {type: String, default: null},
  url: {type: String, default: null},
  note: {type: String, default: null},
  userId: {type: String, default: null}
})

mongoose.model('videos', videoSchema )