import { html, LitElement } from "lit";
import "../components/type-text.js";
import "../components/type-icon.js";
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
        <div class="${this.active ? "checked" : "no-checked"}">
          <type-icon
            .icon=${"check"}
            .variant=${"secondary"}
            .size=${"s"}
          ></type-icon>
        </div>
        <type-icon .icon=${this.operator.icon} .size=${"l"} .variant=${"secondary"}></type-icon>
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
