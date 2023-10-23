// Given an array of companies that do a service, execute the cheapest one.
function executeTheCheapestService(companies) {

}
executeTheCheapestService([
    {
        name: 'Nice Redecorations S.R.L.',
        service: {
            price: 25,
            do: () => console.log('Doing the service...')
        }
    },
    {
        name: 'RE Deco',
        service: {
            price: 14,
            do: () => console.log('Redecorating...')
        }
    }
]) // Expected output: Redecorating...
