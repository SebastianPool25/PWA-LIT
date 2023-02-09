import {LitElement, html, PropertyValues} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property() forward = '';
  @property() backward = '';
  willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('forward')) {
      this.backward = this.forward.split('').reverse().join('');
    }

    if (changedProperties.has('backward')) {
      this.forward = this.backward.split('').reverse().join('');
    }
  }
  onInput(e: Event) {
    const inputEl = e.target as HTMLInputElement;
    if (inputEl.id === 'forward') {
      this.forward = inputEl.value;
    } else {
      this.backward = inputEl.value;
    }
  }

  render() {
    return html`
      <label>Al derecho: <input id="forward" @input=${this.onInput} .value=${this.forward}></label>
      <label>Al reves: <input id="backward" @input=${this.onInput} .value=${this.backward}></label>
      <div>Al derecho: ${this.forward}</div>
      <div>Al reves: ${this.backward}</div>
    `;
  }
}