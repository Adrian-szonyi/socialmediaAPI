const { Reaction } = require('../models');
const { Thought } = require('../models')

module.exports = {
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => res.json(reaction)).then(() => 
      Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true }
      ))
      .catch((err) => res.status(500).json(err))
  },

  deleteReaction(req, res) {
    Reaction.findByIdAndRemove({ _id: req.params.reactionId })
    .then(() =>
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: req.body } },
        { new: true }
      )
      .catch((err) => res.status(500).json(err))
    )
  },
};
