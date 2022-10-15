/* Part 2 */
console.log('PART 2')
// Start a loop that goes from 1 to 20
for (let i = 1; i < 21; i++) {
    // Send the number to the console
    console.log(i)
}

/* Part 3 */
console.log('PART 3')
// List of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// loop that goes through the list of numbers
for (let i = 0; i < numbers.length; i++) {
    // Checks if number is devisable by both 3 and 5
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
        console.log("eplekake")
    // Checks if number is devisable by 3
    } else if (numbers[i] % 3 === 0) {
        console.log("eple")
    // Checks if number is devisable by 5
    } else if (numbers[i] % 5 === 0) {
        console.log("kake")
    // If number is not devisable by 3 or 5
    } else {
        console.log(numbers[i]);1
    }
}

/* Part 4 */
// Grab elements from HTML
const header = document.getElementById('title')
// Change the grabbed element
header.innerText = 'Hello, JavaScript'

/* Part 5 */

/* DISPLAY BUTTON */
// Grab button element from HTML
const disp_button = document.getElementById('button_disp')
// Add event listener to button
disp_button.addEventListener('click', changeDisplay)

// Function that changes the display of the div
function changeDisplay () {
    // Grab element to change
    const div = document.getElementById('magic')
    // Change element
    div.style.display = 'none'
}

/* VISIBILITY BUTTON */
// Grab button element from HTML
const visib_button = document.getElementById('button_visib')
// Add event listener to button
visib_button.addEventListener('click', changeVisibility)

// Function that changes the visibility of the div
function changeVisibility () {
    // Grab element to change
    const div = document.getElementById('magic')
    // Change element
    div.style.visibility = 'hidden'
    div.style.display = 'block'
}

/* RESET BUTTON */
// Grab button element from HTML
const reset_button = document.getElementById('button_reset')
// Add event listener to button
reset_button.addEventListener('click', reset)

// Function that resets the div
function reset () {
    // Grab element to change
    const div = document.getElementById('magic')
    // Change element
    div.style.display = 'block'
    div.style.visibility = 'visible'
}

/* Part 6 */
// List of elements to be added
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

// Grab element to add to
const list = document.getElementById('tech')
// Iterate trough all elements in the list
for (let i = 0; i < technologies.length; i++) {
    // Create a new list element
    const li = document.createElement('li')
    // Add text to the list element
    li.innerText = technologies[i]
    // Add the list element to the list
    list.appendChild(li)
}