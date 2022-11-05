const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }

function combine(...args) {
    let result = {};

    args.forEach(item => {
        for (key in item) {
            if (key in result) {
                result[key] += item[key]
            } else {
                result[key] = item[key]
            }
        }
    })
    return result
}


console.log(combine(objA, objB));// Returns { a: 13, b: 20, c: 36, d: 3 }



