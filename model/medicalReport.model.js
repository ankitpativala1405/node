const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const MedicalRecordSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    diagnosis: { type: String },
    treatments: { type: String },
    notes: { type: String },
    date: { type: Date },
    ...baseNode
});

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
