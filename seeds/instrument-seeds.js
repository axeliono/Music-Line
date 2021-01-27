const { Instrument } = require('../models');

const instrumentData = [
  {
    name: 'Autoharp',
    origin: 'US',
    classification_id: 1,
    price: 46.00,
    manufacturer: 'Fender',
    image_path: '/images/autoharp.jpg'
  },
  {
    name: 'Banjo',
    origin: 'North America',
    classification_id: 1,
    price: 215.00,
    manufacturer: 'Baldwin',
    image_path: '/images/banjo.jpg'
  },
  {
    name: 'Cello',
    classification_id: 1,
    price: 900.00,
    manufacturer: 'Gibson',
    image_path: '/images/cello.png'
  },
  {
    name: 'Fiddle',
    origin: 'Western Europe',
    classification_id: 1,
    price: 620.00,
    manufacturer: 'Harman',
    image_path: '/images/fiddle.jpg'
  },
  {
    name: 'Guitar',
    origin: 'Spain',
    classification_id: 1,
    price: 1500.00,
    manufacturer: 'Yamaha',
    image_path: '/images/guitar.jpg'
  },
  {
    name: 'Harpsichord',
    origin: 'Western Europe',
    classification_id: 1,
    price: 25.00,
    manufacturer: 'Steinway',
    image_path: '/images/harpsichord.jpg'
  },
  {
    name: 'Lute',
    origin: 'Western Europe',
    classification_id: 1,
    price: 66.00,
    manufacturer: 'Sennheiser',
    image_path: '/images/lute.jpg'
  },
  {
    name: 'Accordian',
    origin: 'Europe',
    classification_id: 2,
    price: 254.00,
    manufacturer: 'Fender',
    image_path: '/images/accordian.jpg'
  },
  {
    name: 'Bagpipe',
    origin: 'Scotland',
    classification_id: 3,
    price: 895.00,
    manufacturer: 'Wallace',
    image_path: '/images/bagpipe.jpg'
  },
  {
    name: 'Bassoon',
    origin: 'Western Europe',
    classification_id: 3,
    price: 567.00,
    manufacturer: 'Gibson',
    image_path: '/images/bassoon.jpg'
  },
  {
    name: 'Bugle',
    origin: 'Europe',
    classification_id: 4,
    price: 45.00,
    manufacturer: 'Harman',
    image_path: '/images/bugle.jpg'
  },
  {
    name: 'Calliope',
    origin: 'Western Europe',
    classification_id: 5,
    price: 21.00,
    manufacturer: 'Yamaha',
    image_path: '/images/calliope.jpg'
  },
{
    name: 'Lyre',
    origin: 'England, Greece',
    classification_id: 1,
    price: 950.00,
    manufacturer: 'Roland',
    image_path: '/images/lyre.jpg'
  },
{
    name: 'Mandolin',
    origin: 'Bashkortostan, Brazil, Germany, Greece, Italy, Japan, Portugal, Ukraine, United States, Venezuela',
    classification_id: 1,
    price: 457.00,
    manufacturer: 'Forte',
    image_path: '/images/mandolin.jpg'
},
{
  name: 'Piano',
  origin: 'Italy',
  classification_id: 1,
  price: 9000.00,
  manufacturer: 'Leblanc',
  image_path: '/images/piano.jpg'
},
{
  name: 'Sitar',
  origin: 'India',
  classification_id: 1,
  price: 45.00,
  manufacturer: 'Roland',
  image_path: '/images/sitar.jpg'
},
{
  name: 'Ukulele',
  origin: 'Portugal, Hawaii',
  classification_id: 1,
  price: 325.00,
  manufacturer: 'Seagull',
  image_path: '/images/ukulele.jpg'
},
{
  name: 'Viola',
  origin: 'Italy (Da Vinci)',
  classification_id: 1,
  price: 156.00,
  manufacturer: 'Rickenbacher',
  image_path: '/images/viola.png'
},
{
  name: 'Violin',
  origin: 'Italy, Western Europe',
  classification_id: 1,
  price: 723.00,
  manufacturer: 'Ovation',
  image_path: '/images/violin.jpg'
},
{
  name: 'Clarinet',
  origin: 'Germany',
  classification_id: 3,
  price: 650.00,
  manufacturer: 'Steinway',
  image_path: '/images/clarinet.jpg'
},
{
  name: 'Flute',
  origin: 'France',
  classification_id: 6,
  price: 487.00,
  manufacturer: 'Sennheiser',
  image_path: '/images/flute.jpg'
},
{
  name: 'French horn',
  origin: 'Europe',
  classification_id: 4,
  price: 23.00,
  manufacturer: 'Roland',
  image_path: '/images/frenchHorn.jpg'
},
{
  name: 'Harmonica',
  origin: 'Germany',
  classification_id: 2,
  price: 658.00,
  manufacturer: 'Forte',
  image_path: '/images/harmonica.jpg'
},
{
  name: 'Oboe',
  origin: 'Western Europe',
  classification_id: 3,
  price: 148.00,
  manufacturer: 'Howarth of London',
  image_path: '/images/oboe.jpg'
},
{
  name: 'Piccolo',
  origin: 'Western Europe',
  classification_id: 6,
  price: 65.00,
  manufacturer: 'Seagull',
  image_path: '/images/piccolo.jpg'
},
{
  name: 'Pipe organ',
  origin: 'Greece',
  classification_id: 2,
  price: 25000.00,
  manufacturer: 'Rickenbacher',
  image_path: '/images/pipeOrgan.jpg'
},
{
  name: 'Recorder',
  origin: 'Germany',
  classification_id: 5,
  price: 37.00,
  manufacturer: 'Ovation',
  image_path: '/images/recorder.jpeg'
},
{
  name: 'Saxophone',
  origin: 'Belgium',
  classification_id: 3,
  price: 755.00,
  manufacturer: 'Harman',
  image_path: '/images/saxophone.jpg'
},
{
  name: 'Trombone',
  origin: 'Western Europe',
  classification_id: 4,
  price: 235.00,
  manufacturer: 'Yamaha',
  image_path: '/images/trombone.jpg'
},
{
  name: 'Trumpet',
  origin: '',
  classification_id: 4,
  price: 468.00,
  manufacturer: 'Steinway',
  image_path: '/images/trumpet.jpg'
},
{
  name: 'Tuba',
  origin: 'Germany',
  classification_id: 4,
  price: 1058.00,
  manufacturer: 'Sennheiser',
  image_path: '/images/tuba.jpg'
},
{
  name: 'Barrel Drum',
  origin: 'Cuba',
  classification_id: 7,
  price: 658.00,
  manufacturer: 'Yamaha',
  image_path: '/images/barrelDrum.jpg'
},
{
  name: 'Bass Drum',
  origin: '',
  classification_id: 7,
  price: 52.00,
  manufacturer: 'Steinway',
  image_path: '/images/bassDrum.jpg'
},
{
  name: 'Bongo Drums',
  origin: 'Cuba',
  classification_id: 7,
  price: 458.00,
  manufacturer: 'Sennheiser',
  image_path: '/images/BongoDrums.jpg'
},
{
  name: 'Drum Set',
  origin: 'America',
  classification_id: 7,
  price: 679.99,
  manufacturer: 'Yamaha',
  image_path: '/images/drum.png'
},
{
  name: 'Snare drum',
  origin: 'Medieval',
  classification_id: 7,
  price: 98.00,
  manufacturer: 'Forte',
  image_path: '/images/snareDrum.jpg'
},
{
  name: 'Cowbell',
  origin: 'Switzerland',
  classification_id: 8,
  price: 97.00,
  manufacturer: 'Howarth of London',
  image_path: '/images/cowbell.jpg'
},
{
  name: 'Cymbal',
  origin: 'Romania',
  classification_id: 8,
  price: 49.00,
  manufacturer: 'Seagull',
  image_path: '/images/cymbal.jpg'
},
{
  name: 'Gong',
  origin: 'Brunei, China, Indonesia, Japan, Korea, Malaysia, Myanmar, Tibet',
  classification_id: 8,
  price: 859.00,
  manufacturer: 'Sennheiser',
  image_path: '/images/tuba.jpg'
},
{
  name: 'Maraca',
  origin: 'Venezuela',
  classification_id: 8,
  price: 29.00,
  manufacturer: 'Ovation',
  image_path: '/images/maraca.jpg'
},
{
  name: 'Tambourine',
  origin: 'Belarus, Bosnia and Herzegovina, Czech, Greece, Hungary, Iran, North Macedonia, Pakistan, Poland, Portugal, Russia, Slovenia, Tajikistan, Turkey, Ukraine, United Arab Emirates',
  classification_id: 8,
  price: 47.00,
  manufacturer: 'Seagull',
  image_path: '/images/tambourine.jpg'
},
{
  name: 'Triangle',
  origin: 'Cajuns',
  classification_id: 8,
  price: 237.00,
  manufacturer: 'Yamaha',
  image_path: '/images/triangle.jpg'
},
{
  name: 'Xylophone',
  origin: 'Ghana, Uganda, Zambia',
  classification_id: 9,
  price: 496.00,
  manufacturer: 'Steinway',
  image_path: '/images/xylophone.jpeg'
},
];
const seedInstruments = () => Instrument.bulkCreate(instrumentData);

module.exports = seedInstruments;