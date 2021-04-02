/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC } from "react";

interface BpmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: number;
  active: boolean;
}
export const BpmButton: FC<BpmButtonProps> = ({ value, active, ...props }) => {
  return (
    <button
      css={css`
        display: grid;
        place-items: center;
        width: 86px;
        height: 35px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        border: none;
        outline: none;
        cursor: pointer;

        ${active
          ? `
          color: rgb(22, 16, 32);
          background: rgb(142, 172, 255);  
        `
          : `
          color: rgb(142, 172, 255);
          background: rgb(45, 28, 63);
        `}

        &:hover {
          background: rgba(142, 172, 255, 0.3);
        }
      `}
      {...props}
    >
      {`${value} BPM`}
    </button>
  );
};
