grid = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45],
];

function findCombinations(grid, length) {
  //stop code from going out of bounds
  const indexOffset = length - 1;
  const combinations = [];
  for (let i = 0; i < grid.length; i++) {
    //loop through rows
    for (let j = 0; j < grid[0].length; j++) {
      //loop through columns
      if (i > 0 + indexOffset) {
        // Find all combinations going Up
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i - x][j]]);
        }
        combinations.push(subsetCombination);
      }
      if (i < 9 - indexOffset) {
        // Find all combinations going Down
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i + x][j]]);
        }
        combinations.push(subsetCombination);
      }
      if (j > 0 + indexOffset) {
        // Find all combinations going Left
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i][j - x]]);
        }
        combinations.push(subsetCombination);
      }
      if (j < 9 - indexOffset) {
        // Find all combinations going Right
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i][j + x]]);
        }
        combinations.push(subsetCombination);
      }

      if (i > 0 + indexOffset && j > 0 + indexOffset) {
        // Find all combinations going Up-left
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i - x][j - x]]);
        }
        combinations.push(subsetCombination);
      }
      if (i < 9 - indexOffset && j < 9 - indexOffset) {
        // Find all combinations going Down-right
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i + x][j + x]]);
        }
        combinations.push(subsetCombination);
      }
      if (i < 9 - indexOffset && j > 0 + indexOffset) {
        // Find all combinations going Down-left
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i + x][j - x]]);
        }
        combinations.push(subsetCombination);
      }
      if (i > 0 + indexOffset && j < 9 - indexOffset) {
        // Find all combinations going Up-right
        let subsetCombination = [];
        for (let x = 0; x < length; x++) {
          subsetCombination.push([grid[i - x][j + x]]);
        }
        combinations.push(subsetCombination);
      }
    }
  }
  return combinations.length;
}

function findProduct(grid, length) {
  //stop code from going out of bounds
  const indexOffset = length - 1;
  var greatestProduct = 0;
  for (let i = 0; i < grid.length; i++) {
    //loop through rows
    for (let j = 0; j < grid[0].length; j++) {
      //loop through columns
      if (i > 0 + indexOffset) {
        // Find all combinations going Up
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i - x][j];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (i < 9 - indexOffset) {
        // Find all combinations going Down
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i + x][j];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (j > 0 + indexOffset) {
        // Find all combinations going Left
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i][j - x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (j < 9 - indexOffset) {
        // Find all combinations going Right
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i][j + x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }

      if (i > 0 + indexOffset && j > 0 + indexOffset) {
        // Find all combinations going Up-left
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i - x][j - x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (i < 9 - indexOffset && j < 9 - indexOffset) {
        // Find all combinations going Down-right
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i + x][j + x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (i < 9 - indexOffset && j > 0 + indexOffset) {
        // Find all combinations going Down-left
        let product = 0;
        for (let x = 0; x < length; x++) {
          grid[i + x][j - x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
      if (i > 0 + indexOffset && j < 9 - indexOffset) {
        // Find all combinations going Up-right
        let product = 0;
        for (let x = 0; x < length; x++) {
          product += grid[i - x][j + x];
        }
        if (greatestProduct < product) {
          greatestProduct = product;
        }
      }
    }
  }
  return greatestProduct;
}

console.log(findCombinations(grid, 3)); //476 combinations with 3 adjacent numbers
console.log(findProduct(grid, 3)); //265 is the highest product of 3 adjacent numbers
