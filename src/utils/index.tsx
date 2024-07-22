/**
 * Humanize coded text
 *
 * @param {string} str - str to humanize
 * @returns {string} - humanize string
 */
export const humanize = (str: string): string => {
  const zero = 0;
  const one = 1;
  const frags = str.split('_');
  for (let i = zero; i < frags.length; i++) {
    frags[i] = frags[i].charAt(zero).toUpperCase() + frags[i].slice(one);
  }
  return frags.join(' ');
};

/**
 * Check if object is valid JSON string
 *
 * @param {any} obj - Object to check for its json structure
 * @returns {boolean} - True if the object is a json object, false otherwise
 */
export const isJsonParsable = (obj: any): boolean => {
  try {
    JSON.parse(obj);
  } catch (err) {
    return false;
  }
  return true;
};
