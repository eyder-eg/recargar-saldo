import { html, LitElement } from "lit";
import styles from "./field-input.css.js";
import { onlyNumber } from "../utils/onlyNumber.js";

export class FieldInput extends LitElement {
  static properties = {
    fieldId: { type: String },
    type: { type: String },
    maxLength: { type: String },
    name: { type: String },
    label: { type: String },
    value: { type: String },
    placeholder: { type: String },
    textFooter: { type: String },
  };

  constructor() {
    super();
    this.fieldId = "";
    this.type = "text";
    this.maxLength = 10000;
    this.name = "";
    this.label = "";
    this.value = "";
    this.placeholder = "";
    this.textFooter = "";
  }

  _handleOnChange(e) {
    const newValue = e.target.value;
    if (this.type === "number") {
      if (onlyNumber(newValue) || newValue === "") {
        this.value = newValue;
      } else {
        e.target.value = this.value;
      }
    } else this.value = newValue;

    this.dispatchEvent(
      new CustomEvent("value-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  static styles = styles;

  render() {
    return html`
      <div class="container">
        <label for="${this.fieldId}"
          ><type-text .text=${this.label} .tag=${"p"}></type-text
        ></label>
        <input
          maxlength=${this.maxLength}
          id="${this.fieldId}"
          .type=${this.type === "number" ? "text" : this.type}
          .name=${this.name}
          .placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this._handleOnChange}
        />
        <div class="container-footer">
          <type-text
            .text=${this.textFooter}
            .size=${"xs"}
            .tag=${"p"}
          ></type-text>
        </div>
      </div>
    `;
  }
}

customElements.define("field-input", FieldInput);
