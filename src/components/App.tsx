/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC, useState } from "react";
import { Bump } from "./Bump";
import { Control } from "./Control";

export const App: FC = () => {
  const [bpm, setBpm] = useState(138);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      `}
    >
      <h1
        css={css`
          color: rgb(142, 172, 255);
          font-size: 18px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 6px;
          padding-bottom: 49px;
        `}
      >
        DIGITAL METRONOME
      </h1>
      <Bump bpm={bpm} />
      <Control bpm={bpm} handleClick={setBpm} />
    </div>
  );
};
