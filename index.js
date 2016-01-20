var wewewebpack = require('workshopper-adventure')({
    appDir      : __dirname,
    languages   : ['en', 'ja'],
    header: require('workshopper-adventure/default/header'),
    footer: require('workshopper-adventure/default/footer')
});

wewewebpack.addAll(require('./menu.json').map(function (problem) {
    return {
        name: problem,
        fn: function () {
            var p = problem.toLowerCase().replace(/\s/g, '-');
            var dir = require('path').join(__dirname, 'problems', p);
            return require(dir);
        }
    }
}));

module.exports = wewewebpack;