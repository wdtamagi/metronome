/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC } from "react";
import { useStore } from "../store/useStore";

interface BpmButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: number;
}
export const BpmButton: FC<BpmButtonProps> = ({ value, ...props }) => {
  const bpm = useStore((s) => s.bpm);
  const updateBpm = useStore((s) => s.updateBpm);
  return (
    <button
      onClick={() => updateBpm(value)}
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

        ${value === bpm
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
