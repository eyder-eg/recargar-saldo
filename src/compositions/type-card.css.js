import { css } from "lit";

export default css`

:host {
  --bg-color : #dadada;
}

  .card {
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    gap: 0.8rem;
    border-radius: 1rem;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
  }
`;
