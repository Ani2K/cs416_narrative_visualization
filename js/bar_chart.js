var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Set ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);

const bar_svg = d3.select("#bar_chart_area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

// Get data
d3.csv("data/barchart_male_data.csv").then(function(data) {

  // Format data
  data.forEach(function(d) {
    d.Salary = +d.Salary;
  });

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.Education; }));
  y.domain([0, d3.max(data, function(d) { return d.Salary; })]);

  // Append rectangles for bar chart
  bar_svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.Education); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.Salary); })
      .attr("height", function(d) { return height - y(d.Salary); });

  // Add x axis
  bar_svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add y axis
  bar_svg.append("g")
      .call(d3.axisLeft(y));

});

function updateBarMaleData() {
	// Set graph margins and dimensions
	var margin = {top: 20, right: 20, bottom: 30, left: 80},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	// Set ranges
	var x = d3.scaleBand()
		.range([0, width])
		.padding(0.1);
	var y = d3.scaleLinear()
		.range([height, 0]);
	// d3.selectAll("#bar_chart_area").clear();
	bar_svg.selectAll("*").remove();
	bar_svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Get data
	d3.csv("data/barchart_male_data.csv").then(function(data) {

	// Format data
	data.forEach(function(d) {
	d.Salary = +d.Salary;
	});

	// Scale the range of the data in the domains
	x.domain(data.map(function(d) { return d.Education; }));
	y.domain([0, d3.max(data, function(d) { return d.Salary; })]);
	console.log(d3.max(data, function(d) { return d.Salary; }))

	// Append rectangles for bar chart
	bar_svg.selectAll(".bar")
	.data(data)
	.enter().append("rect")
	.attr("class", "bar")
	.attr("x", function(d) { return x(d.Education); })
	.attr("width", x.bandwidth())
	.attr("y", function(d) { return y(d.Salary); })
	.attr("height", function(d) { return height - y(d.Salary); });

	// Add x axis
	bar_svg.append("g")
	.attr("transform", "translate(0," + height + ")")
	.call(d3.axisBottom(x));

	// Add y axis
	bar_svg.append("g")
	.call(d3.axisLeft(y));

	});
}

function updateBarFemaleData() {
	// Set graph margins and dimensions
	var margin = {top: 20, right: 20, bottom: 30, left: 80},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	// Set ranges
	var x = d3.scaleBand()
		.range([0, width])
		.padding(0.1);
	var y = d3.scaleLinear()
		.range([height, 0]);
	// d3.selectAll("#bar_chart_area").clear();
	bar_svg.selectAll("*").remove();
	bar_svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// Get data
	d3.csv("data/barchart_female_data.csv").then(function(data) {

	// Format data
	data.forEach(function(d) {
	d.Salary = +d.Salary;
	});

	// Scale the range of the data in the domains
	x.domain(data.map(function(d) { return d.Education; }));
	y.domain([0, d3.max(data, function(d) { return d.Salary; })]);

	// Append rectangles for bar chart
	bar_svg.selectAll(".bar")
	.data(data)
	.enter().append("rect")
	.attr("class", "bar")
	.attr("x", function(d) { return x(d.Education); })
	.attr("width", x.bandwidth())
	.attr("y", function(d) { return y(d.Salary); })
	.attr("height", function(d) { return height - y(d.Salary); });

	// Add x axis
	bar_svg.append("g")
	.attr("transform", "translate(0," + height + ")")
	.call(d3.axisBottom(x));

	// Add y axis
	bar_svg.append("g")
	.call(d3.axisLeft(y));

	});
}