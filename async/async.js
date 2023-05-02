'use strict';

// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
    // do network request in 10 sec...
    return 'Jay';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getGrape() {
    await delay(3000);
    return '🍇';
}

async function getBanana() {
    await delay(3000);
    return '🍌';
}

async function pickFruit() {
    const grapePromise = getGrape();
    const bananaPromise = getBanana();
    const grape = await grapePromise;
    const banana = await bananaPromise;
    return `${grape} + ${banana}`
}
pickFruit().then(console.log);