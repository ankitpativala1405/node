const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const AppointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  appointmentDate: { type: Date },
  reason: { type: String },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  ...baseNode
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
