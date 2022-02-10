from flask import Blueprint, render_template, url_for, redirect, flash

errors = Blueprint('errors', __name__)


@errors.app_errorhandler(404)
def error_404(error):
    return redirect(url_for('main.home'))


@errors.app_errorhandler(403)
def error_403(error):
    return redirect(url_for('main.home'))


@errors.app_errorhandler(500)
def error_500(error):
    return redirect(url_for('main.home'))
