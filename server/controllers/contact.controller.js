const Contact = require("../models/contact.models");

module.exports = {

    create: function (req, res) {
        Contact.create(req.body)
        .then((newContact) =>{
            res.json(newContact);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    },
    getAll(req, res){
        Contact.find()
        .then((allContact) => {
            res.json(allContact);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    }
}