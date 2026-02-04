const mongoose = require('mongoose');
const UserSchema = new mongoose. Schema ({
username: { type: String, required: true, unique: true },
email:{ type: String, required: true, unique: true },
password: { type: String}, // In production, hash this
likedSongs:[{ type: mongoose.Schema. Types.ObjectId, ref: 'Song' }]
}, { timestamps: true });
module.exports = mongoose.model('User', UserSchema);
