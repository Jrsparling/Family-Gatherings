const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const familyRoutes = require('./familyRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/family', familyRoutes);

module.exports = router;
