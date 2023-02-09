import {LitElement, html} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  tasks = [
    { id: 'a', label: 'Dormir'},
    { id: 'b', label: 'Comer'},
    { id: 'c', label: 'Ver Youtube'},
    { id: 'd', label: 'Hacer tutorial'},
  ];

  render() {
    return html`
      <p>Things to do today:</p>
      <button @click=${() => this._sort(1)}>Sort ascending</button>
      <button @click=${() => this._sort(-1)}>Sort descending</button>
      <ul>
        ${repeat(
          this.tasks,
          (task) => task.id,
          (task) => html`
            <li>
              <label><input type="checkbox" />${task.id}) ${task.label}</label>
            </li>
          `
        )}
      </ul>
    `;
  }

  private _sort(dir: number) {
    this.tasks.sort((a, b) => a.label.localeCompare(b.label) * dir);
    this.requestUpdate();
  }
}