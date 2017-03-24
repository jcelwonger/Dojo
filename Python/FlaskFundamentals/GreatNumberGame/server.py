from flask import Flask, render_template, url_for, request, redirect, session
import random
import requests
from bs4 import BeautifulSoup, NavigableString

app = Flask(__name__)
app.secret_key = 'SecretStuff'  # Session Key


def random_number():  # Create random number between 1 and 100
    session['the_number'] = random.randrange(0, 101)


@app.route('/')  # Default Route
def index():
    random_number()
    return render_template('index.html')


@app.route('/guess', methods=['POST'])
def compare():
    clear_div()
    user_guess = int(request.form['user_guess'])
    if user_guess > session['the_number']:
        too_high()
        return redirect('/')
    elif user_guess < session['the_number']:
        too_low()
        return redirect('/')
    else:
        just_right()
        return redirect('/')


@app.route('/play_again', methods=['POST'])
def play_again():
    clear_div()
    return render_template('index.html')


def clear_div():
    with open('templates\index.html') as file:
        htmlFile = file.read()
        soup = BeautifulSoup(htmlFile, 'html5lib')
        divTagBad = soup.find(id='bad_guess')
        divTagGood = soup.find(id='good_guess')
        if divTagBad is not None:
            reset_default = divTagBad.extract()
            with open('templates\index.html', 'w') as file:
                file.write(str(soup))
        if divTagGood is not None:
            reset_default = divTagGood.extract()
            with open('templates\index.html', 'w') as file:
                file.write(str(soup))


def too_high():
    with open('templates\index.html') as file:
        htmlFile = file.read()
        soup = BeautifulSoup(htmlFile, 'html5lib')
        pTag = soup.find('p')
        divTag = soup.new_tag('div')
        divTag['id'] = 'bad_guess'
        pTag.insert_after(divTag)
        headTag = soup.new_tag('h2')
        headTag.insert(0, NavigableString('Too high!'))
        divTag.insert(0, headTag)
    with open('templates\index.html', 'w') as file:
        file.write(str(soup))


def too_low():
    with open('templates\index.html') as file:
        htmlFile = file.read()
        soup = BeautifulSoup(htmlFile, "html5lib")
        pTag = soup.find('p')
        divTag = soup.new_tag('div')
        divTag['id'] = 'bad_guess'
        pTag.insert_after(divTag)
        headTag = soup.new_tag('h2')
        headTag.insert(0, NavigableString('Too low!'))
        divTag.insert(0, headTag)
    with open('templates\index.html', 'w') as file:
        file.write(str(soup))


def just_right():
    with open('templates\index.html') as file:
        htmlFile = file.read()
        soup = BeautifulSoup(htmlFile, 'html5lib')
        pTag = soup.find('p')
        divTag = soup.new_tag('div')
        divTag['id'] = 'good_guess'
        pTag.insert_after(divTag)
        headTag = soup.new_tag('h2')
        headTag.insert(0, NavigableString(
            '{{session["the_number"]}} was the number!'))
        divTag.insert(0, headTag)
        formTag = soup.new_tag('form')
        formTag['action'] = '/play_again'
        formTag['method'] = 'POST'
        inputTag = soup.new_tag('input')
        inputTag['type'] = 'submit'
        inputTag['value'] = 'Play again!'
        formTag.insert(0, inputTag)
        divTag.insert(1, formTag)
    with open('templates\index.html', 'w') as file:
        file.write(str(soup))


app.run(debug=True)  # Run in debug mode
