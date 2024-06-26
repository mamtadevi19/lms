const mongoose = require('mongoose');

const userschema = new mongoose.Schema(
    {
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      },
},
  { timestamps: true}

);
module.export = mongoose.model("user", userschema);

