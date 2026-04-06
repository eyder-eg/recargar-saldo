import { html, LitElement } from "lit";
import styles from "./recharge-phone.css.js";
import "../compositions/type-button.js";
import "../compositions/type-card.js";
import "../compositions/operator-list.js";
import "../compositions/amount-list.js";
import "../components/type-text.js";
import { LOCALE_ES } from "../locales/locale_es.js";
import { navigate } from "../utils/navigate.js";

class RechargePhone extends LitElement {
  static properties = {
    phoneNumber: { type: String },
    amount: { type: String },
    operatorId: { type: String },
  };

  constructor() {
    super();
    this.phoneNumber = "";
    this.amount = 0;
    this.operatorId = "";
  }

  firstUpdated() {
    if (this.phoneNumber === "") navigate("/");
  }

  _setAmount(e) {
    this.amount = e.detail.amount;
  }

  _setOperator(e) {
    this.operatorId = e.detail.operator.id;
  }

  _handleBackButton() {
    navigate("/");
  }

  _handleClickButton() {
    this.dispatchEvent(
      new CustomEvent("send-datetime", {
        detail: { datetime: new Date().toLocaleString("es-ES") },
        bubbles: true,
        composed: true,
      }),
    );

    navigate("/view");
  }

  static styles = styles;

  render() {
    return html`
      <main>
        <div class="card">
          <header>
            <type-button
              @click=${this._handleBackButton}
              .text=${LOCALE_ES.recharge_phone_back_buttom}
              .icon=${"arrow-left"}
              .type=${"outline"}
              .iconPosition=${"left"}
            ></type-button>
          </header>
          <section>
            <type-card
              .title=${LOCALE_ES.number_card_title}
              .description=${this.phoneNumber}
            ></type-card>
          </section>
          <section>
            <type-text
              .text=${LOCALE_ES.recharge_phone_operator_section_title}
              .tag=${"h2"}
              .size=${"m"}
            ></type-text>
            <operator-list @send-operator=${this._setOperator}></operator-list>
          </section>
          <section>
            <type-text
              .text=${LOCALE_ES.recharge_phone_amount_section_title}
              .tag=${"h2"}
              .size=${"m"}
            ></type-text>
            <amount-list @send-amount=${this._setAmount}></amount-list>
          </section>

          <type-button
            .text=${"Continuar"}
            ?disabled=${this.amount === 0 || this.operatorId === ""}
            @click=${this._handleClickButton}
          ></type-button>
        </div>
      </main>
    `;
  }
}

customElements.define("recharge-phone", RechargePhone);
