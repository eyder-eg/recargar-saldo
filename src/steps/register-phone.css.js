import { css } from "lit";

export default css`
  main {
    background-color: #edf2ff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .card {
    width: 18rem;
    background-color: white;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  .container-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .section-button {
    padding: 0 0 1.5rem 0;
  }

  footer {
    padding: 1.5rem 0 0 0;
    border-top: 1px solid #dadada;
  }
`;
