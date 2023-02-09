import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'Iniciando';

  render() {
    return html`
    <p>Bienvenido al Tutorial de LIT!</p>
    <p> Estamos ${this.version} el tutorial.</p>
    `;
  }
}
