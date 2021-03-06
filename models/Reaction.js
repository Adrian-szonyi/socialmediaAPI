const { Schema, model, Types } = require('mongoose');
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
  thoughtId: {
  type: String,
  required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
     type: String,
     required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtTime) =>
      moment(createdAtTime).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Reaction = model('Reaction', reactionSchema);

module.exports = {Reaction, reactionSchema};