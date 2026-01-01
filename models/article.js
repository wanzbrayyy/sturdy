const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, default: 'default.jpg' },
    author: { type: String, default: 'Admin' },
    category: { type: String, default: 'Umum' },
    views: { type: Number, default: 1000 },
    publishedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', articleSchema);