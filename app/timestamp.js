'use strict';
var moment = require('moment');

module.exports = function(app) {
    
    app.get('/:query', function(req, res) {
        var date = req.params.query;
        var unix = null;
        var natural = null;
        
        // Check for unix time
        if (+date >= 0) {
            unix = +date;
            natural = unixToNat(unix);
        } 
        
        // Check for natural time
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = natToUnix(date);
            natural = unixToNat(unix);
        }
        
        //res.send(JSON.stringify({ "unix": unix, "natural": natural }));
        res.json({ "unix": unix, "natural": natural });
        
    });
    
    function natToUnix(date) {
        return moment(date, "MMMM D, YYYY").format("X");
    }
    
    function unixToNat(unix) {
        return moment.unix(unix).format("MMMM D, YYYY");
    }
};