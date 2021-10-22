let n = 4; //rows
let m = 5; //cols

let cellsCount = n * m;


let matrix = new Array(n);
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(m);
}

let counter = 1;
let sumOfIndexes = 0;
let startingRow = 0;
let startingCol = 0;

while (counter <= cellsCount){

    for (let row = startingRow; row >= 0; row--) {
        for (let col = 0; col < m; col++) {
            matrix[row][col] = counter;     // слагаме на текущата клетка номер
            counter++;                  // увеличаваме номера

            if ((col + row) === sumOfIndexes ){ //ако сумата на индексите е максималната
                if (startingRow < n){           //защото максимално можем да стигнем до n - 1, в случая 3
                startingRow++;                  //увеличаваме сумата на индексите
                }
                break; //започваме отначало
            }
        }
    }
}

console.log(matrix);