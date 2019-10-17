let rootEl = document.getElementById('root')

export const renderLayout = () => {
  const layout = (`
    <div class="app">
      <h1>This is layout</h1>
    </div>
  `)

  rootEl.insertAdjacentHTML('afterbegin', layout)
}