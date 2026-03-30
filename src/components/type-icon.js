import { html, LitElement } from "lit";
import styles from "./type-icon.css";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import ICONS from "../utils/ICONS";

export class TypeIcon extends LitElement {
  static properties = {
    icon: { type: String },
    variant: { type: String },
    size: { type: String },
    _svg: { type: String },
  };

  constructor() {
    super();
    this.icon = "";
    this.variant = "default";
    this.size = "m";
    this._svg = "";
  }

  updated(changedProps) {
    if (changedProps.has("icon")) {
      const key = `../assets/icons/${this.icon}.svg`;
      this._svg = ICONS[key] ?? "";
    }
  }

  static styles = styles;

  render() {
    return html`
      <div class="container-icon ${this.variant} ${this.size}">${unsafeSVG(this._svg)}</div>
    `;
  }
}

customElements.define("type-icon", TypeIcon);
