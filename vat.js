function caclSumAndVat(arr){
    let sum = 0;
    for(let price of arr){
        sum += Number(price);
    }
    console.log({sum});

    let vat = sum * 0.2;
    console.log({vat});

    let total = sum + vat;
    console.log({total});
}
caclSumAndVat(['1.20', '2.60', '3.50']);
