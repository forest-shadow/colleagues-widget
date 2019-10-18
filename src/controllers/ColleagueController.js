import { renderColleagues, deleteColleagues } from '../views/colleagueForm.js';
import EventEmitter from '../utils/EventEmitter.js';
import ColleagueModel from '../models/Colleague.js';

const tempColleagues = [
  { name: 'Name1', surname: 'Surname1', role: 'Role1' },
  { name: 'Name2', surname: 'Surname2', role: 'Role2' }
];

class ColleagueController {
  constructor() {
    // this.colleagues = tempColleagues;
    this.colleagues = ColleagueModel.getColleagues() || [];
    this.colleagues && renderColleagues(this.colleagues);

    EventEmitter.on('colleagues::save', formData => {
      console.log(this.colleaguesFromForm(formData, 3));
      ColleagueModel.saveColleagues(this.colleaguesFromForm(formData, 3));
      EventEmitter.emit('counter::update')
    });

    EventEmitter.on('colleagues::delete', () => {
      console.log('colleagues::delete');
      ColleagueModel.deleteColleagues();
      deleteColleagues();
      EventEmitter.emit('counter::update')
    });

    EventEmitter.on('colleague::delete', colleague => {
      console.log('colleague::delete');
      ColleagueModel.saveColleagues(
        ColleagueModel.getColleagues().filter(
          colleagueItem =>
            !(
              colleagueItem.name === colleague.name &&
              colleagueItem.surname === colleague.surname
            )
        )
      );
      EventEmitter.emit('counter::update')
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
