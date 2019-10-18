const colleaguesCounterEl = document.querySelector('.colleagues-counter');

export const renderColleaguesCounter = count => {
  colleaguesCounterEl.innerHTML = colleaguesCounter(count);
};

const colleaguesCounter = (count = 0) => `
  <p>There are: ${count} colleagues</p>
`;
