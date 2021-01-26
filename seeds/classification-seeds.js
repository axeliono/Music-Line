const { Classification } = require('../models');

const classificationData = [
  {
    name: 'Stringed Instruments',
  },
  {
    name: 'Free Reed Instruments',
  },
  {
    name: 'Reed Instruments',
  },
  {
    name: 'Brass Instruments'
  },
  {
    name: 'Fipple Flutes',
  },
  {
    name: 'Woodwinds',
  },
  {
    name: 'Percussion',
  },
  {
    name: 'Unpitched Percussion',
  },
  {
    name: 'Pitched Percussion',
  },
];

const seedClassifications = () => Classification.bulkCreate(classificationData);

module.exports = seedClassifications;