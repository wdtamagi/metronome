/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC } from "react";
import { Bump } from "./Bump";
import { Control } from "./Control";
import { SongList } from "./SongList";

export const App: FC = () => {
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
      <Bump />
      <Control />
      <SongList />
    </div>
  );
};
