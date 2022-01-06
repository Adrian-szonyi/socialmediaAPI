const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  await Reaction.deleteMany({});

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'TESTESTEST',
    createdAt: '21/02/2021',
    username: 'ANLJDNL',
  });
  await Thought.collection.insertOne({
    thoughtText: 'TESTEasaaaaaSTEST',
    createdAt: '21/02/2021',
    username: 'ANLJDNL',
  });

  await Thought.collection.insertOne({
    thoughtText: 'TESTESTsfasfasfasfEST',
    createdAt: '21/02/2021',
    username: 'ANLJDNdfsL',
  });

  await Thought.collection.insertOne({
    thoughtText: 'TESTEssssssssssSTEST',
    createdAt: '21/02/2021',
    username: 'ANLJDasdaNL',
  });

  await Reaction.collection.insertOne({
    reactionBody: 'UCasdasdLAa',
    username: 'ANLJDNL',
  });
  await Reaction.collection.insertOne({
    reactionBody: 'UCasdasdLAa',
    username: 'ANLJDasdaNL',
  });

  await User.collection.insertOne({
    username: 'UasdasadassdaCLA',
    email: 'asdnldfsdajs@gmail.com'
  });

  await User.collection.insertOne({
    username: 'ANLJDNL',
    email: 'asdasnddddlajs@gmail.com'
  });
  await User.collection.insertOne({
    username: 'ANLJDasdaNL',
    email: 'assddddssdnlajs@gmail.com'
  });
  await User.collection.insertOne({
    username: 'ANLJDNdfsL',
    email: 'asdssssnlajs@gmail.com'
  });
  await User.collection.insertOne({
    username: 'UasdasdaCLA',
    email: 'asdnaaalasdsjs@gmail.com'
  });



  console.info('Seeding complete! 🌱');
  process.exit(0);
});
