/** @jsxImportSource @emotion/react */
import { css, jsx, keyframes } from "@emotion/react";
import React, { FC } from "react";
import { useStore } from "../store/useStore";

const BPM_BASE = 60000;
const BUMP_HEIGHT = 132;

const bumpShapeStyle = css`
  height: ${BUMP_HEIGHT}px;
  width: ${BUMP_HEIGHT}px;
  border-radius: 50%;
`;

const bumpAnimation = keyframes`
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

export const Bump: FC = () => {
  const bpm = useStore((s) => s.bpm);
  const duration = BPM_BASE / bpm;

  return (
    <div
      css={css`
        position: relative;
        display: grid;
        place-items: center;
        height: ${BUMP_HEIGHT * 2}px;
      `}
    >
      <div
        css={[
          bumpShapeStyle,
          css`
            position: absolute;
            z-index: 1;
            display: grid;
            place-items: center;
            background-color: #64bca4;
          `,
        ]}
      >
        <span
          css={css`
            color: rgb(22, 16, 32);
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 1.33px;
          `}
        >
          {bpm}
        </span>
      </div>
      <div
        css={[
          bumpShapeStyle,
          css`
            background: radial-gradient(
              ellipse 100% 100% at 50% 50%,
              rgb(100, 188, 164) 0%,
              rgba(100, 188, 164, 0) 100%
            );
            animation: ${bumpAnimation} ${duration}ms ease infinite;
          `,
        ]}
      ></div>
    </div>
  );
};
