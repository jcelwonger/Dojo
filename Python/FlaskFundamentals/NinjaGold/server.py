from flask import Flask, render_template, url_for, request, redirect, session
from bs4 import BeautifulSoup, NavigableString
import random
import requests

app = Flask(__name__)
app.secret_key = 'SecretStuff'  # Session Key


@app.route('/')  # Default Route
def index():
    return render_template('index.html', player_honey=1)


@app.route('/process_money', methods=['POST'])
def index():
    return render_template('index.html', player_honey=1)


app.run(debug=True)  # Run in debug mode
