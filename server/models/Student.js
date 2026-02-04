const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itNumber: {
        type: String,
        required: true,
        unique: true // එකම IT Number එක දෙපාරක් දෙන්න බැහැ
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roomNumber: {
        type: String,
        default: null // මුලින් කාමරයක් නැහැ, පස්සේ Warden දෙනවා
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;