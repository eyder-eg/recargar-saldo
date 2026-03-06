import { html, LitElement } from "lit";
import styles from "./type-button.css";
import { ICONS_PATH } from "../utils/constants";

export class TypeButton extends LitElement {
  static properties = {
    text: { type: String },
    icon: { type: String },
    type: { type: String },
    iconPosition: { type: String },
    disabled: { type: Boolean },
  };

  constructor() {
    super();
    this.text = "";
    this.icon = "";
    this.type = "default";
    this.iconPosition = "right";
    this.disabled = false;
  }

  _renderContent() {
    if (this.iconPosition === "right") {
      return html` ${this.text} <img src="${ICONS_PATH}${this.icon}.svg" /> `;
    } else {
      return html` <img src="${ICONS_PATH}${this.icon}.svg" /> ${this.text}`;
    }
  }

  static styles = styles;

  render() {
    return html`
      <button class="${this.type}-button" ?disabled=${this.disabled}>
        ${this._renderContent()}
      </button>
    `;
  }
}

customElements.define("type-button", TypeButton);
