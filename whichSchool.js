let school = "";
let age = 0;

function whichSchool(age) {
if (age < 13) {
  school = "Elementary School";
}
else if (age >= 13 && age < 18) {
  school = "Secondary School";
}
else if (age >= 18) {
  school = "Lighthouse Labs";
}}

whichSchool(15);
console.log(school);