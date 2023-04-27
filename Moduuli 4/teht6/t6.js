'use strict';

const form = document.getElementById('target');
const print = document.getElementById('print');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const url1 = form.getAttribute('action')
  const query = document.getElementById('query').value;
  const url = `${url1}?query=${query}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      print.innerHTML = '';

      const ul = document.createElement('ul');

      data.result.forEach(joke => {
        const li = document.createElement('li');
        li.textContent = joke.value;
        ul.appendChild(li);
      });

      print.appendChild(ul);
    })
    .catch(error => console.error(error));
});

