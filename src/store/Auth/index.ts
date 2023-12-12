import {create} from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: null | string; 
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {

    if (username && password) {
      set({ isAuthenticated: true, user: username });
    }
  },
  logout: () => {
    set({ isAuthenticated: false, user: null });
  },
}));
