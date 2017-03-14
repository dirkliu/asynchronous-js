/**
 * Promise.race
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

Promise.race([delay(1000),delay(1000),delay(5000,1)]).then((ms) => {
    console.log(ms)
});
