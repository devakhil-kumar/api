const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  author: String,
  content: String,
  position: String,
  status: Number,
  created_at: { type: Date, default: Date.now },
  created_by: String,
  modified_at: { type: Date, default: Date.now },
  modified_by: String,
  image: String
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
