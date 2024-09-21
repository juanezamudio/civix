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

documents = "miami-events.html"

reader = SimpleDirectoryReader("./")
index = VectorStoreIndex.from_documents(reader.load_data())

query_engine = index.as_query_engine(similarity_top_k = 3)

# query = "When is the next parks and recreation meeting?"

# response = query_engine.query(query)

# print(response)

def generate_reponse(query):

    retrieved_info = query_engine.query(query)
    prompt = f"Using the following information: {retrieved_info}, please answer the question in as much detail as possible: {query}"

    response = openai.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt = prompt,
        max_tokens = 150
    )

    return response.choices[0].text.strip()

query = input("What's your question?")
print(generate_reponse(query))