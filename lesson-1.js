/**
 * promise 基本用法
 */
let delay = (ms, rejected) => {
    return new Promise(function (resolve, reject) {
        if (rejected) {
            reject('promise rejected!');
        } else {
            setTimeout(() =>resolve(ms), ms);
        }

        //setTimeout(resolve, ms, 'done');
    });
}

/*
delay(5000,'fasdfasd').then(function (ms) {
    console.log(ms + ' ms later!');
}, (value) => {
    console.log('value:', value);
})*/
delay(5000,'fasdfasd').then((ms) => {
    console.log(ms + ' ms later!');
}).catch((value) => {
    console.log('value:', value);
});

