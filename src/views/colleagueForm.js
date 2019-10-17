import EventEmitter from '../utils/EventEmitter.js';
import Colleague from '../models/Colleague.js'

const colleaguesForm = document.querySelector('.colleagues');
const colleaguesRowsEl = document.querySelector('.colleagues__rows');
const colleagueAddBtn = document.querySelector('.colleagues__add-btn')

colleaguesForm.addEventListener('submit', e => {
  e.preventDefault();
  EventEmitter.emit('colleagues::save', new FormData(e.target));
});

colleagueAddBtn.addEventListener('click', e => {
  e.preventDefault();
  addInputRow();
});

export const renderColleagues = (colleagues) => {
  colleaguesRowsEl.insertAdjacentHTML(
    'beforeend',
    colleagues.map(colleague => inputRow(colleague)).join('\r\n')
  );
};

const addInputRow = (colleague = new Colleague('', '', '') ) => {
  colleaguesRowsEl.insertAdjacentHTML(
    'beforeend',
    inputRow(colleague)
  );
}

export const inputRow = colleague => `
  <div class="colleagues__row">
    <input type="text" placeholder="Name" name="name" value="${colleague.name}">
    <input type="text" placeholder="Surname" name="surname" value="${colleague.surname}">
    <input type="text" placeholder="Role" name="role" value="${colleague.role}">
  </div>
`;
