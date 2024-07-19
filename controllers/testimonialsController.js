const Testimonial = require('../models/testimonials');

const getTestimonials = async (req, res) => {
  try {
    const testimonialsData = await Testimonial.find();
    // console.log(testimonialsData);
    res.json(testimonialsData);
  } catch (err) {
    console.error('Error fetching testimonials:', err.message);
    if (!res.headersSent) {
      res.status(500).send('Server Error');
    }
  }
};

module.exports = {
  getTestimonials
};
