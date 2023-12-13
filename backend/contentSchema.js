const mongoose = require("mongoose")

const ContentDetails = new mongoose.Schema(
    {
        owner: {
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
          description:{
            type:String
          }
      }
   
    );



mongoose.model("ContentDev", ContentDetails);
