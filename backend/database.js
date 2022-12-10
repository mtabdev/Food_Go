require('dotenv').config();


const mongoose = require('mongoose');
const mongourl=process.env.MONGOURL
const connectiontomongo=async()=>{
    await mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true},async(err,res)=>{
        if(err){
                console.log("--- error in connecting to database");
        }
        else{
        //console.log("Connected to database");
        const fetchedData = await mongoose.connection.db.collection("food_items");
        fetchedData.find({}).toArray(async function (err, data){

            const fetchedCategoryData = await mongoose.connection.db.collection("food_category");
            fetchedCategoryData.find({}).toArray(function (err,categoryData){
                if(err){
                   // console.log(err);
                }

                else{
                   // console.log("data has come");
                    global.food_items=data
                    global.food_category_data=categoryData
                }
            })

                 
               
        })


        }
    });
}
 module.exports=connectiontomongo;