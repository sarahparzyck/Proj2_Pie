<<<<<<< HEAD
// =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=
// Create a function to read in the JSON using D3

function CreateURL(state, year) {  

=======
// Submit Button handler

async function CreateURL(state, year) {
>>>>>>> 8d36b1208cf1d65da90fa8c59e10eb2b39bd73fe
  var state = document.getElementById('dropDown1').value;
  console.log(state);

  var year = document.getElementById('dropDown2').value;
  console.log(year);
<<<<<<< HEAD

  const url = 'https://datavisproject2.herokuapp.com/api/v1.0/interactive_pie/'+state+'/'+year;  
  d3.json(url).then((data) => {
    console.log(data);
  });

  buildPieChart(state, year);
};
=======
  console.log(state);
  var url = 'https://datavisproject2.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  console.log(url);
  await d3.json(url).then(data=>console.log(data));

  // Create the plots based on selections
  BuildPie(state, year);

};


async function BuildPie(state, year) {

  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  console.log(year);
  console.log(state);
  var url = 'https://datavisproject2.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  console.log(url);
  var data = await d3.json(url);
  console.log(data)
>>>>>>> 8d36b1208cf1d65da90fa8c59e10eb2b39bd73fe

// =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=
// Create a function to populate the pie charts with corresponding values for the selected state and year
function buildPieChart() {

<<<<<<< HEAD
  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  const url = 'https://datavisproject2.herokuapp.com/api/v1.0/interactive_pie/'+state+'/'+year;
  d3.json(url).then((data) => {

    var state = Object.values(data[0])[7]
    data.map(x => x[state]);
    console.log(state);

    var countNatural = 0;
    var countHuman = 0
    var countUnknown = 0

    // Define the count of fires by cause (Level 1 cause)
    data.forEach(data => {
      var fireCause = data.cause1
      console.log(fireCause);
        if (fireCause === "Human") {
          countHuman = countHuman + 1;
        }        
        else if (fireCause === "Natural") {
          countNatural = countNatural + 1;
        }    
        else {
          countUnknown = countUnknown + 1;
        }
    });    
    console.log(countHuman, countNatural, countUnknown);

    // Define the attributes for values, labels, type, markers, text and labels
    var pieData = [{
      values: [countHuman, countNatural, countUnknown],
      labels: ["Human", "Natural", "Undetermined"],
      type: "pie",
      font: {family: "Calibri", size: 19, },
      textinfo: "label+percent",
      textposition: "inside",
      marker: {colors: ["#DB2E27", "#74B643", "#FFE571"]},
      automargin: false
    }]
    
    // Define the layout of the plot
    let pieLayout = {
      title: `${state}`,
      height: 470,
      width: 470,
      margin: {"t": 0, "b": 0, "l": 0, "r": 0},
      showlegend: false
      }
    
    var config ={responsive:true}

    // Render the plot to the div tag with id "pie"
    Plotly.plot('pie', pieData, pieLayout)
  })
}

// =-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=-+-=
// Add an event listener for submit button
d3.selectAll("body").on("change", CreateURL);
=======
  // Grab values from the response json object to build the plots

  var state = Object.values(data[0])[7]
  data.map(x => x[state]);
  console.log(state);



  // Trying to figure out how to count these still - right now it is making a pie chart but all are 0 therefore 33.3% each
  var statistics = Object.values(data).reduce(function (stats, value) {
    var item = data[value];
    if (item === 'Natural') {
      stats.Natural += 1;
  
    if (item === 'Human') {
        stats.Human += 1;

    if (item === 'Unknown') {
        stats.Unknown += 1;
      }
    }
  }
    return stats;
  }, { Natural: 0, Human: 0, Unknown: 0 });
  
  console.log('statistics : ', statistics);

  // Create trace for pie plot
  var trace1 = {
    type: "pie",
    values: statistics,
    labels: ["Natural", "Human", "Unknown"]
  };

  var data_two = [trace1];

  var layout = {
    title: `${state}`,
    height: 600,
    width: 800
    }

  Plotly.newPlot("pie", data_two, layout);
};


// Add event listener for submit button - this button is still weird and doesn't wait for the button to actually be pressed
d3.selectAll("body").on("click", CreateURL);
>>>>>>> 8d36b1208cf1d65da90fa8c59e10eb2b39bd73fe
