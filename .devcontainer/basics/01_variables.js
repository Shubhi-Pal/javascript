const accountId = 1433
let accountEmail = "Shubhipal@gmail.com"
var accountPassword = "1234"
accountCity = "Bareilly"
let accountState;
//accountId = 2
console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword="211178"
accountCity = "Bengaluru"
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

