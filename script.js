/*
Assignment 3: The Pizza Maker 
Course: COMP1073 Client-Side JavaScript
Student #: 200373088
Name: Matthew Antonis
Due Date: 2023-11-22
*/

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Display student information as soon as the DOM is loaded
    document.getElementById('studentInfo').innerHTML = 'Student ID: 200373088, Name: Matthew Antonis';

    // Add an event listener for the pizza order form submission
    document.getElementById('pizzaForm').addEventListener('submit', function(event){
        event.preventDefault(); // Prevent the default form submission action

        // Collect data from the form
        let formData = new FormData(this);
        let size = formData.get('size');
        let crust = formData.get('crust');
        let sauce = formData.get('sauce');
        let extraCheese = formData.get('cheese') ? 'Yes' : 'No'; // Check if extra cheese was selected
        let toppings = formData.getAll('toppings').join(', ');

        // Create a new Pizza object with the collected data
        let pizza = new Pizza(size, toppings, crust, sauce, extraCheese);

        // Display the ordered pizza details
        document.getElementById('studentInfo').innerHTML = 
            `Your pizza:<br>Size - ${pizza.size}<br>Toppings - ${pizza.toppings}<br>Crust - ${pizza.crust}<br>Sauce - ${pizza.sauce}<br>Extra Cheese - ${pizza.extraCheese}`;
    });
});

// Define the Pizza class
class Pizza {
    constructor(size, toppings, crust, sauce, extraCheese) {
        this.size = size; // Pizza size
        this.toppings = toppings; // Pizza toppings
        this.crust = crust; // Type of crust
        this.sauce = sauce; // Type of sauce
        this.extraCheese = extraCheese; // Whether extra cheese is added
    }
}