// from data.js
var tableData = data;

// YOUR CODE HERE!

// from data.js
var tableData = data;
console.log(tableData);

// Referene table boddy 
var tbody = d3.select("tbody");

// Use data values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object. TR links to the html
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    //The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). 
    //Mozilla 
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // "td" defines standard data cell in html table 
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
//  #filter-btn selects from html string
// reference back to Activity 9 
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});
