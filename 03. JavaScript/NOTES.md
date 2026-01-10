# Variables

```jsx
let myAge = 35
const name = "Ehsan"

// if possible, use const. If not, use let. 

console.log(myAge)
```

# If/ else if

```jsx
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 6 // 23

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
```

# Functions

```jsx
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

// Setting up the the race 🏎 🏎 🏎

countdown()

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown()
```

## Function Parameters and Arguments

```jsx
//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")

function add(num1, num2) {
    return num1 + num2
}

add(3, 4)
```

![image.png](attachment:cd2fd1da-403c-4b00-b3f3-0a9329160ca5:image.png)

# The DOM (Document Object Model)

- How you use JavaScript to modify a website

```jsx
document.getElementById("count-el")
```

![image.png](attachment:059f0e70-9fff-478e-84cc-73ebf5af9567:image.png)

- What you are interacting with is an HTML document.

![image.png](attachment:516075c1-9018-4fee-89b6-218083efbaa9:image.png)

- `document` is of the datatype `object`

![image.png](attachment:089116ab-2439-4d6f-a93e-1333ef3ea33e:image.png)

![image.png](attachment:bfebd176-3353-4024-bcd9-24e3f3cf38e8:image.png)

# Strings

- When concatenating `numbers` and `strings` , strings always win.

```jsx
let points = 4
let bonusPoints = "10"

let totalPoints = points + bonusPoints

console.log(totalPoints)

> 410
```

## Escape Character (/)

```jsx
let wish = "I'd love to see the show \"The Lion King\"."
console.log(wish)
```

## Template Strings

```jsx
// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
//const email = "Hey " + recipient + "! How is it going? Cheers Per"
const email = `Hey ${recipient}! How is it going? Cheers Per`
console.log(email)

//Another Example

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
     // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

```

# Arrays

```jsx
let person = ["Ehsan", 24, true]

conole.log(person[1])

> 24
```

## Array Method

```jsx
person.push("Lexington")
person.pop() // removes the last element
person.pop() // adds to the end of the array
person.shift() // removes the first element
person.unshift() // adds to the beginnig of the array
```

# For Loop

```jsx
//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {

    console.log(count)
}
```

## For Loop with Array

```jsx
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i])
}
```

# Math.random()

![image.png](attachment:0df8b83c-7ebb-4d13-9e14-e94bf486ded6:image.png)

# Logical Operators

## AND (&&)

```jsx
let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}
```

## OR (||)

```jsx
let likesDocumentaries = fals
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}
```

# Objects

```jsx
 let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log( course.length )
> 63

console.log( course.tags )
> ['html', 'css']

console.log( course["tags"] ) // Bracket Notation 
> ['html', 'css']
```

# Methods

Functions attached to Objects

```jsx
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}

player.sayHello()
```

# Recap

![image.png](attachment:3ab19326-7806-4681-815b-0ff61cbc1cfe:image.png)

# Local Storage

```jsx
localStorage.setItem("name", "Ehsan")
console.log(localStorage.getItem("name"))
localStorage.clear()

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
```

# `JSON.parse()` and `JSON.stringify()`

```jsx
let myLeads = `["www.awesomelead.com"]`

// 1. Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
myLeads.push("www.google.com")
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
console.log(typeof(myLeads))
> string
```

# Truthy and Falsy Values

```jsx
const credits = 2

if (credits) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

// falsy: 
	// false
	// 0
	// ""
	// null -> how you as a developer signalize emptiness
	// undefined -> how JavaScript signalizes emptiness
	// NaN
	
//null
let currentViewers = null

currentViewers = ["jane", "nick"]

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}

//undefined
let currentViewers
console.log(currentViewers)

let currentViewers = {}
console.log(currentViewers.randomKey)

let currentViewers = ["Ehsan"]
console.log(currentViewers[5])
```

## Checking if a value is truthy or falsy

```jsx
console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false
```

# Recap

![image.png](attachment:e1735652-fa31-4c11-a98d-9db7c9621015:image.png)