var wget = require('wget');
var src = 'http://ichart.finance.yahoo.com/table.csv?s=YHOO&a=0&b=01&c=2012&d=11&e=31&f=2012&g=d&ignore=.csv';
var output = './table.csv';

var options = {
    proxy: 'http://host:port'
};

var download = wget.download(src, output, options);
download.on('error', function(err) {
    console.log(err);
});
download.on('end', function(output) {
    console.log(output);
});
download.on('progress', function(progress) {
    // code to show progress bar
    console.log("get");
});
