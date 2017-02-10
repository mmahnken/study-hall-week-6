from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

API_RESULTS = {
    "Arby's":  {"lng":-122.429763, "lat":37.680394},
    "Hackbright":{"lng":-122.411540, "lat":37.788862},
    "Barney's": {'lat': 37.8781148,'lng': -122.2693882}
}

@app.route("/")
def show_homepage():
    """show the index page"""

    return render_template("blank-slate.html")


@app.route("/find-lat-long")
def find_lat_long():
    # get what the user typed
    user_val = request.args.get("place_to_eat")
    print '\n\n\nHERE IS WHAT THE USER TYPED'
    print user_val
    print '********************\n\n\n\n\n'
    # use an api to find lat long
    something_found = API_RESULTS.get(user_val)
    if something_found:
        return jsonify({'result': something_found})    
    else:
        return jsonify({'result': 'Your result was not found.', 'meggie': 'is cool. :)'})

@app.route("/profile/<place_name>")
def show_profile(place_name):
    latlong = API_RESULTS.get(place_name)
    if latlong:
        return render_template("another.html", latlong=latlong)
    else:
        print "\n\n\nNOT FOUND!!\n\n\n"
        return render_template("blank-slate.html")
    

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")

