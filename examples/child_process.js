var child_process = require('child_process');
 
// exec: spawns a shell.
var url = 'http://ichart.finance.yahoo.com/table.csv?s=YHOO&a=0&b=01&c=2012&d=11&e=31&f=2012&g=d&ignore=.csv';
var wget = 'wget ' + url;
child_process.exec('wget ' + url, function(error, stdout, stderr){
    console.log(stdout);
});
