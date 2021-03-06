var cerealCSV = "Cereal Name,Manufacturer,Type,Calories,Protein (g),Fat,Sodium,Dietary Fiber,Carbs,Sugars,Display Shelf,Potassium,Vitamins and Minerals,Serving Size Weight,Cups per Serving\n100%_Bran,Nabisco,C,70,4,1,130,10,5,6,3,280,25,1,0.33\n100%_Natural_Bran,Quaker Oats,C,120,3,5,15,2,8,8,3,135,0,1,-1\nAll-Bran,Kelloggs,C,70,4,1,260,9,7,5,3,320,25,1,0.33\nAll-Bran_with_Extra_Fiber,Kelloggs,C,50,4,0,140,14,8,0,3,330,25,1,0.5\nAlmond_Delight,Ralston Purina,C,110,2,2,200,1,14,8,3,-1,25,1,0.75\nApple_Cinnamon_Cheerios,General Mills,C,110,2,2,180,1.5,10.5,10,1,70,25,1,0.75\nApple_Jacks,Kelloggs,C,110,2,0,125,1,11,14,2,30,25,1,1\nBasic_4,General Mills,C,130,3,2,210,2,18,8,3,100,25,1.33,0.75\nBran_Chex,Ralston Purina,C,90,2,1,200,4,15,6,1,125,25,1,0.67\nBran_Flakes,Post,C,90,3,0,210,5,13,5,3,190,25,1,0.67\nCapnCrunch,Quaker Oats,C,120,1,2,220,0,12,12,2,35,25,1,0.75\nCheerios,General Mills,C,110,6,2,290,2,17,1,1,105,25,1,1.25\nCinnamon_Toast_Crunch,General Mills,C,120,1,3,210,0,13,9,2,45,25,1,0.75\nClusters,General Mills,C,110,3,2,140,2,13,7,3,105,25,1,0.5\nCocoa_Puffs,General Mills,C,110,1,1,180,0,12,13,2,55,25,1,1\nCorn_Chex,Ralston Purina,C,110,2,0,280,0,22,3,1,25,25,1,1\nCorn_Flakes,Kelloggs,C,100,2,0,290,1,21,2,1,35,25,1,1\nCorn_Pops,Kelloggs,C,110,1,0,90,1,13,12,2,20,25,1,1\nCount_Chocula,General Mills,C,110,1,1,180,0,12,13,2,65,25,1,1\nCracklin_Oat_Bran,Kelloggs,C,110,3,3,140,4,10,7,3,160,25,1,0.5\nCream_of_Wheat_(Quick),Nabisco,H,100,3,0,80,1,21,0,2,-1,0,1,1\nCrispix,Kelloggs,C,110,2,0,220,1,21,3,3,30,25,1,1\nCrispy_Wheat_&_Raisins,General Mills,C,100,2,1,140,2,11,10,3,120,25,1,0.75\nDouble_Chex,Ralston Purina,C,100,2,0,190,1,18,5,3,80,25,1,0.75\nFroot_Loops,Kelloggs,C,110,2,1,125,1,11,13,2,30,25,1,1Frosted_Flakes,Kelloggs,C,110,1,0,200,1,14,11,1,25,25,1,0.75\nFrosted_Mini-Wheats,Kelloggs,C,100,3,0,0,3,14,7,2,100,25,1,0.8\nFruitful_Bran,Kelloggs,C,120,3,0,240,5,14,12,3,190,25,1.33,0.67\nFruity_Pebbles,Post,C,110,1,1,135,0,13,12,2,25,25,1,0.75\nGolden_Crisp,Post,C,100,2,0,45,0,11,15,1,40,25,1,0.88\nGolden_Grahams,General Mills,C,110,1,1,280,0,15,9,2,45,25,1,0.75\nGrape_Nuts_Flakes,Post,C,100,3,1,140,3,15,5,3,85,25,1,0.88\nGrape-Nuts,Post,C,110,3,0,170,3,17,3,3,90,25,1,0.25\nGreat_Grains_Pecan,Post,C,120,3,3,75,3,13,4,3,100,25,1,0.33\nHoney_Graham_Ohs,Quaker Oats,C,120,1,2,220,1,12,11,2,45,25,1,1\nHoney_Nut_Cheerios,General Mills,C,110,3,1,250,1.5,11.5,10,1,90,25,1,0.75\nHoney-comb,Post,C,110,1,0,180,0,14,11,1,35,25,1,1.33\nJust_Right_Crunchy__Nuggets,Kelloggs,C,110,2,1,170,1,17,6,3,60,100,1,-1\nJust_Right_Fruit_&_Nut,Kelloggs,C,140,3,1,170,2,20,9,3,95,100,1.3,0.75\n\nKix,General Mills,C,110,2,1,260,0,21,3,2,40,25,1,1.5\nLife,Quaker Oats,C,100,4,2,150,2,12,6,2,95,25,1,0.67\nLucky_Charms,General Mills,C,110,2,1,180,0,12,12,2,55,25,1,1\nMaypo,American Home Food Products,H,100,4,1,0,0,16,3,2,95,25,1,-1\nMueslix_Crispy_Blend,Kelloggs,C,160,3,2,150,3,17,13,3,160,25,1.5,0.67\nMulti-Grain_Cheerios,General Mills,C,100,2,1,220,2,15,6,1,90,25,1,1\nNut_Honey_Crunch,Kelloggs,C,120,2,1,190,0,15,9,2,40,25,1,0.67\nNutri-Grain_Almond-Raisin,Kelloggs,C,140,3,2,220,3,21,7,3,130,25,1.33,0.67\nNutri-grain_Wheat,Kelloggs,C,90,3,0,170,3,18,2,3,90,25,1,-1\nOatmeal_Raisin_Crisp,General Mills,C,130,3,2,170,1.5,13.5,10,3,120,25,1.25,0.5\nPost_Nat_Raisin_Bran,Post,C,120,3,1,200,6,11,14,3,260,25,1.33,0.67\nProduct_19,Kelloggs,C,100,3,0,320,1,20,3,3,45,100,1,1\nPuffed_Rice,Quaker Oats,C,50,1,0,0,0,13,0,3,15,0,0.5,1\nPuffed_Wheat,Quaker Oats,C,50,2,0,0,1,10,0,3,50,0,0.5,-1\nQuaker_Oat_Squares,Quaker Oats,C,100,4,1,135,2,14,6,3,110,25,1,0.5\nQuaker_Oatmeal,Quaker Oats,H,100,5,2,0,2.7,-1,-1,1,110,0,1,0.67\nRaisin_Bran,Kelloggs,C,120,3,1,210,5,14,12,2,240,25,1.33,0.75\nRaisin_Nut_Bran,General Mills,C,100,3,2,140,2.5,10.5,8,3,140,25,1,0.5\nRaisin_Squares,Kelloggs,C,90,2,0,0,2,15,6,3,110,25,1,0.5\nRice_Chex,Ralston Purina,C,110,1,0,240,0,23,2,1,30,25,1,1.13\nRice_Krispies,Kelloggs,C,110,2,0,290,0,22,3,1,35,25,1,1\nShredded_Wheat,Nabisco,C,80,2,0,0,3,16,0,1,95,0,0.83,-1\nShredded_Wheat_'n'Bran,Nabisco,C,90,3,0,0,4,19,0,1,140,0,1,0.67\nShredded_Wheat_spoon_size,Nabisco,C,90,3,0,0,3,20,0,1,120,0,1,0.67\nSmacks,Kelloggs,C,110,2,1,70,1,9,15,2,40,25,1,0.75\nSpecial_K,Kelloggs,C,110,6,0,230,1,16,3,1,55,25,1,1\nStrawberry_Fruit_Wheats,Nabisco,C,90,2,0,15,3,15,5,2,90,25,1,-1\nTotal_Corn_Flakes,General Mills,C,110,2,1,200,0,21,3,3,35,100,1,1\nTotal_Raisin_Bran,General Mills,C,140,3,1,190,4,15,14,3,230,100,1.5,1\nTotal_Whole_Grain,General Mills,C,100,3,1,200,3,16,3,3,110,100,1,1\nTriples,General Mills,C,110,2,1,250,0,21,3,3,60,25,1,0.75\nTrix,General Mills,C,110,1,1,140,0,13,12,2,25,25,1,1\nWheat_Chex,Ralston Purina,C,100,3,1,230,3,17,3,1,115,25,1,0.67\nWheaties,General Mills,C,100,3,1,200,3,17,3,1,110,25,1,1\nWheaties_Honey_Gold,General Mills,C,110,2,1,200,1,16,8,1,60,25,1,0.75";




var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */ 

// setup x 
var xValue = function(d) { return d.Calories;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
var yValue = function(d) { return d["Protein (g)"];}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

// setup fill color
var cValue = function(d) { return d.Manufacturer;},
    color = d3.scale.category10();

// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// load data
let data = d3.csv.parse(cerealCSV, function(d) {
          return {
            Calories: +d.Calories,
            Carbs: +d.Carbs,
            "Cereal Name": d["Cereal Name"],
            "Cups per Serving": +d["Cups per Serving"],
            "Dietary Fiber": +d["Dietary Fiber"],
            "Display Shelf": +d["Display Shelf"],
            Fat: +d.Fat,
            Manufacturer: d.Manufacturer,
            Potassium: +d.Potassium, 
            "Protein (g)": +d["Protein (g)"],
            "Serving Size Weight": +d["Serving Size Weight"],
            Sodium: +d.Sodium,
            Sugars: +d.Sugars,
            Type: d.Type,
            "Vitamins and Minerals": +d["Vitamins and Minerals"]
          }
});


             

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Calories");

  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Protein (g)");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["Cereal Name"] + "<br/> (" + xValue(d) 
  + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

  // draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})