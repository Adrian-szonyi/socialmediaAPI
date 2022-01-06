const { Schema, model } = require('mongoose');
const { reactionSchema } = require('./Reaction');
const moment = require("moment");

const userSchema = require('./User');
// Schema to create User model

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280  },
    createdAt: { type: Date, default: Date.now,
      get: (createdAtTime) =>
      moment(createdAtTime).format("MMM DD, YYYY [at] hh:mm a"), },
    username: { type: String, required: true, default: userSchema.username },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    },]
    },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema.virtual('reactionCount')
  .get(function () {
    return this.reactions.length;
  });

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
