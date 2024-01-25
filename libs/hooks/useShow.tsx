import { create } from "zustand";

type ShowStore = {
  show: boolean;
  setShow: () => void;
};

export const useShow = create<ShowStore>((set, get) => ({
  show: false,
  setShow: () => set({ show: !get().show }),
}));
