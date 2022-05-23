const router = require('express').Router();


const blogRoutes = require('./blogAPI');
const userRoutes = require('./userAPI');
const topicRoutes = require('./topicAPI');
const authRoutes = require('./auth');
const commentRoutes = require('./commentAPI')

router.use('/comments', commentRoutes)
router.use('/users' , userRoutes);
router.use('/blogs' , blogRoutes);
router.use('/topics' , topicRoutes);
router.use('/auth' , authRoutes);



module.exports = router;