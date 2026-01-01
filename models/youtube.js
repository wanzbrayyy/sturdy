
const mongoose = require('mongoose');

const youtubeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    videoId: { type: String, required: true }, 
    order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Youtube', youtubeSchema);