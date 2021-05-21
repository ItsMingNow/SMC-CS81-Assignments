var googleFinance = require('google-finance');

googleFinance.companyNews({
  symbol: 'NASDAQ:AAPL'
}, function (err, news) {
  //...
});

googleFinance.historical({
  symbol: 'NASDAQ:AAPL',
  from: '2014-01-01',
  to: '2014-12-31'
}, function (err, quotes) {
  //...
});
