const mongoose = require('mongoose');
const reactionSchema = require('./Reaction');
const userSchema = require('./User');
// Schema to create User model

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280  },
    createdAt: { type: Date, default: Date.now() },
    username: { type: String, required: true, default: userSchema.username },
    reactions: [reactionSchema]
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
