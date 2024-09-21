from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
import openai
import json

def load_api_key(secrets_file="secrets.json"):
    with open(secrets_file) as f:
        secrets = json.load(f)
    return secrets["OPENAI_API_KEY"]

# Set secret API key
# Typically, we'd use an environment variable (e.g., echo "export OPENAI_API_KEY='yourkey'" >> ~/.zshrc)
# However, using "internalConsole" in launch.json requires setting it in the code for compatibility with Hebrew
api_key = load_api_key()
openai.api_key = api_key

documents = ["miami-events.html", "rag.txt", "voter-information-guide.pdf"]

reader = SimpleDirectoryReader("./")
index = VectorStoreIndex.from_documents(reader.load_data())

query_engine = index.as_query_engine(similarity_top_k = 3)

# query = "When is the next parks and recreation meeting?"

# response = query_engine.query(query)

# print(response)

def generate_reponse(query):

    retrieved_info = query_engine.query(query)
    prompt = [
        {
            "role": "system", 
            "content": f"You are a helpful assistant that promotes civic engagement by guiding users and answering their questions regarding different events and resources that exist in their city. Use the following information to base your answers: {retrieved_info}. Please answer the user's question in as much detail as possible, but also consise and short. Do not use any new lines or bold any text. Only use plain text in your answer"
        },
        {
            "role": "user", 
            "content": f"{query}"}
    ]

    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages = prompt,
        max_tokens = 1000
    )

    return response.choices[0].message.content.strip()