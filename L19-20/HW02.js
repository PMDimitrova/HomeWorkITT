class Computer{
    constructor(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem){
        this.year = year;
        this.price = price;
        this.isNoteBook = isNotebook;
        this.hardDiskMemory = hardDiskMemory;
        this.freeMemory = freeMemory;
        this.operationSystem = operationSystem
    }

    comparePrice(comp){
        if (this.price > comp.price){
            return - 1;
        }else if (this.price === comp.price){
            return 0;
        }else {
            return 1;
        }
    }
}

let comp1 = new Computer(2000, 2500, false, 250, 199, 'iOs');
let comp2 = new Computer(2000, 1200,  false, 250, 199, 'iOs');
let comp3 = new Computer(2010, 2300,  false, 250, 199, 'Windows');

console.log(comp1.comparePrice(comp2));
console.log(comp3.comparePrice(comp1));