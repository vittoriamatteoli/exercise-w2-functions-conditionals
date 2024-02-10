/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
  )
}
theCoders("Jennie", "Alfons")

/*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

// theCoders("Jennie"); -- undefined
/*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
const longerName = (driver, navigator) => {
  if (driver.lenght > navigator.lenght) {
    console.log(`${driver}  has the longest name.`)
  } else if (driver.lenght < navigator.lenght) {
    console.log(`${navigator}  has the longest name.`)
  } else {
    console.log(`${driver} and ${navigator} has equally long names`)
  }
}
longerName("Jennie", "Alfons")
/*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
*/
let user = {
  name: prompt("what's your name?"),
  age: parseInt(prompt("What's your age?")),
}

console.log(user.name)

const calculationTest = () => {
  if (user.age < 33) {
    alert(`Wow you are ${user.age}! that's young!`)
  } else if (user.age > 33) {
    alert(`Wow you are ${user.age}!Younger than Zlatan!`)
  }
}
calculationTest()

// 5)
// In this function we want to give the user a mathematical calculation to
// give us the answer to. Something like prompt('What is 5 + 6?')
// If the answer is correct, congratulate the user. 'Yay! Correct'
// If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
// You choose if to use addition, subtraction, multiplication or division.
//

const calculation = (a, b) => {
  return a * b
}

let result = calculation(10, 2)
result = prompt(`How much is 10 x 2?`)
if (result === 20) {
  alert(`yeaaaaaa, correct!`)
} else {
  alert(`Noooo, the correct answer was 20`)
}

/*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
