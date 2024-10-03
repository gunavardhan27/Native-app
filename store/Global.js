import { useEffect } from 'react';
import {create} from 'zustand'
import { getCurrentUser } from '../lib/appwrite';
import { Alert } from 'react-native';


export const useUserStore = create((set) => ({
    isLoggedIn:false,
    user: null,
    setUser: (user,isLoggedIn) => set({ user,isLoggedIn }),
    resetUser: () => set({ user: null,isLoggedIn:false }), // Reset user state
  }));