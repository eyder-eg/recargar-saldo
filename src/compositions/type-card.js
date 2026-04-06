import { html, LitElement } from "lit";
import styles from "./type-card.css.js";
import "../components/type-icon.js";
import "../components/type-text.js";

export class NumberCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    icon: { type : String}
  };

  constructor() {
    super();
    this.title = "Sin título";
    this.description = "Sin descripción";
    this.icon = "smartphone";
  }
  static styles = styles;

  render() {
    return html`
      <div class="card">
        <type-icon .icon=${this.icon} .variant=${"secondary"}></type-icon>
        <div class="container-text">
          <type-text
            .text=${this.title}
            .tag=${"p"}
            .size=${"s"}
          ></type-text>
          <type-text
            .text=${this.description}
            .tag=${"p"}
            .size=${"m"}
            .weight=${"bold"}
          ></type-text>
        </div>
      </div>
    `;
  }
}

customElements.define("type-card", NumberCard);
