// from data.js
var tableData = data;

console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through each UFO `data` and console.log each ufo-sighting object
// Creating the empty rows for tableData
tableData.forEach((ufoSightings) => {
    console.log(ufoSightings);
    // Using d3 to append one table row `tr` for each ufo-sighting object
    var row = tbody.append("tr");
    // Using the `Object.entries` to console.log each UFO Sighting object
    Object.entries(ufoSightings).forEach(([key, value]) => {
        console.log(key, value);
        // Appending a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` 
// column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Button to return to full table
var fullTable = d3.select("full-btn");
// Select the Full table return
fullTable.on("click", function () {
    filteredData(tableData);
});

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();