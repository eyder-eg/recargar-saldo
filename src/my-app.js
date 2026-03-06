import { LitElement, html } from "lit";
import { Router } from "@lit-labs/router";
import "./steps/RegisterPhone.js";
import "./steps/RechargePhone.js";
import "./steps/ViewDetails.js";

class MyApp extends LitElement {
  static properties = {
    phoneNumber: { type: String },
  };

  constructor() {
    super();
    this.phoneNumber = "xd";
    this.router = new Router(this, [
      {
        path: "/",
        render: () => html`<register-phone></register-phone>`,
      },
      {
        path: "/recharge",
        render: () =>
          html`<recharge-phone .phoneNumber=${this.phoneNumber}></recharge-phone>`,
      },
      {
        path: "/view",
        render: () =>
          html`<view-details .number=${this.phoneNumber}></view-details>`,
      },
    ]);
  }

  handleRegisterNumber(e) {
    this.phoneNumber = e.detail.phoneNumber;
  }

  render() {
    return html`
      <div @register-phone-number=${this.handleRegisterNumber}>
        ${this.router.outlet()}
      </div>
    `;
  }
}

customElements.define("my-app", MyApp);
