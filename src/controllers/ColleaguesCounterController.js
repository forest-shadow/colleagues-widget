import EventEmitter from '../utils/EventEmitter.js';
import { renderColleaguesCounter } from '../views/colleaguesTotal.js';
import ColleagueModel from '../models/Colleague.js';

class ColleaguesCounterController {
  constructor() {
    renderColleaguesCounter(ColleagueModel.getColleaguesCount())

    EventEmitter.on('counter::update', () => {
      renderColleaguesCounter(ColleagueModel.getColleaguesCount());
    });
  }
}
export default ColleaguesCounterController;
