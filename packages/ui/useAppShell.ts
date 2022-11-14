import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type User = string | null;

type Store = {
  user: User;
  score: number;
  setUser: (user: User) => void;
  addToScore: (amount: number) => void;
};

export const useAppShell = create<Store>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        score: 0,
        setUser: (user) => set(() => ({ user })),
        addToScore: (amount) =>
          set((state) => ({ score: state.score + amount })),
      }),
      {
        name: 'app-shell',
      }
    )
  )
);
