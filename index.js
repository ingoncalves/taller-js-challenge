// Having a list of n digits (0 <= digit <= 9), where n less than or equal to
// 100, arrange it to move all 0 to right in O(n) time.
// Example [4, 8, 0, 9, 2, 5, 0, 3, 3, 0] -> [4, 8, 9, 2, 5, 3, 3, 0, 0, 0]
// You must display this list in the console.
const moveZerosToRight = (list) => {
    let endIndex = list.length - 1
    for (let i = 0; i < endIndex; i++) {
        const entry = list[i]
        if (entry === 0) {
            list.splice(i, 1)
            list.push(entry)
            endIndex--
        }
    }
}

// After this, the previous list without zeros ([4, 8, 9, 2, 5, 3, 3]) will
// represent a fictitious integer (4892533). You should add 1 unit to it,
// leaving the final list as [4, 8, 9, 2, 5, 3, 4]. You must display this list
// in the console.
const removeZeros = (list) => {
    const indexOfFirstZero = list.indexOf(0)
    list.splice(indexOfFirstZero)
}

const addUnit = (list) => {
    // add to the last element
    list[list.length-1] += 1

    // organize the base-10 elements
    for (let i = list.length-1; i >= 0; i--) {
        if (list[i] / 10 >= 1) {
            list[i] = 0
            if (i > 0) {
                list[i - 1] += 1
            } else {
                list.unshift(1)
            }
        } else {
            break
        }
    }
}

// Finally, multiply by -1 each digit in even position of the array without
// zeros. After this, detect the sub-array, whose sum of digits is the maximum
// and return this sum. Example: [4, 8, 9, 2, 5, 8, 4, 9] -> [-4, 8, -9, 2, -5,
// 8, -4, 9] -> 13. You must display the sum in the console.
const multiplyEvenElementsByMinus1 = (list) => {
    for (let i = 0; i < list.length; i += 2) {
        list[i] *= -1
    }
}

const findMaxSumSubList = (list) => {
    let maxSum = 0

    for (let i = 0; i < list.length; i++) {
        for (let j = i; j < list.length; j++) {
            let sum = 0
            for (let k = i; k < j; k++) {
                sum += list[k]
            }
            if (sum > maxSum) maxSum = sum
        }
    }

    return maxSum
}

const list = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0]
console.log("input", list)

moveZerosToRight(list)
console.log("with zeros in the right", list)

removeZeros(list)
console.log("without zeros", list)

addUnit(list)
console.log("adding 1", list)

multiplyEvenElementsByMinus1(list)
console.log("event elements * -1", list)

console.log("maxSum", findMaxSumSubList(list))

