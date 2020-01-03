// const age = year => {
//   let d = new Date().getFullYear();

//   return d - year;
// };

// let myAge = age(1989);
// console.log(myAge);

// const checkIpAddress = ip => {
//   if (ip.substring(0, 3) === "192") {
//     console.log("Private IP address");
//   }
// };

// checkIpAddress("192.162.192.0");

// const a = 10;
// const b = 7;
// const addUp = a => b => a * b;

// console.log(addUp(a)(b));

const add = num => num + 7;
const minus = num => num - 1;
const calc = (a, b) => c => a(b(c));

const answer = calc(add(), minus())(9);
console.log(answer);
