function countUniqueValues(arr) {
    let count = 0;
    let pointer = 0;
    if (arr.length !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[pointer]) {
                count++
                pointer = i;
            } 
        }
        if ( arr[arr.length-1] === arr[pointer] ) count++
    }
    
    return count
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues([]))
// countUniqueValues([1,4,4,12,12,13])