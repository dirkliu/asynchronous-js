/**
 * asynchrnous queues
 */
let p1 = new Promise((resolve, reject) => {
    console.log('p1:');
    setTimeout(() => reject(new Error('fail')), 3000)
});

let p2 = new Promise((resolve, reject) => {
    console.log('p2:');
    setTimeout(() => resolve(p1), 1000)
});

p2.then(result => console.log(result)).catch(error => console.log(error));


