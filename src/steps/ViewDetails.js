import { html, LitElement } from "lit";
import "../components/type-icon.js";
import "../components/type-text.js";
import styles from "./view-details.css.js";
import { navigate } from "../utils/navigate.js";
import { CURRENCY_SYMBOL_LIST } from "../utils/constants.js";

class ViewDetails extends LitElement {
  static styles = styles;

  static properties = {
    amount: { type: String },
    phoneNumber: { type: String },
    operator: { type: String },
    datetime: { type: String },
    code : { type: String}
  };

  constructor() {
    super();
    this.amount = "";
    this.phoneNumber = "";
    this.operator = "";
    this.datetime = "";
    this.code = Math.random().toString(36).substring(2, 12).toUpperCase()
  }

  firstUpdated() {
    if (this.phoneNumber === "") navigate("/");
  }

  _handleClick() {
    navigate("/");
  }

  render() {
    return html`<main>
      <div class="card">
        <header>
          <type-icon .icon=${"check-circle"} .size=${"l"}></type-icon>
          <type-text
            .tag=${"h1"}
            .size=${"l"}
            .text=${"¡Recarga exitosa!"}
          ></type-text>
          <type-text
            .tag=${"p"}
            .text=${"Tu saldo ha sido recargado correctamente"}
          ></type-text>
        </header>
        <section class="details">
          <type-text
            .text=${"Monto recargado"}
            .tag=${"p"}
            .align=${"center"}
          ></type-text>
          <type-text
            .text=${`${CURRENCY_SYMBOL_LIST.PEN}${this.amount}`}
            .tag=${"p"}
            .align=${"center"}
            .size=${"xl"}
            class=${"amount-text"}
          ></type-text>
          <type-card
            .title=${"Número recargado"}
            .description=${this.phoneNumber}
          ></type-card>
          <type-card
            .title=${"Operadora"}
            .description=${this.operator}
          ></type-card>
          <type-card
            .title=${"Número de transacción"}
            .description=${this.code}
          ></type-card>
          <type-card
            .title=${"Fecha y hora"}
            .description=${this.datetime}
          ></type-card>
        </section>
        <type-button
          .icon=${"house"}
          .iconPosition=${"left"}
          .text=${"Nueva recarga"}
          @click=${this._handleClick}
        ></type-button>
      </div>
    </main> `;
  }
}

customElements.define("view-details", ViewDetails);
