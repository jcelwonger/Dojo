from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'SecretStuff'


def session_counter():
    try:
        session['counter'] += 1
    except:
        session['counter'] = 1


@app.route('/add_two', methods=['POST'])
def add_two():
    session['counter'] += 1
    return redirect('/')


@app.route('/clear_counter', methods=['POST'])
def clear_counter():
    session['counter'] = 0
    return redirect('/')


@app.route('/')
def index():
    session_counter()
    return render_template('index.html', counter=session['counter'])


app.run(debug=True)
