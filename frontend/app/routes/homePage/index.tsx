import { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import RecipeForm from "../recipeComponents";
import RecipeDisplay from "../recipeComponents/RecipeDisplay";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { fetchStart, fetchSuccess, fetchError } from "~/store/recipeSlice";
import Sidebar from "./SideBar";
import ErrorState from "~/reusableComponents/ErrorComponent";
export default function Home() {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe.current);
  const loading = useAppSelector((state) => state.recipe.loading);
  const error = useAppSelector((state) => state.recipe.error);

  const handleSubmit = async () => {
    if (!input) return;

    dispatch(fetchStart());

    try {
      const response = await axios.post("http://127.0.0.1:8000/get_recipe", {
        user_input: input,
      });
      console.log(response)
      if (response.data.error) {
        dispatch(fetchError(response.data.error));
      } else {
        dispatch(fetchSuccess(response.data));
      }
    } catch (err) {
       dispatch(fetchError("Failed to fetch recipe, please try again"));
    }
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
<AppBar position="static" sx={{ mb: 4 }}>
  <Toolbar>
    <Typography variant="h6">
      Smart Recipe Agent 🍳
    </Typography>
  </Toolbar>
</AppBar>

  <Grid container direction="row"  spacing={2}>
    <Grid size={{ xs: 12, md: 3 }}>
      <Sidebar />
    </Grid>
    <Grid size={{ xs: 12, md: 9 }}>
      <RecipeForm
        input={input}
        setInput={setInput}
        loading={loading}
        handleSubmit={handleSubmit}
      />
      {error && <ErrorState />}

      <RecipeDisplay recipe={recipe} />
    </Grid>
  </Grid>
</Container>
  );
}

