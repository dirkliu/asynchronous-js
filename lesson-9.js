/**
 * generator next方法的参数
 */
function* foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var b = foo(5);
console.log(b.next())
console.log(b.next(12))
console.log(b.next(13))
