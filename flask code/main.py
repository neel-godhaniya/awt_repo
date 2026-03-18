from flask import Flask

app = Flask(__name__)
@app.route('/')
def home():
    return "<h1>Home Page</h1><p>Welcome Neel</p>"

@app.route('/about')
def about():
    return "<h1>About Page</h1>"

def contact():
    return "<h1>Contact Page</h1>"

app.add_url_rule('/contact', 'contact', contact)


@app.route('/user/<name>')
def user(name):
    return f"<h1>Hello {name}</h1>"

def post(post_id):
    return f"<h1>Post ID: {post_id}</h1>"

app.add_url_rule('/post/<int:post_id>', 'post', post)

if __name__ == "__main__":
    app.run(debug=True)