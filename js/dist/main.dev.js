"use strict";

var count = 0;
var value = document.getElementById('value');
var btns = document.querySelectorAll('.btn');
btns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    var styles = e.currentTarget.classList;

    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    value.textContent = count;

    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'blue';
    }
  });
});