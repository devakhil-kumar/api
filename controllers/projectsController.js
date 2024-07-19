const Project = require('../models/projects');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getProjects
};
