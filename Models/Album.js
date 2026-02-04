const mongoose = require('mongoose');
const AlbumSchema = new mongoose. Schema({

title:{ type: String, required: true },
releaseYear: { type: Number, required: true },
artist:{ type: mongoose.Schema. Types.ObjectId, ref: 'Artist', required: true },
}, 
{ timestamps: true }); 

module.exports = mongoose.model('Album', AlbumSchema);
