function sumItems(array) {
  // Sum all the numbers in the array
  if (!array.length) return 0;
    if (Array.isArray(array[0])) return sumItems(array[0]) + sumItems(array.slice(1));
    return array[0] + sumItems(array.slice(1));
}

module.exports = sumItems;
