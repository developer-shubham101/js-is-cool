function sockMerchant(n, ar) {
    let pairs = 0;
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[ar[i]]) {
            pairs++;
            delete obj[ar[i]];
        } else {
            obj[ar[i]] = true;
        }
    }
    return pairs;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));


// console.log();

