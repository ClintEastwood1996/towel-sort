
// You should implement your task here.


function towelSort (matrix) {
  let arr = [];

  if (!Array.isArray(matrix) || matrix == []) {
    return arr;
  }

  matrix.forEach(function (item, index) {
    if ((index+1)%2 != 0) {
      Array.prototype.push.apply(arr,item)
    } else {
      Array.prototype.push.apply(arr,item.reverse())
    }
  }
  )

  return arr
}

module.exports = towelSort;

