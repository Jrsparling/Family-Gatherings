const User = require('./User');
const Post = require('./Post');
const Family = require('./Family');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsTo(Family,{
  foreignKey: 'family_id'
});
Family.hasMany(User, {
  foreignKey: 'family_id'
});

module.exports = { User, Post, Family };
