import { create } from "zustand";


const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user: user }),
    removerUser: () => set({ user: null }),
}));

export default useUserStore;