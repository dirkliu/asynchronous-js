/**
 * promise then chain call
 * @param ms
 * @param rejected
 * @returns {Promise}
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

/*delay(3000).then((ms) => {
    console.log(ms);
    return 3000
}).then(function(ms){
    console.log(ms);
})*/
delay(4000).then((ms) => {
    console.log(ms);
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(3000),3000)
    })
}).then(function(ms){
    console.log('test!');
    console.log(ms);
})



/*delay(4000).then((ms) => {
    return (m)=>setTimeout(()=>{ console.log(m)},m)
}).then((fn)=>{
    fn(3000);
})*/
