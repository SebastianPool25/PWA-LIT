import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  things = [
    "LLorar",
    "Comer",
    "Dormir",
    "Amar",
  ];

  render() {
    return html`
      <p>Mis 4 cosas favoritas</p>
      <ul>
        <!-- TODO: Add click event handlers for the delete button  below. -->
        ${map(
          this.things,
          (thing, index) => html`
            <li>
              ${thing}
              <button @click=${() => this._deleteThing(index)}>Delete</button>
            </li>
          `
        )}
      </ul>
    `;
  }

  private _deleteThing(index: number) {
    this.things = this.things.filter((_, i) => i !== index);
  }
}