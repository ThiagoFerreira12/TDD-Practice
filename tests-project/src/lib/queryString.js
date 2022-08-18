const keyValue = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Object not allowed');
  }

  return `${key}=${value}`;
};

module.exports.queryString = obj => {
  return Object.entries(obj).map(keyValue).join('&');
};
