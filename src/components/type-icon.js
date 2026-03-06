import { html, LitElement } from "lit";
import { ICONS_PATH } from "../utils/constants";
import styles from "./type-icon.css"

export class TypeIcon extends LitElement {
  static properties = {
    icon: { type: String },
  };

  constructor() {
    super();
    this.icon = "";
  }

  static styles = styles
  
  render() {
    return html`
      <div class="container-icon">
        <img src="${ICONS_PATH}${this.icon}.svg" alt="${this.icon}" />
      </div>
      `;
  }
}

customElements.define("type-icon", TypeIcon);
