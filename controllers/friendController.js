const { User } = require('../models');

module.exports = {
  // create a new Friend
  createFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      { new: true }
    )
      .then((friend) => res.json({
            message: "Created a new friend",
            user: friend,
          })).catch((err) => res.status(500).json(err)
        )
    },


  deleteFriend(req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
    .then((friend) => res.json({
        message: "Deleted a friend",
        user: friend,
      })).catch((err) => res.status(500).json(err)
    )
},
}

