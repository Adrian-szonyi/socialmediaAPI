const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const friendRoutes = require('./friendRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/friends', friendRoutes)
router.use('/reactions', reactionRoutes)

module.exports = router;
