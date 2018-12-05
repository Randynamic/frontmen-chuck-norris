/**
 * Unescape HTML entities such as '&quot;'
 * @param {string} input 
 * @return {string}
 */
export const decodeHtml = (input) => {
  const el = document.createElement('div');
  el.innerHTML = input;
  return el.childNodes.length === 0 ? "" : el.childNodes[0].nodeValue;
};

/**
 * Wait for a given time
 * @param {number} ms 
 * @return {Promise}
 */
export const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};