import { css } from "lit";

export default css`
:host {
  --icon-color : currentColor
}
  .container-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .default {
    background-color: #edf2ff;
    border-radius: 100%;
    height: 52px;
    width: 52px;
  }

  .secondary {
    background-color: transparent;
  }

  .s svg {
    width: 0.6rem;
    height: 0.6rem;
  }

  .m svg {
    width: 1.4rem;
    height: 1.4rem;
  }

  .l svg {
    width: 2.2rem;
    height: 2.2rem;
  }
`;
