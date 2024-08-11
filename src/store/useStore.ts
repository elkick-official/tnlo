import { create } from "zustand";

const useDetailStore = create((set) => ({
  userDetails: {},
  setUserDetails: (newUser: any) => set({ userDetails: newUser }),
  clearUserDetails: () => set({ userDetails: {} }),
}));

export default useDetailStore;