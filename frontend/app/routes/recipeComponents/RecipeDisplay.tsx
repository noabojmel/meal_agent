import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
  recipe: any;
};

export default function RecipeDisplay({ recipe }: Props) {
  if (!recipe) return null;

  return (
    <Card style={{ marginTop: "2rem" }}>
      {recipe.strMealThumb && (
        <CardMedia
          component="img"
          height="200"
          image={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
      )}
      <CardContent>
        <Typography variant="h5">{recipe.strMeal}</Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {recipe.strInstructions}
        </Typography>
      </CardContent>
    </Card>
  );
}
