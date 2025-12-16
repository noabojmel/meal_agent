import requests

def get_random_meal():
    url = "https://www.themealdb.com/api/json/v1/1/random.php"
    res = requests.get(url).json()
    return res["meals"][0]

def get_recipe_by_name(name):
    url = f"https://www.themealdb.com/api/json/v1/1/search.php?s={name}"
    res = requests.get(url).json()
    if res["meals"] is None:
        return None
    return res["meals"][0]
