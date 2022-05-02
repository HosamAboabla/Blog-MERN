const router = require('express').Router();


const blogRoutes = require('./blogAPI');

router.use('/blogs' , blogRoutes);


module.exports = router;