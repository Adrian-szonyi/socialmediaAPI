const { Reaction } = require('../models');
const { Thought } = require('../models')

module.exports = {
  createReaction(req, res) {
    Reaction.create(req.body).then(
      (reactionResult) => {
        Thought.findByIdAndUpdate(
          { _id: req.params.thoughtId },
          { $push: { reactions: req.body } },
          { new: true }
        ).then((thoughtResult) => {
          return res.json(reactionResult);
        }).catch((thoughtError) => {
          console.log("error updating thought");
          console.log(thoughtError);
          
        })
      }
    ).catch((reactionError) => {
      console.log("error updating reaction");
      console.log(reactionError);
      return res.json(reactionError);
    })
  },

  deleteReaction(req, res) {
    console.log(req.params.reactionId);

    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: { reactions: { reactionId: req.params.reactionId } }},
      { runValidators: true, new: true }
      ).then(
      (result) => {

        return res.json({
          message: result
        });

      }
    ).catch(error => {
      console.log("error");
      console.log(error);
      res.json({
        message: error
      });
    });
  },
}
