const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    ts: {
        type: Date,
        required: true
    },
    machine_status: {
        type: Number,
        required: true
    },
    vibration: {
        type: Number,
        required: true
    }
});

const Data = mongoose.model('Data', dataSchema,'wathare_data');
module.exports = Data;