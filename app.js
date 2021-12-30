
document.getElementById("submit").addEventListener("click", function() {
  alert("You clicked me!");
});
// Setting/clearing Timeouts and Intervals
let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2000, 'That was really slow!');
}

function clearMessage() {
  clearTimeout(timeoutID);
}
//setIntervals

let para = document.querySelector(".count");
let count = 0, clear;

document.querySelector(".start").addEventListener("click", () => {
  clear = setInterval(ValueCount, 1000);
});

document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(clear);
});

function ValueCount(){
  count++;
  para.innerHTML = count;
};


// The this Keyword
  //create object
  const user = {
    //these are properties within the object
    name: 'Rick',
    age: 33, 
    city: 'St. Louis',
    married: false,
    purchases: ['phone', 'car', 'shoes'],

    sayName: function() {
      console.log(this.name);
    },

    saymyAge: function() {
      console.log(`My age is ${this.age}`)
    }
  };

  user.sayName(); //when the function gets invoked is when the this is active. 
  console.log(user['purchases'][1]);
  console.log(user.purchases);

  //create a forloop
  for (let i = 0; i < user['purchases'].length; i++) {
    console.log(`my #${i + 1} favorite item is ${user['purchases'][i]}`);
  };

  // Using objects and properties with both object dot notation and bracket notation
  //dot notation
  console.log(`Hi, I am ${user.name}.\nI am ${user["age"]} and I live in ${user.city}`);

  //functions that are attached to an object are called methods.
  // console.log(user.purchases) shows the purchased items from above.

  //THIS
  console.log(this); //refers to the window.  to access the object this, then create a function inside the object. 

  user.saymyAge();

// JSON, Parsing, Stringifying
// Convert JSON to string
  let userObj = JSON.stringify(user);

  console.log(userObj);

  // Parse string to JSON
  let parseObj = JSON.parse(userObj);

  JSON.parse(userObj);
  console.log(parseObj);

// Built-In Array Iterators (forEach, IndexOf, Find, Map, Filter, Reduce, Some)

//forEach
// const numbers = [3, 4, 99, 32, 55];

// let txt = "";
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = txt;

// function myFunction(value) {
//   txt += value + "<br>"; 
// }
// //IndexOf
// const sum = numbers.indexOf(62958);

// function myFunction(value) {
//   return sum
// };
// //Find
// let first = numbers.find(myFunction);

// document.getElementById("demo").innerHTML = "First number over 18 is " + first;

// function myFunction(value, index, array) {
//   return value > 18;
// }
// //map
// const numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value, index, array) {
//   return value * 2;
// }
// //filter
// const over18 = numbers.filter(myFunction);

// document.getElementById("demo").innerHTML = over18;

// function myFunction(value, index, array) {
//   return value > 18;
// }
// //reduce
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }
// //some 
// let someOver18 = numbers.some(myFunction);

// document.getElementById("demo").innerHTML = "Some over 18 is " + someOver18;

// function myFunction(value, index, array) {
//   return value > 18;
// }

// Prevent form postback with preventDefault
// document.querySelector("#newsletter").addEventListener("click", function(noCheck) {
//   document.getElementById("output-area").innerHTML += "Sorry! You cannot select this at this time!<br>";
//   noCheck.preventDefault();
// }, false);


// Promises
//SINGLE PROMISE
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 - Good to go');
  }, 1000);

  setTimeout(() => {
    reject('Ohhhh nooooo')
  }, 1500);
})

// myPromise.then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log(err);
// })

//with catch
// myPromise.then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err)
// });


//MULTIPLE PROMISES
let myPromise2 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 - also good');
  }, 1500);
});

Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  });

// Async/Await

async function fetchUsers(url) {
  const res = await fetch(url);
  let data = await res.json();

  data = data.map(brewery => brewery.name);

  console.log(data);
}

fetchUsers('https://api.openbrewerydb.org/breweries');




