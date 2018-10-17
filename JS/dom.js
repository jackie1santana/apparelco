
/*
var headerTitle = document.getElementById('top');
headerTitle.style.border = 'solid 3px white';
*/

/* var header = document.querySelector('.nav');
header.style.borderBottom = 'solid 4px black';
header.style.borderTop = 'solid 4px white';
*/

//Object literals and properties
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried:false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
