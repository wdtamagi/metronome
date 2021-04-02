import create from "zustand";

type Store = {
  bpm: number;
  updateBpm: (value: number) => void;
};
export const useStore = create<Store>((set) => ({
  bpm: 72,
  updateBpm: (value) => set((state) => ({ bpm: value })),
}));
