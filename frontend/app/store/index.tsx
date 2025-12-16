import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import { loadState, saveState } from "./sessionStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
  preloadedState,
  devTools: true
});

store.subscribe(() => {
  saveState({
    recipe: store.getState().recipe,
  });
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;