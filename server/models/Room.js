const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    capacity: {
        type: Number,
        default: 4 // එක කාමරයක උපරිම 4යි
    },
    currentOccupants: {
        type: Number,
        default: 0 // මුලින් කවුරුත් නෑ
    },
    students: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student' 
    }] // කාමරේ ඉන්න ළමයින්ගේ ලිස්ට් එක
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;