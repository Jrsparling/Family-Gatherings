const User = require('./User');
const Post = require('./Post');
const Family = require('./Family');
const Event = require('./Event');

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
Event.belongsTo(Family,{
  foreignKey: 'family_id'
});
Family.hasMany(Event, {
  foreignKey: 'family_id'
});

module.exports = { User, Post, Family, Event };
