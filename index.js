function myEach(collection, callback) {
    if (Array.isArray(collection) === true) {
        collection.forEach(callback)
    }
    else {
        let newArr = Object.values(collection)
        newArr.forEach(callback)
    }
    return collection
}

function myMap(collection, callback) {
    if (Array.isArray(collection) === true) {
        return collection.map(callback)
    }
    else {
        let newArr = Object.values(collection)
        return newArr.map(callback)
    }
}

function myReduce(collection, callback, acc = 0) {
    if (Array.isArray(collection) === true) {
        return collection.reduce(callback, acc)
    }
    else {
        let newArr = Object.values(collection);
        return newArr.reduce(callback, acc)
    }
}

function myFind(collection, predicate) {
    if (Array.isArray(collection) === true) {
        return collection.find(predicate)
    }
    else {
        let newArr = Object.values(collection);
        return newArr.find(predicate)
    }
}
function myFilter(collection, predicate) {
    if (Array.isArray(collection) === true) {
        return collection.filter(predicate)
    }
    else {
        let newArr = Object.values(collection);
        return newArr.filter(predicate)
    }
}

function mySize(collection) {
    if (Array.isArray(collection) === true) {
        return collection.length
    }
    else {
        let newArr = Object.values(collection);
        return newArr.length
    }
}

function myFirst(array, n = 0) {
    if (n === 0) {
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

function myLast(array, n = 0) {
    if (n === 0) {
        return array[array.length - 1]
    } else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}

// function compareNumber(a,b){
//     return a -b
// }
// function mySortBy(array, callback){
    
//    return  array.sort()

// }
