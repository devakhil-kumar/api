const mongoose = require('mongoose');

const faqsSchema = new mongoose.Schema({
  
  question: String,
  answer: String,
  status: Number,
  created_at: { type: Date, default: Date.now },
  created_by: String,
  modified_at: { type: Date, default: Date.now },
  modified_by: String,
  
});

const Faqs = mongoose.model('faqs', faqsSchema);

module.exports = Faqs;
