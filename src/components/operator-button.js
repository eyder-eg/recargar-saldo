import { html, LitElement } from "lit";
import "./type-text.js";
import "./type-icon.js";
import styles from "./operator-button.css.js";

class OperatorButton extends LitElement {
  static properties = {
    operator: { type: Object },
    active: { type: Boolean },
  };

  constructor() {
    super();
    this.operator = {};
    this.active = false;
  }

  _sendOperator() {
    this.dispatchEvent(
      new CustomEvent("send-operator", {
        detail: { operator: this.operator },
        bubbles: true,
        composed: true,
      }),
    );
  }

  static styles = styles;

  render() {
    return html`
      <button
        @click=${this._sendOperator}
        class="${this.active ? "active" : ""}"
      >
        <div class="${this.active ? "checked" : "no-checked"}"></div>
        <type-icon .icon=${this.operator.icon}></type-icon>
        <type-text
          .text=${this.operator.name}
          .tag=${"p"}
          .weight=${"bold"}
        ></type-text>
      </button>
    `;
  }
}

customElements.define("operator-button", OperatorButton);
