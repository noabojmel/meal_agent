import { TextField, Button, CircularProgress, Tooltip, IconButton  } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
type Props = {
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  handleSubmit: () => void;
};

export default function RecipeForm({ input, setInput, loading, handleSubmit }: Props) {
  return (
    <>
      <TextField
        fullWidth
        label="Ask me for a recipe..."
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div style={{ display: "flex", alignItems: "center", marginTop: "1rem" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Get Recipe"}
        </Button>

        <Tooltip title="You can ask for a spesific recipe or ask to get a random recipe">
          <IconButton aria-label="info" size="small" style={{ marginLeft: "0.5rem" }}>
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
}