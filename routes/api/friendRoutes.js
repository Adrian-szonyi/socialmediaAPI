const router = require('express').Router();
const {
  createFriend,
  deleteFriend,
} = require('../../controllers/friendController');

router.route('/users/:userId/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;