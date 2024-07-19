const User = require('../models/user.js');

const getUsers = async (req, res) => {
  try 
  {
    const users = await User.find();
    // console.log('Users fetched:', users); // Add logging
    console.log(users)
    res.json(users); // Send the users as JSON
  } 
  catch (err) 
  {
    console.error('Error fetching users:', err.message);
    if (!res.headersSent) {
      res.status(500).send('Server Error');
      console.log('Error response sent');
    }
  }
};

module.exports = {
  getUsers
};
