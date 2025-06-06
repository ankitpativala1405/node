const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const PrescriptionSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
    medication: { type: String },
    dosage: { type: String },
    instructions: { type: String },
    dateIssued: { type: Date },
    ...baseNode
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
