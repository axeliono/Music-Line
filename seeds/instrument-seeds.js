const { Instrument } = require('../models');

const instrumentData = [
  {
    name: 'Autoharp',
    origin: 'US',
    classification_id: 1,
    price: 46.00,
    manufacturer: 'Fender',
    image_path: '/images.autoharp.jpg'
  },
  {
    name: 'Banjo',
    origin: 'North America',
    classification_id: 1,
    price: 215.00,
    manufacturer: 'Baldwin',
    image_path: '/images.banjo.jpg'
  },
  {
    name: 'Cello',
    classification_id: 1,
    price: 900.00,
    manufacturer: 'Gibson',
    image_path: '/images.cello.jpg'
  },
  {
    name: 'Fiddle',
    origin: 'Western Europe',
    classification_id: 1,
    price: 620.00,
    manufacturer: 'Harman',
    image_path: '/images.fiddle.jpg'
  },
  {
    name: 'Guitar',
    origin: 'Spain',
    classification_id: 1,
    price: 1500.00,
    manufacturer: 'Yamaha',
    image_path: '/images.guitar.jpg'
  },
  {
    name: 'Harpsichord',
    origin: 'Western Europe',
    classification_id: 1,
    price: 25.00,
    manufacturer: 'Steinway',
    image_path: '/images.harpsichord.jpg'
  },
  {
    name: 'Lute',
    origin: 'Western Europe',
    classification_id: 1,
    price: 66.00,
    manufacturer: 'Sennheiser',
    image_path: '/images.lute.jpg'
  },
  {
    name: 'Accordion',
    origin: 'Europe',
    classification_id: 2,
    price: 254.00,
    manufacturer: 'Fender',
    image_path: '/images.accordion.jpg'
  },
  {
    name: 'Bagpipe',
    origin: 'Scotland',
    classification_id: 3,
    price: 895.00,
    manufacturer: 'Wallace',
    image_path: '/images.bagpipe.jpg'
  },
  {
    name: 'Bassoon',
    origin: 'Western Europe',
    classification_id: 3,
    price: 567.00,
    manufacturer: 'Gibson',
    image_path: '/images.bassoon.jpg'
  },
  {
    name: 'Bugle',
    origin: 'Europe',
    classification_id: 4,
    price: 45.00,
    manufacturer: 'Harman',
    image_path: '/images.bugle.jpg'
  },
  {
    name: 'Calliope',
    origin: 'Western Europe',
    classification_id: 5,
    price: 21.00,
    manufacturer: 'Yamaha',
    image_path: '/images.calliope.jpg'
  },
];

const seedInstruments = () => Instrument.bulkCreate(instrumentData);

module.exports = seedInstruments;