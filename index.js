/* global Chart, axios, Utils */

let allTheStars = [];
let allTheForks = [];
let allWatchers = [];
let names = [];

axios.get('https://api.github.com/repos/vuejs/vue').then(function (response) {
  names.push(response.data.name);
  allTheStars.push(response.data.stargazers_count);
  allTheForks.push(response.data.forks);
  allWatchers.push(response.data.watchers);
});

axios.get('https://api.github.com/repos/angular/angular.js').then(response => {
  names.push(response.data.name);
  allTheStars.push(response.data.stargazers_count);
  allTheForks.push(response.data.forks);
  allWatchers.push(response.data.watchers);
});

axios.get('https://api.github.com/repos/emberjs/ember.js').then(response => {
  names.push(response.data.name);
  allTheStars.push(response.data.stargazers_count);
  allTheForks.push(response.data.forks);
  allWatchers.push(response.data.watchers);
});

axios.get('https://api.github.com/repos/sveltejs/svelte').then(response => {
  names.push(response.data.name);
  allTheStars.push(response.data.stargazers_count);
  allTheForks.push(response.data.forks);
  allWatchers.push(response.data.watchers);
});

axios.get('https://api.github.com/repos/facebook/react').then(response => {
  names.push(response.data.name);
  allTheStars.push(response.data.stargazers_count);
  allTheForks.push(response.data.forks);
  allWatchers.push(response.data.watchers);
});


console.log("here are all the names");
console.log(names);
console.log("here are all the stars");
console.log(allTheStars);
console.log("Here are all the forks:")
console.log(allTheForks);
console.log("Here are all the watchers:")
console.log(allWatchers);

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
