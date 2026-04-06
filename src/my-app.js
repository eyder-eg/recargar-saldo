import { LitElement, html } from "lit";
import { Router } from "@lit-labs/router";
import "./steps/RegisterPhone.js";
import "./steps/RechargePhone.js";
import "./steps/ViewDetails.js";

class MyApp extends LitElement {
  static properties = {
    _phoneNumber: { type: String },
    _amount: { type: Number },
    _operator: { type: Number },
    _datetime: { type: Number },
  };

  constructor() {
    super();
    this._phoneNumber = "";
    this._amount = "";
    this._operator = "";
    this._datetime = "";
    this.router = new Router(this, [
      {
        path: "/",
        render: () => html`<register-phone></register-phone>`,
      },
      {
        path: "/recharge",
        render: () =>
          html`<recharge-phone
            .phoneNumber=${this._phoneNumber}
          ></recharge-phone>`,
      },
      {
        path: "/view",
        render: () =>
          html`<view-details
            .phoneNumber=${this._phoneNumber}
            .operator=${this._operator}
            .amount=${this._amount}
            .datetime=${this._datetime}
          ></view-details>`,
      },
    ]);
  }

  _setPhoneNumber(e) {
    this._phoneNumber = e.detail.phoneNumber;
  }

  _setAmount(e) {
    this._amount = e.detail.amount;
  }

  _setOperator(e) {
    this._operator = e.detail.operator.name;
  }

  _setDatetime(e) {
    this._datetime = e.detail.datetime;
  }

  render() {
    return html`
      <div
        @send-phone-number=${this._setPhoneNumber}
        @send-amount=${this._setAmount}
        @send-operator=${this._setOperator}
        @send-datetime=${this._setDatetime}
      >
        ${this.router.outlet()}
      </div>
    `;
  }
}

customElements.define("my-app", MyApp);
