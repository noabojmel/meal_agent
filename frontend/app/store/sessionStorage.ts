import type {RecipeState} from "./recipeSlice"

export const loadState = (): { recipe: RecipeState } | undefined => {
  try {
    const serializedState = sessionStorage.getItem("recipeState");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as { recipe: RecipeState };
  } catch (err) {
    console.error(err);
    return undefined;
  }
};


export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("recipeState", serializedState);
  } catch (err) {
    console.error("Failed to save state to sessionStorage", err);
  }
};
