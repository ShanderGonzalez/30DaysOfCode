function trMatrix (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    const trmatrix = [];

    for (let i = 0; i < col; i++) {
        trmatrix[i] = [];

        for (let j = 0; j < row; j++) {
            trmatrix[i][j] = matrix[j][i];
        }
    }

    trmatrix.forEach(row => console.log(row.join(' ')));
}

let matrix1 = [
    [1, 0, 5, 6],
    [2, 8, 4, 9]
];

let matrix2 = [
    [4, 9, 2],
    [2, 0, 6],
    [8, 7, 5]
];

console.log("First Matrix Tr.:")
trMatrix(matrix1);
console.log("Second Matrix Tr.:")
trMatrix(matrix2);
  
