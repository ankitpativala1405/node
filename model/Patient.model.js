
const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const PatientSchema = new mongoose.Schema({
    name: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String },
    contactInfo: {
        phone: { type: String },
        email: { type: String },
        address: { type: String },
    },
    ...baseNode
});

module.exports = mongoose.model('Patient', PatientSchema);
