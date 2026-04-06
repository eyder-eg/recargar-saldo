import { css } from "lit";

export default css`
  :host {
    --text-color: currentColor;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    color: var(--text-color);
  }

  .xs {
    font-size: 0.7rem;
  }

  .s {
    font-size: 0.75rem;
  }

  .m {
    font-size: 1rem;
  }

  .l {
    font-size: 1.5rem;
  }

  .xl {
    font-size: 2.5rem;
  }

  .center {
    text-align: center;
  }

  .left {
    text-align: left;
  }

  .right {
    text-align: right;
  }

  .bold {
    font-weight: 600;
  }
`;
