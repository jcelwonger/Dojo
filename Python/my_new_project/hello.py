from flask import Flask  # Import Flask to allow us to create our app.


# Global variable __name__ tells Flask whether or not we are running the
# file directly, or importing it as a module.
app = Flask(__name__)


# The "@" symbol designates a "decorator" which attaches the following
@app.route('/')
# function to the '/' route. This means that whenever we send a request to
# localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    return 'Hello World!'  # Return 'Hello World!' to the response.


app.run(debug=True)      # Run the app in debug mode.
