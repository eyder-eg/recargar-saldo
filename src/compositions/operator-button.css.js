import { css } from "lit";

export default css`
  button {
    position: relative;
    width: 100%;
    display: flex;
    background-color: white;
    border: 1px solid #b6b6b6;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border-radius: 1rem;
    gap: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #f1f2ff;
    border: 1px solid #603ff1;
  }

  .active {
    background-color: #f1f2ff;
    border: 1px solid #603ff1;
  }

  .checked {
    position: absolute;
    display: flex;
    padding: 0.4rem;
    background-color: #603ff1;
    border-radius: 100%;
    top: 0.5rem;
    right: 0.5rem;
    color: #ffffff;
  }

  .no-checked {
    display: none;
  }
`;
