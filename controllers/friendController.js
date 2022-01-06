const { User } = require('../models');

module.exports = {
  // create a new Friend
  createFriend(req, res) {
    User.create(req.body)
      .then((friend) => res.json(friend))
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No friend with this id!' })
          : User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { thoughts: req.params.userId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'no user with this id!',
            })
          : res.json({ message: 'Friend successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
