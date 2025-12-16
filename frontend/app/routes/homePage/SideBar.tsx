import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Paper,
  Box,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import { fetchSuccess } from "~/store/recipeSlice";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.recipe.history);

  const handleClick = (recipe: any) => {
    dispatch(fetchSuccess(recipe));
  };

  return (
    <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        History
      </Typography>

      {history.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No recipes yet
        </Typography>
      ) : (
        <List dense>
          {history.map((recipe) => (
            <ListItem key={recipe.id} disablePadding>
              <ListItemButton onClick={() => handleClick(recipe)}>
                <ListItemText primary={recipe.strMeal} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}
