const mongoose = require('mongoose');
const config = require('./config');

const User = require('./models/User');

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', async () => {
  try {
    await db.dropCollection('users');
  } catch (e) {
    console.log('Collections were not present, skipping drop...');
  }

  const [user, Джиджи Буффон] = await User.create({
    username: 'user',
    password: '123'
  }, {
    username: 'Джиджи Буффон',
    password: '321'
  });

  await Album.create({
    title: 'Queen',
    image: '1.jpg',
    user: user._id,
    published: true
  }, {
    title: 'Queen',
    image: '2.jpg',
    user: user._id
    published: true

  });
  db.close();
});