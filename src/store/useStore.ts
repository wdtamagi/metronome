import create from "zustand";
import { fetchSongsByBpm } from "../services/songList";

export interface Song {
  id_track: number;
  track: string;
  artist: string;
  bmp: number;
}

type Store = {
  bpm: number;
  songList: Record<number, Song[]>;
  updateBpm: (value: number) => void;
  fetchBpmList: (bpm: number) => void;
};
export const useStore = create<Store>((set, get) => ({
  bpm: 72,
  songList: {},
  updateBpm: async (value) => {
    set({ bpm: value });
    get().fetchBpmList(value);
  },
  fetchBpmList: async (bpm: number) => {
    const newSongList = { ...get().songList };

    if (newSongList[bpm] !== undefined) {
      return;
    }

    const response = await fetchSongsByBpm(bpm);
    if (response.ok) {
      const resultObject = await response.json();
      newSongList[bpm] = resultObject.tracks;
      console.log(newSongList);
      set({ songList: newSongList });
    }
  },
}));
