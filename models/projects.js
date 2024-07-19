const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    created_by: {
        type: String,
        required: true
    },
    modified_at: {
        type: Date,
        default: Date.now
    },
    modified_by: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Project', ProjectSchema);
