# from flask_sqlalchemy import SQLAlchemy
from template_site.config import Config
from flask import Flask, session

app = Flask(__name__)

app.config.from_object(Config)

from template_site.main.routes import main
from template_site.errors.handlers import errors

app.register_blueprint(main)
app.register_blueprint(errors)

if __name__ == '__main__':
    app.run(debug=True)