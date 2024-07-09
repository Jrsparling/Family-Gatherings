const sequelize = require('../config/connection');
const { User, Post, Family } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const familyData = require('./familyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const family = await Family.bulkCreate(familyData, {
    individualHooks: true,
    returning: true,
  });
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const post = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

console.log( users, post, family);
  // for (const post of postData) {
  //   await Post.create({
  //     ...post,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  process.exit(0);
};

seedDatabase();
