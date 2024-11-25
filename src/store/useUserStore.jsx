// import { create } from "zustand";


// const useUserStore = create((set) => ({
//     user: null,
//     setUser: (user) => set({ user: user }),
//     removerUser: () => set({ user: null }),
// }));

// export default useUserStore;

import { create } from "zustand";

const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user")) || null, // Initialize with data from localStorage
    setUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
        set({ user: user });
    },
    removeUser: () => {
        localStorage.removeItem("user"); // Remove user from localStorage
        set({ user: null });
    },
}));

export default useUserStore;