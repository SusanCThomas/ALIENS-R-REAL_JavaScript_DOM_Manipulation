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