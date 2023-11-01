// console.log(90)
// console.log("javscript data structures")
// console.log(true)
// window.alert("js is very cool")
// document.write("js is very cool")
// document.getElementById("demo").innerHTML = "javascript is cool";
// data types in js
// undefined, null, boolean, string, symbol, number, objects

// declare a variable
let fname;
// assigning a variable
fname = "john";
// fname = "jane" //you can reassign a global variable with let
// let fname = "jones" // you cannot redeclare a variable
// declare and assign a variable on the same line (initialise)
// let fname = "john";

// console.log(fname)
// let sum = 10 + 20
// console.log(sum)

// let minus = 10 - 20
// console.log(minus)

// multiplication
// exponent
// quotient

// increment a value

let x = 10;
x++;
console.log(x);

// let y = 11
// y--
// console.log(y)

// modulus %

// augmented add
// +=
// -=
// *=
// /=
// camel case in js for variable name
let firstName = "Beau";
let myStr = 'i am a "double quote" string inside a "double quote"';
console.log(myStr);

let link = '<a href="https://www.ok.com" target="_blank">ok</a>';
console.log(link);

// concatenation
// firstName = "john"
// lastName = "doe"
// console.log(firstName+" "+lastName)

let firstWord = "free";
firstWord += "code";
console.log(firstWord);

// string properties and methods
// to get the length of string
let text = "freecodecamp";
// text[0]
// text[0] = "r"
// console.log(text.length)
// text.endsWith("p")
// let result=text.concat(".org")
// console.log(result)

let res = text[text.length - 2];
console.log(res);

// array
// this is a special variable that can store multiple data value/type
let myArr = ["john", 1, 2.0, true];
// multi-dimensional aaray
let myArr2 = [["john", 1, 2.0, true], 4, 5];
console.log(myArr2[0][3]);
console.log(myArr2[2]);
console.log(myArr.length);
// add item to the end of the array
myArr.push(false);
// add item to the start of an array
myArr.unshift(5);
// remove the last item from an array
myArr.pop();
// remove the first item from an array
myArr.shift();

// to continue higher order array methods

// function
function myfunction() {
  console.log("hello world!");
}

myfunction();

function addFunc(a, b) {
  console.log(a + b);
}
addFunc(4, 5);

let global = 20;
function scope() {
  console.log(global);
}
scope();

let processed = 0;
function myFunction(num) {
  return (num + 3) / 5;
}
processed = myFunction(7);
console.log(processed);

function myFunc(arr, item) {
  arr.push(item);
  arr.shift();
  return arr;
}

const result = myFunc([1, 2, 3, 4, 5], 6);
console.log(result);

// 12 == '12' --- equality operator returns true if the values compared are the same and of the same type or different type. since it will covert different types to the same.
// 12 === '12' --- strictly equality operator returns true if the values compared are the same and of the same type.

// ternary operator
// function myFunc(val) {
//     if (val != 99) {
//       return true;
//     }
//     return false;
//   }
//   console.log(myFunc(100));

function myFunc(val) {
  return val != 99 ? true : false;
}
console.log(myFunc(99));
//   function myFunction(val) {
//     if (val > 100) {
//       return "greater than 100";
//     }
//     if (val > 10) {
//       return "greater than 10";
//     }
//     return "10 or under";
//   }
//   console.log(myFunction(10));

function myFunc(val) {
  return val > 100
    ? "greater than 100"
    : val > 10
    ? "greater than 10"
    : "10 or under";
}
console.log(myFunc(10));

// write a javascript snippet that takes in an array of numbers and returns a new array
function snipfunc(arr) {
  arr.shift();
  return arr;
}

console.log(snipfunc([1, 2, 3, 4]));

// salary > or equal 1000
// senior staff

// > or equal to 500 and less than 1000
// jnr staff
// let salary
function salaryfunc(sal) {
  return sal >= 1000
    ? "senior staff"
    : sal >= 500 && sal < 1000
    ? "junior staff"
    : "none";
}

console.log(salaryfunc(5));

// ten
// function golfScore(par,strokes) {
//   if (strokes == 1) {
//     return "hole-in-one";
//   } else if (strokes <= par - 2) {
//     return "eagle";
//   } else if (strokes == par - 1) {
//     return "birdie";
//   } else if (strokes == par) {
//     return "par";
//   } else if (strokes == par + 1) {
//     return "bogey";
//   } else if (strokes == par + 2) {
//     return "double bogey";
//   } else {
//     return "go home";
//   }
// }

// switch statement
let color = "green";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
  case "white":
    console.log("color is white");
  default:
    console.log("color is not avcailable");
    break;
}

function myFunction(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "first";
      break;
    case 4:
    case 5:
    case 6:
      answer = "second";
      break;
    case 7:
    case 8:
    case 9:
      answer = "third";
      break;
    default:
      answer = "nonesense";
      break;
  }
  return answer;
}
console.log(myFunction(7));
// looping through an array

// OBJECTS - are like dictionaries in python, they are containers for properties.

const girl = { name: "faatihat", age: 12, sex: "female" };
console.log(
  girl.name + " is a " + girl.sex + " and she is " + girl.age + " years old "
);
// use "this" to cal an onj. it is a keyword

function try_func(lady = {}) {
  return lady.name + " is " + lady.complexion;
}
console.log(
  try_func({ name: "faatihat", age: 12, sex: "female", complexion: "dark" })
);

const lady = {
  name: "faatihat",
  age: 12,
  sex: "female",
  fullinfo: function () {
    return this.name + this.sex;
  },
};

console.log(lady.fullinfo()); //always call a function with (), unless it will cll the fxn def
// function objFunc() {
//   const car = {
//     name: "Toyota",
//     color: "red",
//     year: 2015,
//   };
//   return car.name + car.year;
// }
const car = {
  name: "Toyota",
  color: "red",
  year: 2015,
};

console.log(car.name);
car.name = "camry";
car.year = 1999;
console.log(car.name);
console.log(car.year);

const laptop = [
  {
    model: "hp",
    color: ["black", "red", "purple", "yellow"],
  },
  {
    model1: "acer",
    color1: "red",
  },
  {
    model2: "dell",
    color3: "white",
  },
];

console.log(laptop[0].color);
console.log(laptop[1].color1);

var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

myStorage["car"]["outside"]["trunk"];

// var collection = {
//   2548: {
//     album: "slippery when wet",
//     artist: "bon jovi",
//     tracks: ["let it rock", "you give love a bad name"],
//   },
//   2468: {
//     album: "1999",
//     artist: "prince",
//     tracks: ["1999", "little red corvette"],
//   },
//   1245: {
//     artist: "robert palmer",
//     tracks: [],
//   },
//   5439: {
//     album: "abba gold",
//   },
// };
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;
// for (let i = 0; i < fLen; i++) {
//   console.log(fruits[i]);
// }
// console.log(typeof fruits); //this returns obj
// // to get the type u use array.isarray or instance of
// console.log(Array.isArray(fruits));
// console.log(fruits instanceof Array);

// // quest
// var collection = {
//   2548: {
//     album: "slippery when wet",
//     artist: "bon jovi",
//     tracks: ["let it rock", "you give love a bad name"],
//   },
//   2468: {
//     album: "1999",
//     artist: "prince",
//     tracks: ["1999", "little red corvette"],
//   },
//   1245: {
//     artist: "robert palmer",
//     tracks: [],
//   },
//   5439: {
//     album: "abba gold",
//   },
// };
// function assFunc(id, prop, value) {
//   if (prop != "tracks" && value != "") {
//     return (collection.id[prop] = value);
//   }
//   if (prop == "tracks" && collection[id].hasOwnProperty("tracks") === false) {
//     collection.id[prop].push(value);
//     collection[id][prop];
//   }
//   if (prop == "tracks" && value != "") {
//     collection.id[prop].push(value);
//     collection[id][prop];
//   }
//   if (value == "") {
//     delete collection.id[drop];
//   }
//   return collection;
// }
// console.log(assFunc("2468", "tracks", "test"));

// text = "";
// let i = 0;
// while (i < 10) {
//   text += " hello i am number " + i;
//   i++;
// }
// console.log(text)

// f

var contacts = [
  {
    firstname: "akira",
    lastname: "laine",
    number: "0546908977",
    likes: ["pizza", "coding", "brownie points"],
  },
  {
    firstname: "harry",
    lastname: "potter",
    number: "0546908977",
    likes: ["hogwarts", "spell", "magical points"],
  },
  {
    firstname: "sherlock",
    lastname: "holmes",
    number: "0546908977",
    likes: ["intriguing cases", "murder", "pub"],
  },
  {
    firstname: "kristain",
    lastname: "vos",
    number: "0546908977",
    likes: ["laptop", "desktop", "voilin"],
  },
];
function mycontacts(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstname === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      return "no such property";
    }
  }
  return "no such contact";
}
console.log(mycontacts("sherlock", "lastname"));

// function rand() {
//   return Math.random();
// }
// console.log(rand());

// // arrow function
// const randFunction = () => Math.random()
// console.log(randFunction())

// const randFloor = () => {
//   return Math.floor(Math.random() * 20)
// }
// console.log(randFloor())

// function randnumb(max, min) {
//   return Math.floor(Math.random()*(max - min + 1))+min;
// }
// console.log(randnumb(10, 9));

// const randnumb = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randnumb(10, 9));

// use the parseint function with a radix
// function myFunct(val) {
//   return parseInt(val, 10);
// }
// console.log(myFunct("1003"));

// const myFunct = (val) => {
//   let result = parseFloat(val, 10);
//   return typeof result;
// };
// console.log(myFunct("1000"));

// function myFunct(val) {
//   let result = parseInt(val, 10);
//   return typeof result;
// }
// console.log(myFunct(1000));

// function myFunct(a, b) {
//   return a === b ? true : false;
// }
// console.log(myFunct(5, 5));

// const myFunct = (a, b) => (a === b ? true : false);
// console.log(myFunct(5, 5));

// function myFunct(n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return n + myFunct(n - 1);
//   }
// }
// console.log(myFunct(5));

// function myFunct(x, y) {
//   if (y == 1) {
//     return x;
//   } else {
//     return x * myFunct(x, y - 1);
//   }
// }
// console.log(myFunct(2, 4));

let company = [
  {
    sales: [
      {
        name: "john",
        salary: 1000,
      },
      {
        name: "alice",
        salary: 1600,
      },
    ],
    development: {
      sites: [
        {
          name: "peter",
          salary: 2000,
        },
        {
          name: "alex",
          salary: 1800,
        },
      ],
      internals: [
        {
          name: "jake",
          salary: 1300,
        },
      ],
    },
  },
];

// console.log(company[0]);
function myfunc(property, value){
  for (let i = 0; i < company.length; i++) {
    for (let j= 0; j < property[0][value].length; j++){
      console.log()
    }
}
}
myfunc("sales","name")
// console.log(company[0].development.sites[0].salary);
// console.log(company[0].development.internals[0].name)

// console.log(company[0].development.sites[0].salary);
// console.log(company[0].development.internals[0].name);

// // const myvar = [2, 3, 4];
// function myFunct() {
//   myvar[0] = 30;
//   myvar[1] = 40;
//   myvar[2] = 50;
// }
// myFunct();
// console.log(myvar);

// const varwr = "hello";
// function myfun(word) {
//   let varwr = "bye";
//   if (true) {
//     console.log(varwr);
//   }
//   console.log(word);
// }
// myfun("school");

// function myFunct(str) {
//   const SENTENCE = str + " is cool";
//   for (let i = 0; i < str.length; i++) {
//     console.log(SENTENCE);
//   }
// }
// myFunct("freecodecamp");
