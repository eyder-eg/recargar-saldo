import { html, LitElement } from "lit";
import "../components/type-icon.js";
import "../components/type-text.js";
import styles from "./view-details.css.js";
import { navigate } from "../utils/navigate.js";
import { CURRENCY_SYMBOL_LIST } from "../utils/constants.js";
import { LOCALE_ES } from "../locales/locale_es.js";

class ViewDetails extends LitElement {
  static styles = styles;

  static properties = {
    amount: { type: String },
    phoneNumber: { type: String },
    operator: { type: String },
    datetime: { type: String },
    code: { type: String },
  };

  constructor() {
    super();
    this.amount = "";
    this.phoneNumber = "";
    this.operator = "";
    this.datetime = "";
    this.code = Math.random().toString(36).substring(2, 12).toUpperCase();
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
          <type-icon
            .icon=${"check-circle"}
            .size=${"l"}
            class=${"check-icon"}
          ></type-icon>
          <type-text
            .tag=${"h1"}
            .size=${"l"}
            .text=${LOCALE_ES.view_details_title}
          ></type-text>
          <type-text
            .tag=${"p"}
            .text=${LOCALE_ES.view_details_description}
          ></type-text>
        </header>
        <section class="details">
          <type-text
            .text=${LOCALE_ES.view_details_amount_title}
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
            .title=${LOCALE_ES.view_details_phone_number_title}
            .description=${this.phoneNumber}
          ></type-card>
          <type-card
            .title=${LOCALE_ES.view_details_operator_title}
            .description=${this.operator}
            .icon=${"credit-card"}
          ></type-card>
          <type-card
            .title=${LOCALE_ES.view_details_transaction_number_title}
            .description=${this.code}
            .icon=${"hash"}
          ></type-card>
          <type-card
            .title=${LOCALE_ES.view_details_datetime_title}
            .description=${this.datetime}
            .icon=${"calendar"}
          ></type-card>
        </section>
        <type-button
          .icon=${"house"}
          .iconPosition=${"left"}
          .text=${LOCALE_ES.view_details_final_button}
          @click=${this._handleClick}
        ></type-button>
      </div>
    </main> `;
  }
}

customElements.define("view-details", ViewDetails);
