// Results of day 1
var testMatrix = [
    [T, T, T],
    [F, F, F,],
    [T, T, T]
];

//Larger function that runs the game
function gameOfLife(matrix) {
    var height = matrix.length;
    var width = matrix[0].length;
    var resultMatrix = [];
    // Nested function that sets rules for cells staying in bounds
    function isInBounds(row, col, matrix) {
        return row >= 0 && col >= 0 && row < height && col < width;
    }
    //Loop that defines rows
    for (let row = 0; row < height; row++) {
        resultMatrix[row] = [];
        //Loop that defines columns
        for (let col = 0; col < width; col++) {
            var neighborCount = countNeighbors(row, col, matrix);
            //Sets rules for living and dying using the neighbor count variable. 
            let isAlive = 0;
            if (matrix[row][col]) {
                isAlive = neighborCount > 1 && neighborCount <4;
            } else {
                isAlive = neighborCount === 3;
            }
            // Defines the result matrix array based on results of the game.
            resultMatrix[row][col] = isAlive;
        }
    }
    // returns the results of the game
    return resultMatrix;
}

//Function to determine the amount of neighbors
function countNeighbors(row, col, matrix) {
    let neighbors = -matrix[row, col];
// Loops that apply the rules of the game of life to check for amount of neighbors.
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let value = matrix[row + i, col + j];
            if (value) neighbors++;
        }
    }
    return neighbors;
}

// Runs the game and stores the results of the game in a variable.

var result = gameOfLife(testMatrix);

// Prints out the aftermath of the game of life.

for (let row of result) {
    console.log(row);
}