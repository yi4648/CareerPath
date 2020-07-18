from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import utils

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/city')
def get_city_data():
   res=utils.get_city_data()
   data = []
   for tup in res:
    data.append({"name": tup[0], "value": int(tup[1])})
   return jsonify({"data":data})

@app.route('/item')
def get_item_data():
   data = utils.get_item_data()
   job = []
   total = []
   for k, v in data:
       job.append(k)
       total.append(v)
   return jsonify({"job": job, "total": total})

@app.route('/zhaopin')
def get_zhaopin_data():
   data = utils.get_zhaopin_data()
   job = []
   company = []
   salary=[]
   for k, v, x in data:
       job.append(k)
       company.append(v)
       salary.append(x)
   return jsonify({"job": job, "company": company,"salary": salary})

@app.route('/echarts1')
def get_echarts1_data():
   res=utils.get_echarts1_data()
   data = []
   for tup in res:
    data.append({"name": tup[0], "value": int(tup[1])})
   return jsonify({"data":data})

@app.route('/echarts2')
def get_echarts2_data():
   data = utils.get_echarts2_data()
   position = []
   minpay = []
   maxpay = []
   avgpay = []
   for k, v, x, y in data:
       position.append(k)
       minpay.append(v)
       maxpay.append(x)
       avgpay.append(y)
   return jsonify({"position": position, "minpay": minpay, "maxpay": maxpay, "avgpay": avgpay})

@app.route('/echarts3')
def get_echarts3_data():
   data = utils.get_echarts3_data()
   company = []
   total = []
   avgpay = []
   for k, v, x in data:
       company.append(k)
       total.append(v)
       avgpay.append(x)
   return jsonify({"company": company, "total": total, "avgpay": avgpay})

@app.route('/echarts4')
def get_echarts4_data():
   res=utils.get_echarts4_data()
   data = []
   for tup in res:
    data.append({"name": tup[0], "value": int(tup[1])})
   return jsonify({"data":data})


if __name__ == '__main__':
    app.run()