const router = require('express').Router();


const blogRoutes = require('./blogAPI');
const userRoutes = require('./userAPI')

router.use('/users' , userRoutes)
router.use('/blogs' , blogRoutes);


module.exports = router;