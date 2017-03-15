/**
 * done 和finally
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

delay(100).then(function(){
    console.log('first!');
}).then(function(){
    console.log('second');
    return x+2
}).catch(function(e){
    //console.log('e:',e);
    console.log('third')
}).then(function(){
    z+3
}).done()
