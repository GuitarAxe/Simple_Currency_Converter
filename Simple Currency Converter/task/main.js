const input = require('sync-input');

const currencies = new Map(Object.entries({
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}));

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

let quit = false;
while (!quit) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);

    let command = input();
    switch (command) {
        case '1':
            exchangeMoney();
            break;
        case '2':
            quit = true;
            console.log('Have a nice day!');
            break;
        default:
            console.log('Unknown input');
    }
}



function exchangeMoney() {
    console.log('What do you want to convert?');
    try {
        let start_currency = checkIfCurrencyExist(input('From: ').toUpperCase());
        let end_currency = checkIfCurrencyExist(input("To: ").toUpperCase());
        let amount = input("Amount: ");

        if (isNaN(amount)) console.log("The amount has to be a number");
        else if (amount < 1) console.log("The amount cannot be less than 1");
        else {
            const money = amount * currencies.get(end_currency) / currencies.get(start_currency);
            console.log(`Result: ${amount} ${start_currency} equals ${money.toFixed(4)} ${end_currency}`);
        }
    } catch (exc) {
        console.log(exc)
    }
}


function checkIfCurrencyExist(currency) {
    if (!currencies.has(currency)) throw 'Unknown currency';
    return currency;
}
