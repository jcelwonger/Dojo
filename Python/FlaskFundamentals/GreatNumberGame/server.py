from flask import Flask, render_template, url_for, request, redirect, session
from html import HTML
import random

app = Flask(__name__)
app.secret_key = 'SecretStuff'  # Session Key

# HTML snippets to insert
too_high = '<div id="bad_guess"><h2>Too high!</h2></div>'
too_low = '<div id="bad_guess"><h2>Too low!</h2></div>'
just_right = '<div id="good_guess"><h2>{{session["the_number"]}} was the number!</h2><form action "/play_again" method="POST"><input type="submit" value="Play again!"></form></div>'


def random_number():  # Create random number between 1 and 100
    session['the_number'] = random.randrange(0, 2)


@app.route('/')  # Default Route
def index():
    random_number()
    return render_template('index.html')


@app.route('/guess', methods=['POST'])
def compare():
    user_guess = request.form['user_guess']
    if user_guess > session['the_number']:
        return render_template('index.html', result=too_high)
    elif user_guess < session['the_number']:
        return render_template('index.html', result=too_low)
    else:
        return render_template('index.html', result=just_right)


@app.route('/play_again', methods=['POST'])
def play_again():
    return render_template('index.html')


app.run(debug=True)  # Run in debug mode
