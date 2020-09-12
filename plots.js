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


  // Grab values from the response csv object to build the plots
  
  var cause1 = Object.values(data[0])[0]
  data.map(x => x[cause1]);
  console.log(cause1);

  var state = Object.values(data[0])[8]
  data.map(x => x[state]);
  console.log(state);


  // Sort and count each cause in cause1
  var statistics = Object.values(data).reduce(function (stats, key) {
    var item = data[key];
    if (item.cause1 === 'Natural') {
      stats.Natural += 1;
  
    if (item.cause1 === 'Human') {
        stats.Human += 1;

    if (item.cause1 === 'Unknown') {
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


// Add event listener for submit button
d3.selectAll("body").on("click", CreateURL);



  // function counter(h, n, u) {
  //   return json.export.filter(function(elem) {
  //     return elem.human===h && elem.natural===n && elem.unknown===u;
  //   }).length;
  // }