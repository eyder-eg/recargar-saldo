import { css } from "lit";

export default css`
  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 ;
    gap: 0.5rem;
  }

  .container-footer {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  input {
    font-size: 1.5rem;
    text-align: center;
    padding: 0.8rem;
    border: solid 2px gray;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
  }
`;
