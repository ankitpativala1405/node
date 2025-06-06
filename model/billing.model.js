const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const BillingSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' },
    amount: { type: Number },
    paid: { type: Boolean },
    dateIssued: { type: Date },
    ...baseNode
});

module.exports = mongoose.model('Billing', BillingSchema);
