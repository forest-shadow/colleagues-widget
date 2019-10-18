import EventEmitter from '../utils/EventEmitter.js';
import { getSiblings } from '../utils/getSiblingNodes.js';

const colleaguesForm = document.querySelector('.colleagues');
const colleaguesRowsEl = document.querySelector('.colleagues__rows');
const colleagueAddBtn = document.querySelector('.colleagues__add-btn');
const colleaguesDeleteBtn = document.querySelector('.colleagues__clear-btn');
const deleteRowBtn = document.querySelector('.colleagues__delete-btn');

class Colleague {
  constructor(name, surname, role) {
    this.name = name;
    this.surname = surname;
    this.role = role;
  }
}

colleaguesForm.addEventListener('submit', e => {
  e.preventDefault();
  EventEmitter.emit('colleagues::save', new FormData(e.target));
});

colleagueAddBtn.addEventListener('click', e => {
  e.preventDefault();
  addInputRow();
});

colleaguesDeleteBtn.addEventListener('click', e => {
  e.preventDefault();
  EventEmitter.emit('colleagues::delete');
});

colleaguesRowsEl.addEventListener('click', e => {
  e.preventDefault();
  const currentRow = e.target.parentNode;
  if (e.target.className === 'colleagues__delete-btn') {
    const colleague = new Colleague(
      ...getSiblings(e.target).map(sibling => sibling.value)
    );
    console.log(
      new Colleague(...getSiblings(e.target).map(sibling => sibling.value))
    );
    colleague.name &&
      colleague.surname &&
      EventEmitter.emit('colleague::delete', colleague);
    currentRow.parentNode.removeChild(currentRow);
  }
  console.log(e.target.className, currentRow);
});

export const renderColleagues = (colleagues = []) => {
  colleaguesRowsEl.insertAdjacentHTML(
    'beforeend',
    colleagues.map(colleague => inputRow(colleague)).join('\r\n')
  );

  console.log(deleteRowBtn);
};

export const deleteColleagues = () => {
  colleaguesRowsEl.innerHTML = '';
};

const addInputRow = (colleague = new Colleague('', '', '')) => {
  colleaguesRowsEl.insertAdjacentHTML('beforeend', inputRow(colleague));
};

export const inputRow = colleague => `
  <div class="colleagues__row">
    <input type="text" placeholder="Name" name="name" value="${colleague.name}">
    <input type="text" placeholder="Surname" name="surname" value="${colleague.surname}">
    <input type="text" placeholder="Role" name="role" value="${colleague.role}">
    <button class="colleagues__delete-btn">X</button>
  </div>
`;
