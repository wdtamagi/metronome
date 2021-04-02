import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #161020;
  }

  #root {
    display: grid;
    grid-template-columns: 1fr min(476px, 100%) 1fr;
  }

  #root > * {
    grid-column: 2;
  }
`;
