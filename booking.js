/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// Initialize variables

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


//This code Iniializes variables that the user will click. It also adds listeners for day buttons, the clear button, the half day button and full day button that work as intented via the prompt.
//Also added the challange that when you click the same day more than once it'll not add extra cost but instead clear the cost and the day.

let dailyRate = 35;
let selectedDays = new Set();

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const dayButtons = document.querySelectorAll('.day-selector li');

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const day = button.id;
        if (!selectedDays.has(day)) {
            selectedDays.add(day);
            button.classList.add('clicked');
        } else {
            selectedDays.delete(day);
            button.classList.remove('clicked');
        }
        recalculateCost();
    });
});

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
    selectedDays.clear();
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    recalculateCost();
});

halfButton.addEventListener('click', function() {
    dailyRate = 20;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    recalculateCost();
});

fullButton.addEventListener('click', function() {
    dailyRate = 35;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    recalculateCost();
});

function recalculateCost() {
    const totalCost = selectedDays.size * dailyRate;
    calculatedCostElement.innerHTML = totalCost;
}
