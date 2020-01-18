from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import json
from collections import Counter
import requests
import os

app = Flask(__name__)
api = Api(app)
CORS(app)

@app.route("/hello")
def hello():
    return jsonify({'text':'Hello World!'})


@app.route("/getMetric",methods=['GET'])
def getMetric():
    with open("./metric.json") as f:
        data=json.load(f)
    return  jsonify({'data':data})


@app.route("/saveMetric",methods=['POST'])
def saveMetricData():
    params=request.get_json(silent=True)
    print(params["data"])
    with open("./metric.json",'w') as f:
        result=json.dump(params["data"],f)

    return  jsonify({'response':'Metric saved successfully'})

@app.route("/getAllUsers",methods=['GET'])
def getAllUsers():
    finalData=[]
    for username in os.listdir('./Users/'):
        if( ".json" in username):
            with open("./Users/"+username) as f:
                data=json.load(f)

            val={
                "name":data['general']['name'],
                "company":data['general']["company"],
                "salary" :data['general']["salary"],
                "score" : 100
            }
            finalData.append(val)

    return  jsonify({'data':finalData})

@app.route("/getUser",methods=['POST'])
def getUser():
    params=request.get_json(silent=True)
    username=params["userName"]
    try:
        print(username)
        with open("./Users/"+username+".json") as f:
            data=json.load(f)

        return  jsonify({'userProfile':data})
    except:
        return jsonify({'userProfile':{}}),400

if __name__ == '__main__':
   app.run(port=5005)
