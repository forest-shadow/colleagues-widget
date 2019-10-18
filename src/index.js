import ColleagueController from './controllers/ColleagueController.js';
import ColleaguesCounterController from './controllers/ColleaguesCounterController.js'

document.addEventListener('DOMContentLoaded', () => {
  (() => {
    new ColleagueController();
    new ColleaguesCounterController();
  })();
});
