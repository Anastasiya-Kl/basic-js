module.exports = function countCats(array) {
  
  let result = 0;
	array = array.flat(Infinity);
  array.forEach(element => {
    if (element === '^^') {
      result += 1;
    }
  });
	return result;
  
};
