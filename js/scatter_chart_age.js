// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
const scatter_age_svg = d3.select("#scatter_chart_age_area")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

//Read the data
d3.csv("data/scatterplot_age_male_data.csv").then( function(data) {

// Add X axis
const x = d3.scaleLinear()
.domain([20, 64])
.range([ 0, width ]);
scatter_age_svg.append("g")
.attr("transform", `translate(0, ${height})`)
.call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
.domain([0, 260000])
.range([ height, 0]);
scatter_age_svg.append("g")
.call(d3.axisLeft(y));

// Add dots
scatter_age_svg.append('g')
.selectAll("dot")
.data(data)
.join("circle")
.attr("cx", function (d) { return x(d.Age); } )
.attr("cy", function (d) { return y(d.Salary); } )
.attr("r", 1.5)
.style("fill", "#69b3a2")

});

function updateScatterAgeMaleData() {
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 30, left: 80},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  scatter_age_svg.selectAll("*").remove();
  scatter_age_svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //Read the data
  d3.csv("data/scatterplot_age_male_data.csv").then( function(data) {

  // Add X axis
  const x = d3.scaleLinear()
  .domain([20, 64])
  .range([ 0, width ]);
  scatter_age_svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 260000])
  .range([ height, 0]);
  scatter_age_svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  scatter_age_svg.append('g')
  .selectAll("dot")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.Age); } )
  .attr("cy", function (d) { return y(d.Salary); } )
  .attr("r", 1.5)
  .style("fill", "#69b3a2")

  });
}

function updateScatterAgeFemaleData() {
  // set the dimensions and margins of the graph
  var margin = {top: 20, right: 20, bottom: 30, left: 80},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  scatter_age_svg.selectAll("*").remove();
  scatter_age_svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

  //Read the data
  d3.csv("data/scatterplot_age_female_data.csv").then( function(data) {

  // Add X axis
  const x = d3.scaleLinear()
  .domain([20, 64])
  .range([ 0, width ]);
  scatter_age_svg.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3.scaleLinear()
  .domain([0, 260000])
  .range([ height, 0]);
  scatter_age_svg.append("g")
  .call(d3.axisLeft(y));

  // Add dots
  scatter_age_svg.append('g')
  .selectAll("dot")
  .data(data)
  .join("circle")
  .attr("cx", function (d) { return x(d.Age); } )
  .attr("cy", function (d) { return y(d.Salary); } )
  .attr("r", 1.5)
  .style("fill", "#69b3a2")

  });
}