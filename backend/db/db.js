const {mongoose,Schema,model} = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async(req,res)=>{
    try {
        console.log(process.env.MONGODB_URI);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } 
    catch (error) {
        res.status(500).json({message: "MongoDB connection failed"});
        console.log(`Error: ${error.message}`);
    }
}

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }

})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'USERS',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const userModel = model("USERS",usersSchema);


module.exports = {connectDB,userModel,Account};