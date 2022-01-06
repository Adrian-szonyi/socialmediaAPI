const router = require('express').Router();
const {
  createFriend,
  deleteFriend,
} = require('../../controllers/friendController');

router.route('/users/:userID/friends/:friendId').post(createFriend).delete(deleteFriend);

module.exports = router;