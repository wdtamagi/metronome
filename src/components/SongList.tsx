/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { FC, useEffect } from "react";
import { useStore } from "../store/useStore";

export const SongList: FC = () => {
  const fetchBpmList = useStore((s) => s.fetchBpmList);
  const bpm = useStore((s) => s.bpm);
  const songList = useStore((s) => s.songList)?.[bpm];

  useEffect(() => {
    fetchBpmList(bpm);
  }, []);

  return (
    <div
      css={css`
        padding-top: 32px;
        color: rgb(142, 172, 255);
        font-size: 14px;
        font-weight: 900;
        text-align: center;
        letter-spacing: 0.78px;
      `}
    >
      <p>Songs that use this BPM:</p>
      <ul
        css={css`
          text-align: center;
          list-style: none;
          color: rgb(255, 255, 255);
          font-weight: 500;
          padding: 0;
        `}
      >
        {songList?.map((song) => (
          <li key={song.id_track}>{`${song.track} (${song.artist})`}</li>
        ))}
      </ul>
    </div>
  );
};
