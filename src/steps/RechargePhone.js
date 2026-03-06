import { html, LitElement } from "lit";
import styles from "./recharge-phone.css.js";
import "../components/type-button.js";
import "../compositions/number-card.js";
import "../compositions/operator-list.js";
import { LOCALE_ES } from "../locales/locale_es.js";
import { navigate } from "../utils/navigate.js";

class RechargePhone extends LitElement {

  static properties = {
    phoneNumber : { type : String },
  }

  constructor() {
    super();
    this.phoneNumber = "";
  }

  firstUpdated() {
    if (this.phoneNumber==="") navigate("/")
  }

  _handleBackButton() {
    navigate("/")
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
            <number-card .phoneNumber=${this.phoneNumber} ></number-card>
          </section>
          <section>
            <type-text>Selecciona tu operadora</type-text>
            <operator-list></operator-list>
          </section>
        </div>  
      </main>
    `;
  }
}

customElements.define("recharge-phone", RechargePhone);
