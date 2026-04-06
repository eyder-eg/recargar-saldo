import { html, LitElement } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { AMOUNT_LIST, CURRENCY_SYMBOL_LIST } from "../utils/constants.js";
import "./type-button.js";
import styles from "./amount-list.css.js";

class AmountList extends LitElement {
  static properties = {
    _amountList: { type: Array },
    _amountActive: { type: Number },
  };

  constructor() {
    super();
    this._amountList = [...AMOUNT_LIST.PEN];
    this._amountActive = 0;
  }

  _activeOperator(e) {
    this._amountActive = e.detail.value;
    this.dispatchEvent(
      new CustomEvent("send-amount", {
        detail: { amount: this._amountActive },
        bubbles: true,
        composed: true,
      }),
    );
  }

  static styles = styles;

  render() {
    return html`
      <ul>
        ${repeat(
          this._amountList,
          (amount) => amount.id,
          (amount) => html`
            <li>
              <type-button
                @send-value=${this._activeOperator}
                .value=${amount.amount}
                .active=${amount.amount === this._amountActive}
                .text=${`${CURRENCY_SYMBOL_LIST.PEN}${amount.amount}`}
              ></type-button>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define("amount-list", AmountList);
