import mongoose from "mongoose";

mongoose.connect(process.env.USERPASSWORD)
.then((data)=>console.log('Connection has been established'))
.catch((error)=> console.log('A problem has ocurred.'));