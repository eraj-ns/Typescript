// execution context for self study
// object ortented progaming 
// coding ko likhne ka tarika or re use ho
//class or object jo is me usse hoti hai
// class hai blue print of object
var person = /** @class */ (function () {
    function person(user_name, user_age) {
        this.pin = 12345;
        //console.log(name,age);
        //console.log(this.name,this.age);
        this.name = user_name;
        this.age = user_age;
        this.salary = 50000;
    }
    person.prototype.updateAge = function (age) {
        this.age = age;
    };
    person.prototype.displaySalary = function (pin) {
        if (pin === this.pin) {
            console.log(this.salary);
        }
        else {
            console.log("chalo niklo");
        }
    };
    return person;
}());
// now write object
var person1 = new person("eraj", 20);
var person2 = new person("naz", 23);
console.log(person1);
console.log(person2);
person1.updateAge(25);
console.log(person1.age);
person2.updateAge(30);
console.log(person2.age);
person1.displaySalary(12345);
//access modifier
