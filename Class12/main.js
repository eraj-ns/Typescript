"use strict";
// 4 pillars of oop
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//inheritence
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log('name = ${this.name}, age = ${this.age}');
    };
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(name, age, rollno) {
        var _this = _super.call(this, "eraj", 23) || this;
        _this.rollno = rollno;
        return _this;
    }
    return student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, qualification) {
        var _this = _super.call(this, "naz", 25) || this;
        _this.qualification = qualification;
        return _this;
    }
    Teacher.prototype.displayDetails = function () {
        console.log('name = ${this.name}, age = ${this.age}, qualification = ${this.qualification}');
    };
    return Teacher;
}(Person));
var T1 = new Teacher("okasha", 20, "master");
var s1 = new student("ali", 10, "piaic111");
s1.displayDetails();
T1.displayDetails();
// method overwriting
//encapsulation
var teacher = /** @class */ (function () {
    function teacher(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    teacher.prototype.displaysalary = function (pin) {
        if (pin === 147) {
            console.log(this.salary);
        }
        else {
            console.log("chalo niklo");
        }
    };
    return teacher;
}());
var t1 = new teacher("noor", 50000);
//console.log(t1.name)
t1.displaysalary(147);
var person = /** @class */ (function () {
    function person() {
        this.name = "hania";
        this.age = 15;
        this.qualification = "BS";
    }
    person.prototype.displayDetails = function () {
        console.log(this.name);
    };
    return person;
}());
//extend means completely inheritence from parent class
//implements means minimum requirement is to follow the interface
// HW getter and setter
// getter means to get the private property and display it
// setter means to set an private property
// protected access HW
// abstract classes HW
// projects HW
