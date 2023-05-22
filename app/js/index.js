import currencies from './currencies.js';
import diacritics from './diacritics.js';
import emojis from './emojis.js';
import mathematicals from './mathematicals.js';
import punctuation from './punctuation.js';

let all = [...diacritics, ...mathematicals, ...currencies, ...punctuation, ...emojis];

export default all;