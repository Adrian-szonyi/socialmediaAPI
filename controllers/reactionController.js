const { Reaction } = require('../models');

module.exports = {
  // create a new Friend
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => res.json(reaction))
      .catch((err) => res.status(500).json(err));
  },

  deleteFriend(req, res) {
    Reaction.findOneAndRemove({ _id: req.params.reactionId })
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: 'No reaction with this id!' })
          : Reaction.findOneAndUpdate(
              { users: req.params.reactionId },
              { $pull: { thoughts: req.params.reactionId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'no user with this id!',
            })
          : res.json({ message: 'reaction successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
};
