function Person(initialAge) {
  this.age = this.resolveAge(initialAge);
  this.amIOld = function () {
    let message = "";
    if (this.age < 13) message = "You are young.";
    else if (this.age < 18) message = "You are a teenager.";
    else message = "You are old";
    console.log(message);
  };
  this.yearPasses = function () {
    this.age++;
  };
}

Person.prototype.resolveAge = function (age) {
  if (age < 0) {
    console.log("Age is not valid, setting age to 0.");
    return 0;
  } else return age;
};
let person = new Person(10);
console.log(person.age);
