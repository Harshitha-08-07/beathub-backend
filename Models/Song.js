const mongoose = require('mongoose');
const SongSchema = new mongoose. Schema ({
title:{ type: String, required: true },
duration:{ type: Number, required: true }, // seconds
artist: { type: mongoose. Schema. Types.ObjectId, ref: 'Artist', required: true },
album:{ type: mongoose. Schema. Types. ObjectId, ref: 'Album', required: true }
}, { timestamps: true });
module.exports = mongoose.model('Song', SongSchema);
