/**
 * catch
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

delay(4000).then((ms) => {
    console.log(ms);
    return '1111'
}).then((msg)=>{
    console.log(msg);
    return 'aaaaa'+X
}).catch(function(e){
    console.log(e)
}).then(function(msg){
    console.log(msg)
})
