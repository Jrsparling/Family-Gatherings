const router = require('express').Router();
const { User, Event } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.body)
  try {
   const userData = await User.findByPk(req.session.user_id)
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
      family_id: userData.get({ plain: true }).family_id
    });
    console.log(newEvent)
    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
