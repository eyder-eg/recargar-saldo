import { css } from "lit";

export default css`
  .default-button {
    background-color: #ffffff;
    color: black;
    border: 1px solid black;
    font-weight: 600;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow:
      0 4px 6px rgba(0, 0, 0, 0.05),
      0 10px 15px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .default-button:disabled {
    background-color: #c5c5c5;
  }

  .outline-button {
    background-color: transparent;
    color: black;
    font-weight: 600;
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 0.8rem;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .default-active {
    background-color: #432dd7;
    border: 1px solid transparent;
    color: white;
  }
`;
