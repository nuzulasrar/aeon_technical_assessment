import {create} from 'zustand';

const useStore = create(set => ({
  isLoggedIn: false,
  updateIsLoggedIn: (newIsLoggedIn: boolean) =>
    set({isLoggedIn: newIsLoggedIn}),
}));

export default useStore;
