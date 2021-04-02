/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC, useEffect, useState } from "react";
import { useStore } from "../store/useStore";

export const SongList: FC = () => {
  const fetchBpmList = useStore((s) => s.fetchBpmList);

  useEffect(() => {
    fetchBpmList();
  }, []);

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
