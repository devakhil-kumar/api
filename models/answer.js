const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
  answers: { type: Map, of: String, required: true }, // Store answers as a map
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('answers', answerSchema);
