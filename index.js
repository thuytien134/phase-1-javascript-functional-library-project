function returnArray(collection){
    if (Array.isArray(collection) === true) {
        return collection
    } else { 
        return Object.values(collection)
    }
}

function myEach(collection, callback) {
   for (let i = 0; i < returnArray(collection).length; i++) {
       callback(returnArray(collection)[i])
   }
   return collection
}


function myMap(collection, callback) {
    let newArr =[]
    for (let i = 0; i < returnArray(collection).length; i++) {
      newArr.push(callback(returnArray(collection)[i]))    
    }
    return newArr
}


function myReduce(collection, callback, acc) {
    let newArr = returnArray(collection)
    if (acc === undefined) {
        acc = newArr[0]
        for (let i = 1; i < newArr.length; i++) {
            acc = callback(acc,newArr[i],collection)  
        }
    } else {
        for (let i = 0; i < newArr.length; i++) {
           acc = callback(acc,newArr[i],collection)          
        }
    }
    return acc
}


function myFind(collection, predicate) {
   for (let i = 0; i < returnArray(collection).length; i++) {
      if (predicate(returnArray(collection)[i]) === true) {
   return returnArray(collection)[i]
      }
 }
}


function myFilter(collection, predicate) {
   let newArr = []
   for (let i = 0; i < returnArray(collection).length; i++) {
      if (predicate(returnArray(collection)[i])=== true) {
          newArr.push(returnArray(collection)[i])
      }
   }
   return newArr
}

function mySize(collection) {
   return returnArray(collection).length
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
