

const faq = require('../models/faqs.js');

const getFaqs = async (req, res) => {
  try 
  {
    const faqsData = await faq.find();
    console.log(faqsData);
    res.json(faqsData);
  } 
  catch (err)
   {
    console.error('Error fetching Faq:', err.message);
    if (!res.headersSent) 
    {
      res.status(500).send('Server Error');
    }
  }
};

module.exports = {
  getFaqs
};
