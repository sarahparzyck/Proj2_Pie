// Submit Button handler
function onChange() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  //Use D3 to select the dropdown menu
  var dropdownMenu = d3.selectAll("#dropDown1").node();
  // Assign the dropdown menu option to a variable
  var selectedOption = dropdownMenu.value;
  
  // Create the plots based on selections
  BuildPie(selectedOption);
  };


async function BuildPie(state) {
  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  var URL = 'https://wildfire-api-3.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  alert(URL);
  var data = await d3.json(url);
    console.log(data);

  // Grab values from the response csv object to build the plots
  var cause1 = data.map(row => row[0]);;

  // Sort and count each cause in cause1
  function counter(h, n, u) {
    return json.export.filter(function(elem) {
      return elem.human===h && elem.natural===n && elem.unknown===u;
    }).length;
  }

  // Create trace for pie plot
  var trace1 = {
    type: "pie",
    values: "",
    labels: cause1,
  };

  var data = [trace1];

  var layout = {
    title: `${state}`,
    height: 600,
    width: 800
    }

  Plotly.newPlot("plot", data, layout);
};

// Create two drop downs
function GetURL(){
  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  var URL = 'https://wildfire-api-3.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  alert(URL);

  d3.csv(URL).then((data) => {
    console.log(data);

    var dropdown = d3.select("#dropDown1");
    
    data.names.forEach(function(state) {
      dropdown.append("option").text(state).property("value");
    });

  // Create the plots based on the first state
  let state = data.state[0];
  // Create the plots based on state
  BuildPie(state);

})};

// Add event listener for submit button
d3.selectAll("body").on("change", onChange);