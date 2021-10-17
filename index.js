/* global Chart, axios, Utils */

let allTheStars = [];
let allTheForks = [];
let allWatchers = [];
let names = [];

function vuejsInfo() {
  return axios.get("https://api.github.com/repos/vuejs/vue");
}
function angularInfo() {
  return axios.get("https://api.github.com/repos/angular/angular.js");
}
function emberInfo() {
  return axios.get("https://api.github.com/repos/emberjs/ember.js");
}
function svelteInfo() {
  return axios.get("https://api.github.com/repos/sveltejs/svelte");
}
function reactInfo() {
  return axios.get("https://api.github.com/repos/facebook/react");
}

Promise.all([vuejsInfo(), angularInfo(), emberInfo(), svelteInfo(), reactInfo()])
  .then(function (response) {
    // console.log(response);
    for (const framework of response) {
      names.push(framework.data.name);
      allTheStars.push(framework.data.stargazers_count);
      allTheForks.push(framework.data.forks);
      allWatchers.push(framework.data.watchers);
    }
  });


const data = {
  labels: names,
  datasets: [
    {
      label: 'Stars',
      data: allTheStars,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'Forks',
      data: allTheForks,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(153, 102, 255, 0.2)',
    },
    {
      label: 'Watchers',
      data: allWatchers,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
    }
  ]
};

var myVar;

function makeChartAwait() {
  myVar = setTimeout(chartRender, 2000);
}

function chartRender() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  document.getElementById('header').style.display = "none";
}