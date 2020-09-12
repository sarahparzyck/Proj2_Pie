// Submit Button handler
// function GetURL() {


//   //Use D3 to select the dropdown menu
//   var dropdownMenu = d3.selectAll("#dropDown1").node();
//   // Assign the dropdown menu option to a variable
//   var selectedOption = dropdownMenu.value;
//   console.log(selectedOption);
//   // // Create the plots based on selections
//   // BuildPie(selectedOption);
//   };

function CreateURL(state, year) {
  var state = document.getElementById('dropDown1').value;
  var year = document.getElementById('dropDown2').value;
  console.log(year);
  console.log(state);
  var url = 'https://wildfire-api-3.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  d3.json(url).then((data) => {
    console.log(data);

})};

// function BuildPie(state, year) {


//   // var state = data.map(row => row[8]);
//   // var year = data.map(row => row[9]);

//   // Grab values from the response csv object to build the plots
  
//   var cause1 = data.map(row => row[0]);

//   // Sort and count each cause in cause1
//   var statistics = Object.keys(data).reduce(function (stats, key) {
//     var item = data[key];
//     if (item.cause1 === 'Natural') {
//       stats.Natural += 1;
  
//     if (item.cause1 === 'Human') {
//         stats.Human += 1;

//     if (item.cause1 === 'Unknown') {
//         stats.Unknown += 1;
//       }
//     }
//   }
//     return stats;
//   }, { Natural: 0, Human: 0, Unknown: 0 });
  
//   console.log('statistics : ', statistics);


//   // function counter(h, n, u) {
//   //   return json.export.filter(function(elem) {
//   //     return elem.human===h && elem.natural===n && elem.unknown===u;
//   //   }).length;
//   // }

//   // Create trace for pie plot
//   var trace1 = {
//     type: "pie",
//     values: statistics,
//     labels: cause1,
//   };

//   var data = [trace1];

//   var layout = {
//     title: `${state}`,
//     height: 600,
//     width: 800
//     }

//   Plotly.newPlot("plot", data, layout);
// };

// Add event listener for submit button
d3.selectAll("body").on("change", CreateURL);

// Create one drop downs
// function GetURL(){
//   var state = document.getElementById('dropDown1').value;
//   var year = document.getElementById('dropDown2').value;
//   var url = 'https://wildfire-api-3.herokuapp.com/api/v1.0/interactive_pie/' + state + '/' + year;
  
//   d3.json(url).then((data) => {
//     console.log(data);
//     console.log(url);

//     var dropdown = d3.select("#dropDown1");
    
//     data.st.forEach(function(state) {
//       dropdown.append("option").text(st).property("value");
//     });

//   // Create the plots based on the first state
//   let state = data.st[0];
//   // Create the plots based on state
//   BuildPie(state);

// })};

