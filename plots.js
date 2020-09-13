// Submit Button handler

async function CreateURL(state, year) {
  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  console.log(year);
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
