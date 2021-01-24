const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = Organization = mongoose.model('organization', OrganizationSchema);