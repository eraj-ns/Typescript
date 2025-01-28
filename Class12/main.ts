// 4 pillars of oop

//import { HeapSnapshotOptions } from "v8";

//inheritence
class Person{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    displayDetails(){
        console.log('name = ${this.name}, age = ${this.age}');
    }
}

class student extends Person{
    //name: string;
    //age: number;
    rollno: string
    constructor(name: string, age: number, rollno: string){
        super("eraj", 23)
        this.rollno = rollno
    }
}

class Teacher extends Person{
     //name: string
     //age: number
     qualification: string
     constructor(name: string, age: number, qualification: string){
        super("naz", 25)
        this.qualification = qualification
     }
     displayDetails(){
        console.log('name = ${this.name}, age = ${this.age}, qualification = ${this.qualification}');
     }
     }
let T1 = new Teacher("okasha", 20, "master")
let s1 = new student("ali", 10, "piaic111")

s1.displayDetails()
T1.displayDetails()
// method overwriting

//encapsulation
class teacher{
    name: string
   private salary: number // private is an property modifier
   constructor(name: string, salary: number){
    this.name = name
    this.salary = salary
   }
   displaysalary(pin: number){
    if(pin === 147){
        console.log(this.salary)
    }
    else{
        console.log("chalo niklo")
    }
   }
}

let t1 = new teacher("noor" , 50000)
//console.log(t1.name)
t1.displaysalary(147)


//Abstraction
interface IClass{
    name: string
    age: number
    displayDetails() : void;
}

class person implements IClass{
    name = "hania"
    age = 15
    qualification = "BS"
    displayDetails(){
        console.log(this.name);
    }
}

//extend means completely inheritence from parent class
//implements means minimum requirement is to follow the interface



// HW getter and setter
// getter means to get the private property and display it
// setter means to set an private property
// protected access HW
// abstract classes HW
// projects HW








