from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent import run_agent

app = FastAPI()

# Allow CORS so frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class RecipeRequest(BaseModel):
    user_input: str

@app.post("/get_recipe")
def get_recipe(req: RecipeRequest):
    result = run_agent(req.user_input)
    return result if result else {"error": "Unsupported request"}
