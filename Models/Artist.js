const mongoose = require('mongoose');
const ArtistSchema = new mongoose. Schema ({
name: { type: String, required: true, unique: true },
genre: { type: String, enum: ['Pop', 'Rock', 'Hip-Hop'], required: true },
bio: { type: String },
},
{ type: String },
{ timestamps: true });
module.exports = mongoose.model('Artist', ArtistSchema);
