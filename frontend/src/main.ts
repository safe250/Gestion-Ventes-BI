import './style.css'
import Logo from '/logo.png'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${Logo}" class="logo" alt="Vite logo" />
    </a>
    </div>
    <p class="read-the-docs">
      test
    </p>
  </div>
`


