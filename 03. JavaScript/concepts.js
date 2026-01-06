// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const containerEl = document.getElementById("container")
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]


function renderIamges() {
    for (let i = 0; i < imgs.length; i++) {
        containerEl.innerHTML += `<img class="team-img" src="${imgs[i]}">`
    }
}

renderIamges()


// Refactored - minimize manipulating the DOM as much as possible
