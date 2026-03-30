import { html, LitElement } from "lit";
import { repeat } from "lit/directives/repeat.js";
import "./operator-button.js";
import styles from "./operator-list.css.js";
import { OPERATOR_LIST } from "../utils/constants.js";

class OperatorList extends LitElement {
  static properties = {
    _operatorList: { type: Array },
    _operatorActiveId: { type: Number },
  };

  constructor() {
    super();
    this._operatorList = [...OPERATOR_LIST.PEN];
    this._operatorActiveId = 0;
  }

  _activeOperator(e) {
    const operatorSelected = e.detail.operator;
    this._operatorActiveId = operatorSelected.id;
  }

  static styles = styles;

  render() {
    return html`
      <ul>
        ${repeat(
          this._operatorList,
          (operator) => operator.id,
          (operator) => html`
            <li>
              <operator-button
                @send-operator=${this._activeOperator}
                .operator=${operator}
                ?active=${this._operatorActiveId === operator.id}
              ></operator-button>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

customElements.define("operator-list", OperatorList);
