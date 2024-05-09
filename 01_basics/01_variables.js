const accountId = 767
let accountEmail = "123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "456@gmail.com"
accountPassword = "67890"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])