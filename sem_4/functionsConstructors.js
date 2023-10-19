function Student(name, age, grade){
    this.name=name;
    this.age=age;
    this.grade=grade;

    // this.greet= function(){
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); 
    // }
}

Student.prototype.greet= function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); 
}

function Teacher(name, age, grade, subject){
    //Student.call(this, name, age, grade);
    this.subject=subject;


}

const student1= new Student('Adrian', 24,10);
const teacher1= new Teacher('lungu',24,10, 'WT');

console.log(student1);
console.log(teacher1);