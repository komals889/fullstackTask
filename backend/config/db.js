const mongoose=require("mongoose")

 const db=async()=>{
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo connected");
        
    } catch (error) {
        console.log(`something wrong ${error}`);
        process.exit()
    }
}

module.exports =db