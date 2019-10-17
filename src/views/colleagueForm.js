import EventEmitter from '../utils/EventEmitter.js';

const colleaguesForm = document.querySelector('.colleagues');
const colleaguesRowsEl = document.querySelector('.colleagues__rows');
// const colleagueAddBtn = document.querySelector('.colleagues__add-btn')

colleaguesForm.addEventListener('submit', e => {
  e.preventDefault();
  EventEmitter.emit('colleagues::save', new FormData(e.target));
});

export const renderColleagues = (colleagues) => {
  colleaguesRowsEl.insertAdjacentHTML(
    'beforeend',
    colleagues.map(colleague => inputRow(colleague)).join('\r\n')
  );
};

export const inputRow = colleague => `
  <div class="colleagues__row">
    <input type="text" name="name" value="${colleague.name}">
    <input type="text" name="surname" value="${colleague.surname}">
    <input type="text" name="role" value="${colleague.role}">
  </div>
`;
