const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const UserDetails = new mongoose.Schema(
    {
        username: {
          type: String,
        },
        email: {
          type: String,
        },
        password: {
          type: String,
        },
        contentLikes: {
          type: Number,
        },
        contentDislikes: {
          type: Number,
        },
        lastMonthEarning: {
          type: Number,
        },
        thisMonthEarning: {
          type: Number,
        },
      }
   
    );



UserDetails.pre('save', async function(next) {
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password, 12)
        console.log("function called")
    }
    next()
})


mongoose.model("UserDev", UserDetails);
