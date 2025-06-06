const mongoose = require('mongoose');
const baseNode = require('./baseNode');

const DepartmentSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    doctorIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' }],
    staffIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Staff' }],
    ...baseNode
});

module.exports = mongoose.model('Department', DepartmentSchema);
