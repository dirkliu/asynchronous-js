/**
 * Promise.all
 */
let delay = (ms, rejected) => {
    return new Promise(function (resolve, reject) {
        if (rejected) {
           // reject('promise rejected!');
            setTimeout(() =>reject(ms+' promise rejected!'), ms);
        } else {
            setTimeout(() =>resolve(ms), ms);
        }

        //setTimeout(resolve, ms, 'done');
    });
}

Promise.all([delay(1000),delay(1000),delay(5000)]).then((ms) => {
    console.log(ms)
});

/*Promise.all([delay(1000),delay(1000,1),delay(5000)]).then((ms) => {
    console.log(ms)
});*/
