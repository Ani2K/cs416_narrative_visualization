// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
const scatter_svg = d3.select("#scatter_chart_area")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv("data/scatterplot_male_data.csv").then( function(data) {

// Add X axis
const x = d3.scaleLinear()
.domain([0, 34])
.range([ 0, width ]);
scatter_svg.append("g")
.attr("transform", `translate(0, ${height})`)
.call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
.domain([0, 260000])
.range([ height, 0]);
scatter_svg.append("g")
.call(d3.axisLeft(y));

// Add dots
scatter_svg.append('g')
.selectAll("dot")
.data(data)
.join("circle")
.attr("cx", function (d) { return x(d.Experience); } )
.attr("cy", function (d) { return y(d.Salary); } )
.attr("r", 1.5)
.style("fill", "#69b3a2")

});

function updateScatterMaleData() {
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 30, left: 80},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  scatter_svg.selectAll("*").remove();
  scatter_svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //Read the data
  d3.csv("data/scatterplot_male_data.csv").then( function(data) {

  // Add X axis
  const x = d3.scaleLinear()
  .domain([0, 34])
  .range([ 0, width ]);
  scatter_svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 260000])
  .range([ height, 0]);
  scatter_svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  scatter_svg.append('g')
  .selectAll("dot")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.Experience); } )
  .attr("cy", function (d) { return y(d.Salary); } )
  .attr("r", 1.5)
  .style("fill", "#69b3a2")

  });
}

function updateScatterFemaleData() {
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 30, left: 80},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  scatter_svg.selectAll("*").remove();
  scatter_svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //Read the data
  d3.csv("data/scatterplot_female_data.csv").then( function(data) {

  // Add X axis
  const x = d3.scaleLinear()
  .domain([0, 34])
  .range([ 0, width ]);
  scatter_svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 260000])
  .range([ height, 0]);
  scatter_svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  scatter_svg.append('g')
  .selectAll("dot")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.Experience); } )
  .attr("cy", function (d) { return y(d.Salary); } )
  .attr("r", 1.5)
  .style("fill", "#69b3a2")

  });
}