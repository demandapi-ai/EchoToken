import { html, render } from 'lit-html';
import { TokenFactory } from 'declarations/TokenFactory'; // adjust if path differs
import logo from './logo2.svg';

class App {
  tokenId = null;
  tokenMeta = null;
  loading = false;

  constructor() {
    this.#render();
  }

  // Handle form submission -> call canister to create ICRC2 token
  #deployToken = async (e) => {
    e.preventDefault();
    this.loading = true;
    this.#render();

    const name = document.getElementById('name').value;
    const symbol = document.getElementById('symbol').value;
    const description = document.getElementById('description').value;
    const website = document.getElementById('website').value || null;
    const twitter = document.getElementById('twitter').value || null;
    const telegram = document.getElementById('telegram').value || null;
    const logoUrl = document.getElementById('logoUrl').value;

    try {
      // create token using your canister
      const res = await TokenFactory.createIcrc2Token(
        name,
        symbol,
        { ImageUrl: logoUrl }, // simple logo variant
        description,
        website ? [website] : [],
        twitter ? [twitter] : [],
        telegram ? [telegram] : [],
      );

      if ("ok" in res) {
        this.tokenId = res.ok.toText();
        // check if token follows ICRC2
        await TokenFactory.checkIcrc2Standard(res.ok);
        // fetch token metadata
        const metaRes = await TokenFactory.getTokenMetadata(res.ok);
        this.tokenMeta = metaRes.length ? metaRes[0] : null;
      } else {
        alert(`Error creating token: ${res.err}`);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to deploy token");
    }

    this.loading = false;
    this.#render();
  };

  #render() {
    const body = html`
      <main style="text-align: center; font-family: sans-serif; padding: 2rem;">
        <img src="${logo}" alt="ECHO MINT Logo" style="width: 120px; margin-bottom: 1.5rem;" />
        <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem;">ECHO MINT</h1>
        <p style="font-size: 1.2rem; color: #444;">
          Deploy ICRC2 tokens with Fetch AI
        </p>

        <form @submit=${this.#deployToken} style="margin-top: 2rem; display: grid; gap: 1rem; max-width: 400px; margin-inline: auto;">
          <input id="name" placeholder="Token Name" required />
          <input id="symbol" placeholder="Symbol (e.g., ECHO)" required />
          <input id="description" placeholder="Description" required />
          <input id="website" placeholder="Website (optional)" />
          <input id="twitter" placeholder="Twitter (optional)" />
          <input id="telegram" placeholder="Telegram (optional)" />
          <input id="logoUrl" placeholder="Logo URL" required />

          <button type="submit" 
            style="padding: 0.75rem; font-size: 1rem; background-color: #4caf50; color: white; border: none; border-radius: 6px; cursor: pointer;">
            ${this.loading ? "Deploying..." : "Deploy Token"}
          </button>
        </form>

        ${this.tokenId ? html`
          <section style="margin-top: 2rem; text-align: left; max-width: 600px; margin-inline: auto;">
            <h2>✅ Token Created!</h2>
            <p><b>Canister ID:</b> ${this.tokenId}</p>

            ${this.tokenMeta ? html`
              <h3>Metadata</h3>
              <ul>
                <li><b>Name:</b> ${this.tokenMeta.name}</li>
                <li><b>Symbol:</b> ${this.tokenMeta.symbol}</li>
                <li><b>Decimals:</b> ${this.tokenMeta.decimals}</li>
                <li><b>Total Supply:</b> ${this.tokenMeta.total_supply}</li>
                <li><b>Description:</b> ${this.tokenMeta.description}</li>
                <li><b>Website:</b> ${this.tokenMeta.website ? this.tokenMeta.website[0] : "—"}</li>
                <li><b>Twitter:</b> ${this.tokenMeta.twitter ? this.tokenMeta.twitter[0] : "—"}</li>
                <li><b>Telegram:</b> ${this.tokenMeta.telegram ? this.tokenMeta.telegram[0] : "—"}</li>
                <li><b>Logo:</b> <img src="${this.tokenMeta.logo.ImageUrl || ""}" alt="logo" style="height:40px;" /></li>
              </ul>
            ` : html`<p>Loading metadata...</p>`}
          </section>
        ` : ""}
      </main>
    `;

    render(body, document.getElementById('root'));
  }
}

export default App;
