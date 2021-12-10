function Task(name, workingHours){
    this.name = name;
    this.workingHours = workingHours; //time for the task to be finished
}

function Employee(name, currentTask, hoursLeft){
    this.name = name;
    this.currentTask = currentTask; //obj
    this.hoursLeft = hoursLeft; //how much working hours the employee have left for today

    this.work = function (){
        if(hoursLeft >= currentTask.workingHours){
            this.hoursLeft -= currentTask.workingHours;
            currentTask.workingHours = 0;
        }else {
            currentTask.workingHours -= this.hoursLeft;
            this.hoursLeft = 0;
        }
        this.showReport();
    }

    this.showReport = function (){
        console.log('Name: ' + this.name);
        console.log('Current task name: ' + this.currentTask.name);
        console.log('Working hours left to this employee: ' + this.hoursLeft);
        console.log('Hours left for the task to be completed: ' + this.currentTask.workingHours);
    }

}
let cleaningTheFloor = new Task('Cleaning the floor', 5);
let washingWindows = new Task('Washing the windows of the house', 10);

let pesho = new Employee('Peter', cleaningTheFloor, 6);
pesho.work();
console.log('----------');
let tosho = new Employee('Tosho', washingWindows, 6);
tosho.work();
