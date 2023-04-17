'use strict';

const container = document.getElementById('target');

const list = document.createElement("li");
list.textContent = "First item";
container.appendChild(list);

const list2 = document.createElement("li");
list2.textContent = "Second item";
container.appendChild(list2);

const list3 = document.createElement("li");
list3.textContent = "Third item";
container.appendChild(list3);
