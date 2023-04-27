'use strict'
const form = document.getElementById('formy');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const url1 = form.getAttribute('action')
  const query = document.getElementById('query').value;
  const url = `${url1}?q=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
