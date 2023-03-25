const getUniqueValuesInArray = (former, latter) => {
  return [...new Set([...former, ...latter])];
};

module.exports = getUniqueValuesInArray;
