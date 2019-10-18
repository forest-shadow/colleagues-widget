const COLLEAGUES_STORAGE_KEY = 'COLLEAGUES';
const localStorage = window.localStorage;

class ColleagueModel {
  getColleagues() {
    return JSON.parse(localStorage.getItem(COLLEAGUES_STORAGE_KEY));
  }

  getColleaguesCount() {
    const colleagues = this.getColleagues()
    return colleagues && colleagues.length || 0;
  }

  saveColleagues(colleagues) {
    localStorage.setItem(COLLEAGUES_STORAGE_KEY, JSON.stringify(colleagues));
  }

  deleteColleagues() {
    localStorage.removeItem(COLLEAGUES_STORAGE_KEY);
  }
}

export default new ColleagueModel();
