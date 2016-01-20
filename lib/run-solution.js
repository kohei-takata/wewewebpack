var exec = require('child_process').exec;

module.exports = function (solution, arg, cb) {
    var child = exec('node "' + solution + '" ' + arg, function (error, stdout, stderr) {

        if (error) return cb(error);
        else cb(null, stdout);
    });
};