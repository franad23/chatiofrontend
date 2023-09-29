import { create } from "zustand";
import { persist } from "zustand/middleware";

//Interfaces 
import { State, Actions } from "../interfaces/auth.interface";

export const useAuthStore = create(persist<State & Actions>(
  (set) => ({
    token: "",
    profile: null,
    isAuth: false,
    setToken: (token: string) => set((state) => ({
      token,
      isAuth: true
    })),
    setProfile: (profile: object) => set((state) => ({
      profile
    }))
  
  }), {
    name: 'auth'
  }
))