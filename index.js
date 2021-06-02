/* global Chart, axios */

axios.get('https://api.github.com/repos/vuejs/vue').then(function (response) {
  console.log(response.data);
  let vueWatchers = response.data.watchers;
  let vueForks = response.data.forks;
  let vueStars = response.data.stargazers_count;
  console.log("vue info:");
  console.log(vueForks);
  console.log(vueWatchers);
  console.log(vueStars);
});

axios.get('https://api.github.com/repos/angular/angular.js').then(response => {
  console.log(response.data);
  let angularWatchers = response.data.watchers;
  let angularForks = response.data.forks;
  let angularStars = response.data.stargazers_count;
  console.log("angular info:");
  console.log(angularForks);
  console.log(angularWatchers);
  console.log(angularStars);
});

axios.get('https://api.github.com/repos/emberjs/ember.js').then(response => {
  console.log(response.data);
  let enberWatchers = response.data.watchers;
  let enberForks = response.data.forks;
  let enberStars = response.data.stargazers_count;
  console.log("enber info:");
  console.log(enberForks);
  console.log(enberWatchers);
  console.log(enberStars);
});

axios.get('https://api.github.com/repos/sveltejs/svelte').then(response => {
  console.log(response.data);
  let svelteWatchers = response.data.watchers;
  let svelteForks = response.data.forks;
  let svelteStars = response.data.stargazers_count;
  console.log("svelte info:");
  console.log(svelteForks);
  console.log(svelteWatchers);
  console.log(svelteStars);
});

axios.get('https://api.github.com/repos/facebook/react').then(response => {
  console.log(response.data);
  let reactWatchers = response.data.watchers;
  let reactForks = response.data.forks;
  let reactStars = response.data.stargazers_count;
  console.log("react info:");
  console.log(reactForks);
  console.log(reactWatchers);
  console.log(reactStars);
});


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
