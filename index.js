import { LitElement, html, css } from 'lit-element';
import './webcomponents/demos';
import '@polymer/paper-card';

/**
 * This component combines all the examples to be displayed. See the basic/intermediate/advanced folders for the actual examples.
 */

class OpenWcDemo extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        h2 {
          font-size: 20px;
          color: #217FF9;
        }

        h1 {
          margin-top: 0px;
          color: #217FF9;
        }

        #header {
          display: flex;
        }

        a {
          text-decoration: none;
        }

        a:visited {
          color: #217FF9;
        }

        #header h1 { flex: 1; }
        #header svg { margin: 8px 0 8px 0; }
        .github {transform: scale(1.2, 1.2);}
        .logo {
          margin-top: -3px;
          margin-right: 8px;
        }

        .nav { margin-bottom: 20px; }
        .footer { text-align: center; color: #a8a8a8;}
      `,
    ];
  }

  static get properties() {
    return {
    }
  }

  constructor(){
    super();
  }

  render() {
    return html`
      <div id="header">
        <h1>webcomponents demos</h1>
      </div>
      <div id="outlet">
        <basic-demos></basic-demos>
      </div>
      <p class="footer">🚽</p>
    `;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

customElements.define('open-wc-demo', OpenWcDemo);