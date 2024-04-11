import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
  try {
    var uri =`mongodb://${process.env.DB_USERNAMR}:${process.env.DB_PASSWORD}@ac-01z6f0b-shard-00-00.t4kjh9q.mongodb.net:27017,ac-01z6f0b-shard-00-01.t4kjh9q.mongodb.net:27017,ac-01z6f0b-shard-00-02.t4kjh9q.mongodb.net:27017/?ssl=true&replicaSet=atlas-62k0zz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
    mongoose.connect(uri, { useNewUrlParser:true });
    console.log('Database Connected Sucessfully');
  } catch (error) {
    console.log("Error Occutred while connecting Database ",error.message);
  }
}; 

export default Connection;












// import mongoose from "mongoose";

// const Connection = async () => {
//   try {
//     var uri = `mongodb://user:aniruddhasonawane@ac-01z6f0b-shard-00-00.t4kjh9q.mongodb.net:27017,ac-01z6f0b-shard-00-01.t4kjh9q.mongodb.net:27017,ac-01z6f0b-shard-00-02.t4kjh9q.mongodb.net:27017/?ssl=true&replicaSet=atlas-62k0zz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
//     await mongoose.connect(uri, { useNewUrlParser:true });
//     console.log('Database Connected Successfully');
//   } catch (error) {
//     console.log("Error Occurred while connecting to the database:",  error.message);
//   }
// };

// export default Connection;
