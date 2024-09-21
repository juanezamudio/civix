from fastapi import FastAPI
from pydantic import BaseModel
from . import civix_rag

app = FastAPI()

class UserInput(BaseModel):
    user_text: str

@app.post("/user_input")
async def receive_input(json: UserInput):
    
    # print(json.user_text)
    return civix_rag.generate_reponse(json.user_text)

@app.get("/health")
async def get_health():

    return "All Good!"