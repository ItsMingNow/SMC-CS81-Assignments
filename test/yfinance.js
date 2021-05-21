var yfinance = require('yfinance');
 
// console.log(yfinance);

yfinance.getQuotes('JNJ', function (err, data) {
    if(err) {
        console.log(err);
        console.log("YUP");
    }
    //...
});
 
// yfinance.getHistorical('JNJ', '2016-08-01', '2016-08-05', function (err, data) {
//     if(err) console.log(err);
//     //...
// });
 
// yfinance.getDividendHistory('JNJ', '2015-01-01', '2015-12-31', function (err, data) {
//     if(err) console.log(err);
//     //... endDate not working!
// });