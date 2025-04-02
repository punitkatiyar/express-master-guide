import mongoose from "mongoose"

export const connectDB=()=>{
  mongoose.connect('mongodb://127.0.0.1:27017/database-nane')
  .then(()=>console.log("Database Connected"))
}
