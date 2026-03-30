import { html, LitElement } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { AMOUNT_LIST, CURRENCY_SYMBOL_LIST } from "../utils/constants.js";
import "./type-button.js";
import styles from "./amount-list.css.js";

class AmountList extends LitElement {
  static properties = {
    _amountList: { type: Array },
    _amountActiveId: { type: Number },
  };

  constructor() {
    super();
    this._amountList = [...AMOUNT_LIST.PEN];
    this._amountActiveId = 0;
  }

  _activeOperator(e) {
    const amountSelected = e.detail.amount;
    this._amountActiveId = amountSelected.id;
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
                @click=${this._activeOperator}
                .value=${amount.amount}
                ?active=${this._operatorActiveId === amount.id}
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
