import json
from flask import jsonify
from flask import Flask
from flask import request 
from flask_cors import CORS, cross_origin

from rating import Rating

app = Flask(__name__)
CORS(app)
 
@app.route("/")
def hello():
    # data = json.loads(request.data)
    # return jsonify(data)
    return "hello world!"

@app.route("/getList", methods=['POST'])
def getList():
    data = json.loads(request.data)
    # if data == [{'y':0,'x':0}]:
    #     print "True"
    if len(data)!= 8:
        return "need 8 queens!"
    else:
        r = Rating(data).rate_result()
        print r
        if r:
            return "succeed!"
        else:
            return "failed! try again!"
 
if __name__ == "__main__":
    # app.debug = True
    app.run()

