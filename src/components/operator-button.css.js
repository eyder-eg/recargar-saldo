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
    padding: 1rem;
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
    padding: 1rem;
    background-color: #603ff1;
    top: 0;
    right: 0;
  }

  .no-checked {
    display: none;
  }
`;
