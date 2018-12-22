import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";
import Miss from "./assets/Miss_Neally.otf";
import Font from "./assets/timesbd.ttf";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    overflow: hidden;
  }

  @font-face {
      font-family: "Times";
      src: url(${Font});
  }

  @font-face {
    font-family: "Miss";
    src: url(${Miss});
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root") as HTMLElement
);
