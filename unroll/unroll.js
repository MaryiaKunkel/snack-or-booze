function unroll(squareArray) {
  let newSquare = [...squareArray];
  const newArr = [];

  while (newSquare.length) {
    if (newSquare.length) {
      for (let i = 0; i < newSquare[0].length; i++) {
        newArr.push(newSquare[0][i]);
      }
      newSquare.shift();
    }
    if (newSquare.length) {
      for (let j = 0; j < newSquare.length; j++) {
        newArr.push(newSquare[j][newSquare[j].length - 1]);
        newSquare[j].pop();
      }
    }

    if (newSquare.length) {
      for (let k = newSquare[newSquare.length - 1].length - 1; k >= 0; k--) {
        newArr.push(newSquare[newSquare.length - 1][k]);
      }
      newSquare.pop();
    }

    if (newSquare.length) {
      for (let l = newSquare.length - 1; l >= 0; l--) {
        newArr.push(newSquare[l][0]);
        newSquare[l].shift();
      }
    }
  }
  return newArr;
}

module.exports = unroll;
