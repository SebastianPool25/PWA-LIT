import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('name-tag')
export class NameTag extends LitElement {
  @property()
  name: string = 'Your name here';

  render() {
    return html`
      <p>Hola, ${this.name}</p>
      <input @input=${this.ChangeName} placeholder="Ingresa tu nombre">
    `;
  }

  ChangeName(event:Event){
   const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}
