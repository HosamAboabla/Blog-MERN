const router = require('express').Router();


const blogRoutes = require('./blogAPI');
const userRoutes = require('./userAPI')
const commentRoutes = require('./commentAPI')

router.user('/comments', commentRoutes)
router.use('/users' , userRoutes)
router.use('/blogs' , blogRoutes);


module.exports = router;