let Person = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

Person.prototype.calcage = function() {
  console.log(this.age);
};

let john = new Person("john", 30, "Computer engineer");

john.calcage();
console.log(john.name);
