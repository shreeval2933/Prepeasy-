const mongoose =require("mongoose");

const contentSchema = mongoose.Schema({
  ownerName: {
    type: String,
  },
  title: {
    type: String,
  },
  isYT: {
    type: Boolean,
  },
  isPDF: {
    type: Boolean,
  },
  link: {
    type: String,
  },
  like: {
    type: Number,
  },
  dislike: {
    type: Number,
  },
  tag: {
    type: String,
  },
  description:{
    type:String
  }
});

// export 
module.exports = mongoose.model("content",contentSchema)