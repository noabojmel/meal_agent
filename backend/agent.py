import json
from openai import OpenAI
import tools
from prompts import system_prompt

client = OpenAI(api_key="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")

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

    # Log what the model chose
    print("=== Agent Decision ===")
    print(message.function_call)

    # Execute the chosen tool
    if message.function_call:
        func_name = message.function_call.name
        args = json.loads(message.function_call.arguments)

        if func_name == "get_random_meal":
            return tools.get_random_meal()
        elif func_name == "get_recipe_by_name":
            return tools.get_recipe_by_name(args.get("name"))

    return False
