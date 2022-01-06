const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });
  await Thought.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Thought.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Thought.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Thought.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await User.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await User.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await User.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });
  await Reaction.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Reaction.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Reaction.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  await Reaction.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });



  console.info('Seeding complete! 🌱');
  process.exit(0);
});
