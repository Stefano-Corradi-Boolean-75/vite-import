const nomi = [
  'ugo',
  'filippo',
  'mario'
];

const code = 'sdlkdjslk4jlkrlk3k';

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min +1 ) + min)
}


export {nomi, code, getRandomNumber}