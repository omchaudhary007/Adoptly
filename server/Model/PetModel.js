const mongoose = require('mongoose')
const schema = mongoose.Schema;

const PetSchema = new schema({
    name: {
        type: String,
        required: [true,'pet name is required']
    },
    age: {
        type: String,
        required: [true,'pet age is required']
    },
    area: {
        type: String,
        required: [true,'pet area is required']
    },
    justification: {
        type: String,
        required: [true,'Please provide justification']
    },
    email: {
        type: String,
        required: [true,'Email is required']
    },
    phone: {
        type: String,
        required: [true,'Phone is required']
    },
    type: {
        type: String,
        required: [true,'Please provide pet type.']
    },
    filename: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum:['Pending','Approved','Adopted'],
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Pet', PetSchema);