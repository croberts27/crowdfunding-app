const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const profileRoutes = require ('./profile-routes.js');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use ('/profiles', profileRoutes);

module.exports = router;
