function countUniqueValues(arr) {
    let pointer = 0;
    if (arr.length === 0) return 0
    else {
        for (let scout = 1; scout < arr.length; scout++) {
            if (arr[scout] > arr[pointer]) {
                pointer++
                arr[pointer] = arr[scout];
            }
        }
        return pointer + 1 // because Index started at 0 
    }   
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([1,4,4,12,12,13]))