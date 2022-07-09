module.exports.queryString = (obj) => {
  const objectMap = Object.entries(obj).map((item) => {
    return `${item[0]}=${item[1]}`;
  });

  return objectMap.join("&");
};
