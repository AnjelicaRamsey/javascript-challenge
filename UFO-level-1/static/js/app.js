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


