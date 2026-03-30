import { html, LitElement, nothing } from "lit";
import styles from "./type-button.css";
import "../components/type-text.js";
import "../components/type-icon.js";

export class TypeButton extends LitElement {
  static properties = {
    text: { type: String },
    icon: { type: String },
    type: { type: String },
    value: { type: String },
    iconPosition: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.text = "";
    this.icon = "";
    this.type = "default";
    this.value = "";
    this.iconPosition = "right";
    this.disabled = false;
  }

  _renderContent() {
    let iconTemplate = html`<type-icon
      .icon=${this.icon}
      .variant=${"secondary"}
    ></type-icon>`;
    
    let textTemplate = html`<type-text .text=${this.text} .tag=${"p"}>
    </type-text>`;

    if (!this.icon) return textTemplate;
    if (this.iconPosition === "right") {
      return html`${textTemplate}${iconTemplate}`;
    } else {
      return html`${iconTemplate}${textTemplate}`;
    }
  }

  static styles = styles;

  render() {
    return html`
      <button
        class="${this.type}-button"
        ?disabled=${this.disabled}
        value=${this.value}
      >
        ${this._renderContent()}
      </button>
    `;
  }
}

customElements.define("type-button", TypeButton);
