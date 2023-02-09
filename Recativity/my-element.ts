import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  result = '';

  flipCoin() {
    if (Math.random() < 0.5) {
      this.result = 'Cara';
    } else {
      this.result = 'Cruz';
    }
  }

  render() {
    return html`
      <button @click=${this.flipCoin}>Haz el volado!</button>
      <p>Resultado del volado: ${this.result}</p>
    `;
  }
}
