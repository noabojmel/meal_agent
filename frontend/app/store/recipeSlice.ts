import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


type Recipe = {
  id: number;
  strMeal: string;
  strMealThumb?: string;
  strInstructions: string;
};

export type RecipeState = {
  current: any | null;
  loading: boolean;
  error: string | null;
  history: Recipe[];
};

const initialState: RecipeState = {
  current: null,
  loading: false,
  error: null,
  history: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    fetchStart(state) {
      state.loading = true;
      state.error = null;
      state.current = null;
    },
    fetchSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      const newRecipe = { ...action.payload, id: Date.now() };
      state.current = newRecipe;
      state.error = "";
      const exists = state.history.some(
        (r) => r.strMeal === newRecipe.strMeal);
        if (!exists) {
          state.history.push(newRecipe);
          if (state.history.length > 10) {
            state.history.shift(); 
    }
        }
    },
    fetchError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } =
  recipeSlice.actions;

export default recipeSlice.reducer;