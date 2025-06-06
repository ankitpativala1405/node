const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const StaffSchema = new mongoose.Schema({
    name: { type: String },
    role: { type: String },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
    contactInfo: {
        phone: { type: String },
        email: { type: String },
        address: { type: String }
    },
    ...baseNode
});

module.exports = mongoose.model('Staff', StaffSchema);
