var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
  symbol: 'AAPL',
  from: '2021-05-01',
  to: '2021-05-02',
  // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
    if(err){
        console.log("yikes");
    }
    console.log(quotes);
  //...
});