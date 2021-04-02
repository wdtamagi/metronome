/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC, useState } from "react";

export const SongList: FC = () => {
  return (
    <div
      css={css`
        padding-top: 32px;
      `}
    >
      <span
        css={css`
          color: rgb(142, 172, 255);
          font-size: 14px;
          font-weight: 900;
          text-align: center;
          letter-spacing: 0.78px;
        `}
      >
        Songs that use this BPM:
      </span>
    </div>
  );
};
