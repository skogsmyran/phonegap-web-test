var CharadeStore = function(successCallback, errorCallback) {

    this.generate = function(callback) {
        var length = this.Charades.length();
        var generatedid = Math.floor((math.random()*length)+1);
        console.log(generatedid);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.Charades = ["Wings","Guitar","Cow","Summer","Elbow","Rope","Ball","Rollerblade","Fang","Snowball","Turtle","Ear","Cheek","Smile","Jar","Tail","Basketball","Mouth","Telephone","Star","Tree","Airplane","Point","Alarm","Table tennis","Beg","Drum","Cape","Chin","Roof","Rain","Saddle","Room"]

    callLater(successCallback);

}