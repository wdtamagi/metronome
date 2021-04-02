import create from "zustand";
import { fetchSongsByBpm } from "../services/songList";

type Store = {
  bpm: number;
  songList: Record<number, unknown[]>;
  updateBpm: (value: number) => void;
  fetchBpmList: () => void;
};
export const useStore = create<Store>((set, get) => ({
  bpm: 72,
  songList: {},
  updateBpm: (value) => {
    set({ bpm: value });
    get().fetchBpmList();
  },
  fetchBpmList: async () => {
    const bpm = get().bpm;
    const newSongList = get().songList;

    if (newSongList[bpm] !== undefined) {
      return;
    }

    const response = await fetchSongsByBpm(bpm);
    newSongList[bpm] = await response.json();
    set({ songList: newSongList });
  },
}));
