const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const RoomSchema = new mongoose.Schema({
    roomNumber: { type: String },
    bedCount: { type: Number },
    occupiedBeds: { type: Number },
    patientIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
    ...baseNode
});

module.exports = mongoose.model('Room', RoomSchema);
