from flask import render_template, Blueprint, redirect, url_for, request, flash, session

main = Blueprint('main', __name__)

@main.route("/")
def home():
    return render_template('index.html', title="Home")