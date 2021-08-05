/*eslint-disable*/
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import Request from './request.js';
import submitOrNota from './form.js';

const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');
const list = document.querySelector('.list');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const scores = new Request();

const ShowOne = (object, placenumber) => {
  const div = document.createElement('div');
  const showname = document.createElement('h3');
  const shownumber = document.createElement('h3');
  const place = document.createElement('h3');

  showname.textContent = object.user;
  shownumber.textContent = object.score;
  place.textContent = `#${placenumber}`;
  div.classList.add('score');
  showname.classList.add('showname');
  shownumber.classList.add('shownumber');
  place.classList.add('place');
  div.appendChild(place);
  div.appendChild(showname);
  div.appendChild(shownumber);
  list.appendChild(div);
};

const showAll = (objectList) => {
  let place = 0;
  objectList.forEach((object) => {
    place += 1;
    ShowOne(object, place);
  });
};

const antiShowall = (list) => {
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
};

const refresh = (scores) => {
  setTimeout(async () => {
    await scores.getScore();
    antiShowall(list);
    showAll(scores.scoreList);
  }, 10);
};

refreshBtn.addEventListener('click', () => {
  refresh(scores);
});

form.addEventListener('submit', (event) => {
  submitOrNota(event, scoreInput, nameInput);
  refresh(scores);
});

const init = async () => {
  refresh(scores);
};

/* eslint-disable*/
onload = init();
/* eslint-enable */