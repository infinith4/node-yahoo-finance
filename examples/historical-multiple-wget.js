/*
 * lib/historical-multiple.js
 */

'use strict';

var util = require('util');
var child_process = require('child_process');

require('colors');

var _ = require('lodash'),
    yahooFinance = require('..');

var SYMBOLS = [
  'AAPL',
  'AMZN',
  'GOOGL',
  'YHOO'
]; // I wanna all name.

yahooFinance.historical({
  symbols: SYMBOLS,
  from: '2012-01-01',
  to: '2012-12-31',
  period: 'd' // Optional: d = daily (default), w = weekly, m = monthly, v = dividends only
}, function (err, results) {
  if (err) { throw err; }

  _.each(results, function (result) {
    console.log(util.format(
      '=== %s (%d) ===',
      result.symbol,
      result.quotes.length
    ).cyan);
    console.log(result.url.yellow);
    // exec: spawns a shell.                                                       
    var wgetcmd = 'wget ' + result.url;
    child_process.exec(wgetcmd, function(error, stdout, stderr){
	console.log(stdout);
	console.log('wget');
    });
    console.log(
      '%s\n...\n%s',
      JSON.stringify(result.quotes[0], null, 2),
      JSON.stringify(result.quotes[result.quotes.length - 1], null, 2)
    );
  });
});
