const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const DoctorSchema = new mongoose.Schema({
    name: { type: String },
    specialty: { type: String },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    appointmentIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
    prescriptionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prescription' }],
    ...baseNode
});

module.exports = mongoose.model('Doctor', DoctorSchema);
