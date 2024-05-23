const user = require("../models/user-model");



export.signup = async (req,res) =>{
   try{


    const { fullName, email, password } = req.body;

    const user = await user.create({fullName, email, password});
    
    return res
      .status(200)
      .json({ success: true, message: "user created successfully", user});
   }catch (error){
    return res.ststus(500).json({
        success: false,
        message:"user cannot be registered. Please try again",
    
    });
   }
};