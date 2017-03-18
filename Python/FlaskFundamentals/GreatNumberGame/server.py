from flask import Flask, render_template, url_for, request, redirect, session
import random

app = Flask(__name__)
app.secret_key = 'SecretStuff'  # Session Key


@app.route('/')  # Default Route
def index():
    return render_template('index.html')


app.run(debug=True)  # Run in debug mode
