from fastapi import FastAPI
from civix_rag import generate_response

app = FastAPI()

@app.post("/user_input")
async def receive_input(json):
    
    return generate_response(json)