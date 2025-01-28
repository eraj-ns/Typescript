// Question 2: Personal Message
/*let personName: string = "ERIC";
console.log(`hellow ${personName}, would you like to learn some python today?`);

// Question 3: Name Cases
let person_name: string = "Erajnaz";
console.log("lowercase:" ,person_name.toLowerCase());
console.log("uppercase:" ,person_name.toUpperCase());
console.log("titlecase:" ,person_name.replace(/\bw/g,c => c.toUpperCase()));

// Question 4: Famous Quote
let quote: string = "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein"
console.log(`${author} once said, "${quote}`);

// Question 5: Famous Quote 2
let Quote: string = "A person who never made a mistake never tried anything new";
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, ${Quote}`;
console.log(message);

// Question 6: Stripping Name
let personName: string = `\n\t ERAJ NAZ\t\n`;
console.log(personName);
let stripped: string = personName.trim();
console.log(stripped);

// Question 7 & 8: Number Eight
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);

// Question 9: Favourite
let FavouriteNumber: number = 4;
console.log(`My favourite number is ${FavouriteNumber}`);

// Question 10: Adding Comments
// my name is eraj
//Dated: 5/4/2024
// This program will run hellow world
console.log('hellow world simple program');

// Question 10: program2
// my name is eraj
//Dated: 5/4/2024
//This program will multiplication
console.log(5 * 2);

// Question 11: Names
let members: string[] = ['noor','ayesha','aliya','mariyam','saba'];
for(let i=0; i<members.length; i ++){
   console.log(members[i]);
}

// Question 12: Greeting
let members: string[] = ['noor','ayesha','aliya','mariyam','saba'];
let message: string='aj tum se kon mila ga :';
for(let i=0; i<members.length; i ++){
   console.log(message + members[i]);
}

// Question 13: Your Own Array
let transportation: string [] = ['car','bike','bus','ven'];
for(let i=0; i<transportation.length; i ++){
   console.log('i would like to own a ' + transportation[i]);
}*/
//Question 14: Guest List
var guest_list = ['aqsa', 'noor', 'ayesha', 'hafsa', 'maira'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we invited you on dinner tomorrow.\n Thank You\n');
}
var not_present = 'noor';
var new_person = 'eraj';
guest_list[1] = new_person;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n we invited you on dinner tomorrow.\n Thank You\n');
}
console.log("Miss= ".concat(not_present, " will not coming tomorrow dinner. "));
