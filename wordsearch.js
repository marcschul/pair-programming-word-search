const wordSearch = (letters, word) => {
  if (JSON.stringify(letters) === JSON.stringify([])) {
    return true;
  }
  
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters);
  for (const words of horizontalJoin) {
    if (words.includes(word)) {
      return true;
    }
  }
  for (const words of verticalJoin) {
    if (words.includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function(matrix) {
  let returnArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const newArray = [];
    for (let j = 0; j < matrix.length; j++) {
      newArray.push(matrix[j][i]);
    }
    returnArray.push(newArray);
  }
  return returnArray.map(ls => ls.join(''));
};

module.exports = wordSearch;