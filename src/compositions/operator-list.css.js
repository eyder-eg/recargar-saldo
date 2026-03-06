import { css } from "lit";

export default css`
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  li {
    list-style: none;
  }
`;
