class Student{
    constructor(name, subject, grade, yearInCollage, age, hasDegree, money) {
        this.name = name;
        this.subject = subject;
        this.grade = grade;
        this.yearInCollage = yearInCollage;
        this.age = age;
        this.hasDegree = hasDegree;
        this.money = money;
    }

    upYear(){
        if (this.yearInCollage < 4){
            this.yearInCollage += 1;
            if(this.yearInCollage === 3) {
                this.hasDegree = true;
            }
        } else  {
            return 'The student has already graduated!';
        }
    }

    receiveScholarship(min, amount){
        if ((this.age < 30) && (this.grade >= min)){
            this.money += amount;
        }

        return this.money;
    }

}

function StudentGroup(groupSubject){
    this.groupSubject = groupSubject;
    this.students = [];
    this.freePlaces = 5;

    this.addStudent =function (student) {
        if ((this.freePlaces > 0) && (student.subject === this.groupSubject)){
            this.students.push(student);
            this.freePlaces--;
        }
    }

    this.emptyGroup = function () {
        this.students = [];
        this.freePlaces = 5;
    }

    this.theBestStudentName = function () {
        let bestStudent = this.students[0];
        this.students.forEach(stud => {
            if (stud.grade > bestStudent.grade){
                bestStudent = stud;
            }
        });
       return bestStudent.name;
    }

    this.printStudentsInGroup = function () {
        this.students.forEach(stud => {console.log(`Student ${stud.name} with avg grade of ${stud.grade}`)});
    }
}

let pesho = new Student('Peter', 'Literature', 4.5, 2, 20, false, 200);
let tosho = new Student('Todor', 'Literature', 5.02, 3, 21, false, 200);
let minka = new Student('Mina', 'Literature', 3, 1, 19, false, 200);
let penka = new Student('Petrana', 'Literature', 4.99, 4, 22, false, 200);
let lenka = new Student('Lena', 'Math', 4.99, 4, 22, false, 200);

pesho.upYear();
console.log(pesho.yearInCollage);

tosho.receiveScholarship(4.50, 400);
console.log(tosho.money);

minka.receiveScholarship(4.5, 400);
console.log(minka.money);

console.log(penka.upYear());
console.log('-------------------------');
let litClub = new StudentGroup('Literature');
litClub.addStudent(pesho);
litClub.addStudent(tosho);
litClub.addStudent(minka);
litClub.addStudent(penka);
litClub.addStudent(lenka);

console.log(litClub.freePlaces);
console.log(litClub.theBestStudentName());
litClub.printStudentsInGroup();
litClub.emptyGroup();

console.log(litClub.freePlaces);