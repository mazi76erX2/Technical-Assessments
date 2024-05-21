from flask import Flask, render_template, request
from peewee import *
import requests
from dotenv import load_dotenv
import os

from models import database_proxy, History

load_dotenv()

app = Flask(__name__)

database = SqliteDatabase('test.db')
database_proxy.initialize(database)

database.create_tables([History])

API_KEY = os.environ.get("api-key")

API_LINK = 'https://free.currconv.com/api/v7/convert?q='

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    amount = request.form['amount']
    src_currency = request.form['src_currency']
    tgt_currency = request.form['tgt_currency']

    conversion_string = src_currency.upper() + '_' + tgt_currency.upper()

    result_link = API_LINK + conversion_string + '&compact=ultra&apiKey=' + \
                  API_KEY

    json_result = requests.get(result_link).json()

    conversion = json_result[conversion_string]

    result = conversion*int(amount)

    with database.atomic():
        History.create(
            src_amount=amount, 
            src_currency=src_currency,
            tgt_amount=result,
            tgt_currency=tgt_currency
        )

    return render_template('convert.html', result=result)

@app.route('/history')
def history(limit=25, offset=0):
    history = History.select().limit(limit).offset(offset)

    return render_template('history.html', history=history)

app.run(debug=True)
