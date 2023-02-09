import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
// TODO: import map directive.
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  items = new Set(['Manzana', 'Uva', 'Platano', 'Limón', 'China'])

  render() {
    return html`
      <p>My unique fruits</p>
      <ul>
         ${map(this.items, (item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
