let obj = ['abc', 'def', 'ghi', 'jkl', 'mnop', 'qrs', 'tuv', 'wxyz'];
let num = '456789';
let arr = [];
let result = [];
num.split('').forEach((item, index) => {
    let num = item - 2;
    arr.push(obj[num].split(''));
});
function merge(arr1, arr2) {
    let arr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr.push(arr1[i] + arr2[j]);
        }
    }
    return arr;
}
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        result = arr[0];
        continue;
    }
    result = merge(result, arr[i]);
}
console.log(result);
//# sourceMappingURL=calcu.js.map