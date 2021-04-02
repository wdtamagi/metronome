/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC } from "react";
import { BpmButton } from "./BpmButton";

const BPM_LIST = [72, 74, 82, 84, 128, 138];

export const Control: FC = () => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: auto auto auto;
        row-gap: 11px;
        column-gap: 22px;
        padding-top: 49px;
      `}
    >
      {BPM_LIST.map((value) => (
        <BpmButton key={value} value={value} />
      ))}
    </div>
  );
};
