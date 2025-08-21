import { html, render } from 'lit-html';
import logo from './logo2.svg';

class App {
  constructor() {
    this.#render();
  }

  #render() {
    const body = html`
      <main style="text-align: center; font-family: sans-serif; padding: 2rem;">
        <img src="${logo}" alt="ECHO MINT Logo" style="width: 150px; margin-bottom: 2rem;" />
        <h1 style="font-size: 3rem; margin-bottom: 1rem;">ECHO MINT</h1>
        <p style="font-size: 1.25rem; color: #555;">
          Deploy tokens easily with Fetch AI
        </p>
        <button 
          style="margin-top: 2rem; padding: 0.75rem 1.5rem; font-size: 1rem; background-color: #4caf50; color: white; border: none; border-radius: 6px; cursor: pointer;"
          @click=${() => alert('Token deployment coming soon!')}
        >
          Deploy Token
        </button>
      </main>
    `;
    render(body, document.getElementById('root'));
  }
}

export default App;
