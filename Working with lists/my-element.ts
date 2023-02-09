import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];

  render() {
    return html`
      <p>Lista de nombres con la letra "e"</p>
      <ul>
         ${this.names
        .filter((name) => name.match(/e/i))
        .map((name) => html`<li>${name}</li>`)}
      </ul>
    `;
  }
}