from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import json
import os
import openai  
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()  # Load environment variables from .env


app = Flask(__name__)
CORS(app)
USERS_FILE = 'users.json'


# Load users from file
def load_users():
    if not os.path.exists(USERS_FILE):
        return []
    with open(USERS_FILE, 'r') as f:
        return json.load(f)


# Save users to file
def save_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f, indent=4)


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    users = load_users()
    if any(user['email'] == email for user in users):
        return jsonify({'message': 'Email already exists'}), 400

    hashed_password = generate_password_hash(password)
    users.append({'email': email, 'password': hashed_password})
    save_users(users)

    return jsonify({'message': 'User registered successfully'}), 201


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    print(data)

    users = load_users()
    user = next((user for user in users if user['email'] == email), None)

    if not user or not check_password_hash(user['password'], password):
        return jsonify({'message': 'Invalid credentials'}), 401

    # Simulate token (in real case, use JWT)
    token = f"fake-jwt-token-for-{email}"
    return jsonify({'message': 'Login successful', 'token': token}), 200


# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",  # or "gpt-3.5-turbo"
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_message}
            ]
        )
        reply = response['choices'][0]['message']['content']
        return jsonify({"reply": reply})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
