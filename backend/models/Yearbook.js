const mongoose = require('mongoose');

const yearbookSchema = new mongoose.Schema({
  selectedSport: { type: String, required: true },
  selectedName: { type: String, required: true },
  description: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  photo: { type: String },
  video: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Yearbook = mongoose.model('Yearbook', yearbookSchema);

module.exports = Yearbook;
