/*eslint-disable*/
import _ from 'lodash';
/* eslint-enable */
import './style.css';
import Request from './request';
import submitOrNota from './form';

const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');
const list = document.querySelector('.list');
const nameInput = document.getElementById('name-input');
const scoreInput = document.getElementById('score-input');

const scores = new Request();

function ShowOne(object) {
  const div = document.createElement('div');
  div.textContent = `${object.user}: ${object.score}`;
  div.classList.add('score');
  list.appendChild(div);
}

function showAll(objectList) {
  objectList.forEach(object => {
  ShowOne(object);
  });
}

function antiShowall(list) {
  while (list.lastElementChild) {
  list.removeChild(list.lastElementChild);
  }
}

function refresh(scores) {
  setTimeout(async () => {
    await scores.getScore();
    antiShowall(list)
    showAll(scores.scoreList);
    }, 10);
}

refreshBtn.addEventListener('click', () => {
  refresh(scores);
})

form.addEventListener('submit', (event) => {
  submitOrNota(event, scoreInput, nameInput)
  refresh(scores);
})


const init = async () => {
  refresh(scores)
};

/* eslint-disable*/
onload = init();
/* eslint-enable */
import './style.css';