const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
        firstName: {
            type :String,
            required: [true, "Please give us your first name"],
            minlength: [2, "Length of name must be between 3 characters"],
        },
        lastName: {
            type :String,
            required: [true, "Please give us your last name"],
            minlength: [2, "Length of name must be between 3 characters"],
        },
        email: {
            type: String,
            required: [true, "Please input an email to contact you!"],
            minlength:[2, "Please use a proper email!"]
        },
        organization: {
            type: String,
            required: [true, "Please state who you are representing."],
            minlength: [2 , "Please give a proper organization name."]
        },
        message: { 
            type: String,
            required: [true, "Please give a description about the reason for connecting."]
        }
});
const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;