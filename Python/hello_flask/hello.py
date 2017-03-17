# Import Flask to allow us to create our app.
from flask import Flask, render_template


# Global variable __name__ tells Flask whether or not we are running the
# file directly, or importing it as a module.
app = Flask(__name__)


# function to the '/' route. This means that whenever we send a request to
# the "@" symbol designates a "decorator" which attaches the following
@app.route('/')
# localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    # Return 'Hello World!' to the response.
    return render_template('index.html')


@app.route('/success')
def success():
    return render_template('success.html')


app.run(debug=True)      # Run the app in debug mode.
