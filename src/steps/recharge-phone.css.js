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
    width: 20rem;
    background-color: white;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  header {
    display: flex;
    border-bottom: 1px solid #b6b6b6;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
