const mongoose = require ("mongoose");

exports.connectDB = () => {
    mongoose
    .connect(
        "mongodb+srv://gargbharti20000:8295536029@cluster0.dnb7qh6.mongodb.net/Olearning"
    )
    .then(() => console.log ("database connected successfully!"))
    .catch((error) => {
        console.log  ("database connection failed!");
        console.log (error);
        process. exit(1);

 });

};



