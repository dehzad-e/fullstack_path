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
let currentViewer
console.log(currentViewers)

let currentViewerss = {}
console.log(currentViewers.randomKey)

let currentViewersss = ["Ehsan"]
console.log(currentViewers[5])