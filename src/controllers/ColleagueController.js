import { renderColleagues } from '../views/colleagueForm.js';
import EventEmitter from '../utils/EventEmitter.js';

const tempColleagues = [
  { name: 'Name1', surname: 'Surname1', role: 'Role1'},
  { name: 'Name2', surname: 'Surname2', role: 'Role2'}
]

class ColleagueController {
  constructor() {
    this.collegues = tempColleagues
    renderColleagues(this.collegues);

    EventEmitter.on('colleagues::save', formData => {
      console.log(this.colleaguesFromForm(formData, 3));
    });
  }

  colleaguesFromForm(formData, fieldNumber) {
    return Array.from(formData).reduce((acc, el, index) => {
      if (index % fieldNumber) {
        acc[acc.length - 1][el[0]] = el[1];
      } else {
        acc[acc.length] = { [el[0]]: el[1] };
      }
      return acc;
    }, []);
  }
}

export default ColleagueController;
