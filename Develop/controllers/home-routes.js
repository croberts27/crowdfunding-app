const router = require('express').Router();
const { Project } = require('../models/Project');

// GET all projects for homepage
router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findall({
        });
        const projects = projectData.map((project) =>
        project.get({ plain: true })
        );
        res.render('homepage', {
            projects
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router