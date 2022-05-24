const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: [true, 'Please enter the user name'],
            unique: true,
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email']
        },
        firstName: {
            type: String,
            requied: [true, 'Please enter the first name']
        },
        lastName: {
            type: String,
            requied: [true, "Please enter the last name"]
        },
        phoneNumber: {
            type: String,
            requied: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        password: {
            type: String,
            required: [true, 'Please enter a valid password'],
            minlength: [6, 'Minimum password length must be 6 characters']
        },
        plan : {type: String,
            enum : ['Basic','Premium'],
            default: "Basic"
        },
        profile : {
            type : String,
            default: "https://pngset.com/images/person-placeholder-image-free-stencil-balloon-electronics-text-transparent-png-1450459.png"
        }
    },
    { timestamps: true }
);
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user', userSchema);