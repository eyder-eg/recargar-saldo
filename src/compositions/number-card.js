import { html, LitElement } from "lit";
import styles from "./number-card.css.js";
import { LOCALE_ES } from "../locales/locale_es.js";
import "../components/type-icon.js";
import "../components/type-text.js";

export class NumberCard extends LitElement {
  static properties = {
    phoneNumber: { type: String },
  };

  constructor() {
    super();
    this.phoneNumber = "Sin número";
  }
  static styles = styles;

  render() {
    return html`
      <div class="card">
        <type-icon .icon=${"smartphone"} .variant=${"secondary"}></type-icon>
        <div class="container-text">
          <type-text
            .text=${LOCALE_ES.number_card_title}
            .tag=${"p"}
            .size=${"s"}
          ></type-text>
          <type-text
            .text=${this.phoneNumber}
            .tag=${"p"}
            .size=${"m"}
            .weight=${"bold"}
          ></type-text>
        </div>
      </div>
    `;
  }
}

customElements.define("number-card", NumberCard);
