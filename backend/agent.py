import json
from openai import OpenAI
import tools
from prompts import system_prompt

# export OPENAI_API_KEY="your-api-key"
client = OpenAI()

def run_agent(user_input):
    tool = [
        {
            "name": "get_random_meal",
            "description": "Get a completely random meal from MealDB",
            "parameters": {"type": "object", "properties": {}, "required": []},
        },
        {
            "name": "get_recipe_by_name",
            "description": "Search for a meal by its name",
            "parameters": {
                "type": "object",
                "properties": {
                    "name": {"type": "string", "description": "The name of the meal"}
                },
                "required": ["name"]
            }
        }
    ]
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system",
             "content": system_prompt},
            {"role": "user", "content": user_input}
        ],
        functions=tool,
        function_call="auto"
    )
    message = response.choices[0].message

    # Logger for back checks
    print("=== Agent Decision ===")
    print(message.function_call)

    if message.function_call:
        func_name = message.function_call.name
        args = json.loads(message.function_call.arguments)

        if func_name == "get_random_meal":
            return tools.get_random_meal()
        elif func_name == "get_recipe_by_name":
            res = tools.get_recipe_by_name(args.get("name"))

            # No recipe found in meal db
            if res is None:
                prompt = f"Generate a recipe for '{args.get('name')}' in JSON format with strMeal, strInstructions."
                gpt_res = client.chat.completions.create(
                    model="gpt-4o-mini",
                    messages=[{"role": "user", "content": prompt}],
                )
                content = gpt_res.choices[0].message.content
                try:
                    start = content.find("{")
                    end = content.rfind("}") + 1
                    json_str = content[start:end]
                    return json.loads(json_str)
                except Exception:
                    return False
            return res

    return False
