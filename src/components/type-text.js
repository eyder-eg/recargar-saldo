import { LitElement, html } from "lit";
import styles from "./type-text.css";
import { unsafeStatic, html as staticHtml } from "lit/static-html.js";

export class TypeText extends LitElement {
  static properties = {
    tag: { type: String },
    text: { type: String },
    size: { type: "xs" | "s" | "m" | "l" },
    align: { type: "center" | "left" | "right" },
    weight: { type: "normal" | "bold" },
  };

  constructor() {
    super();
    this.text = "";
    this.tag = "span";
    this.size = "s";
    this.align = "left";
    this.weight = "normal";
  }

  _renderContent() {
    const tag = unsafeStatic(this.tag);
    const className = [this.size, this.align, this.weight].join(" ");
    return staticHtml`
      <${tag}
        class=${className}
      >
        ${this.text}
      </${tag}>
    `;
  }

  static styles = styles;

  render() {
    return html`${this._renderContent()}`;
  }
}

customElements.define("type-text", TypeText);
