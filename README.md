# Smart Recipe Agent 🍳

A full-stack recipe application that lets users search for meals, get random recipes from the MealDB database, and use GPT agent methods to generate recipes. Built with **React**, **Vite**, **Redux Toolkit**, **FastAPI**, and **OpenAI GPT**.

[Watch the demo video](public/app.mp4)

## Features

- Ask for a recipe by name or get a completely random meal.  
- If the recipe doesn’t exist, GPT-4 generates a recipe automatically.  
- Displays recipe instructions clearly in the UI.  
- Keeps a history of the last 10 recipes.

## Tech Stack

**Frontend:**  
- React + Vite  
- TypeScript  
- Redux Toolkit for state management  
- Material UI (MUI) components  

**Backend:**  
- FastAPI (Python)  
- OpenAI GPT-4o-mini for recipe generation  
- MealDB API integration  

**Other:**  
- Axios for API requests  
- Tailwind CSS for basic styling

## Installation and Setup

1. **Clone the repository and navigate into it**  
2. **Install frontend dependencies**  
3. **Install backend dependencies**  
4. **Set your OpenAI API key**  
5. **Run the backend**  
6. **Run the frontend**  

```bash
# Step 1: Clone repo
git clone <your-repo-url>
cd your-repo

# Step 2: Install frontend dependencies
cd frontend
npm install

# Step 3: Install backend dependencies
cd backend
pip install -r requirements.txt

# Step 4: Set your OpenAI API key
# macOS/Linux
export OPENAI_API_KEY="your-api-key"
# Windows
setx OPENAI_API_KEY "your-api-key"

# Step 5: Run the backend
cd backend
uvicorn main:app --reload

# Step 6: Run the frontend
cd frontend
npm run dev



