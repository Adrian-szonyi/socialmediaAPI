const router = require('express').Router();
const {
  createReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);
router.route('/thoughts/:thoughtId/reactions').post(createReaction)

module.exports = router;