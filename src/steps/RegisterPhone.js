import { html, LitElement } from "lit";
import "../components/type-icon.js";
import "../components/type-text.js";
import "../compositions/type-button.js";
import "../compositions/field-input.js";
import styles from "./register-phone.css.js";
import { LOCALE_ES } from "../locales/locale_es.js";
import { navigate } from "../utils/navigate.js";

export class RegisterPhone extends LitElement {
  static properties = {
    numberValue: { type: String },
    _numberLength: { type: Number },
  };

  constructor() {
    super();
    this.numberValue = "";
    this._numberLength = 0;
  }

  _handleNumberChange(e) {
    this.numberValue = e.detail.value;
    this._numberLength = e.detail.value.length;
  }

  _handleSendNumber() {
    this.dispatchEvent(
      new CustomEvent("send-phone-number", {
        detail: { phoneNumber: this.numberValue },
        bubbles: true,
        composed: true,
      }),
    );

    navigate("/recharge");
  }
  static styles = styles;

  render() {
    return html`
      <main>
        <div class="card">
          <header>
            <type-icon icon="smartphone"></type-icon>
            <div class="container-text">
              <type-text
                .text=${LOCALE_ES.register_phone_title}
                tag="h1"
                size="l"
              ></type-text>
              <type-text
                text=${LOCALE_ES.register_phone_description}
                tag="p"
                size="s"
              ></type-text>
            </div>
          </header>
          <section class="section-field">
            <field-input
              .value=${this.numberValue}
              .fieldId=${"number"}
              .type=${"number"}
              .maxLength=${9}
              .name=${"number"}
              label="${LOCALE_ES.field_input_number_label}"
              placeholder="${LOCALE_ES.field_input_number_placeholder}"
              textFooter=${`${this._numberLength}${LOCALE_ES.field_input_footer_text}`}
              @value-changed=${this._handleNumberChange}
            ></field-input>
          </section>
          <section class="section-button">
            <type-button
              .text=${LOCALE_ES.register_phone_success_buttom}
              .icon=${"arrow-right"}
              ?disabled=${this._numberLength !== 9}
              @click=${this._handleSendNumber}
            ></type-button>
          </section>
          <footer>
            <type-text
              .text=${LOCALE_ES.register_phone_footer_text}
              size="xs"
              tag="p"
              .align=${"center"}
            ></type-text>
          </footer>
        </div>
      </main>
    `;
  }
}

customElements.define("register-phone", RegisterPhone);
