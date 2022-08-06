
// 变量的取法真的不能写一二这种方式，非常容易出错
function mergeTwoSortedArray(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    const result = [];
    while ((index1 < arr1.length) && (index2 < arr2.length)) {
        if (arr1[index1] <= arr2[index1]) {
            result.push(arr1[index1]);
            index1++;
        } else if (arr2[index1] < arr1[index1]) {
            result.push(arr2[index1]);
            index2++;
        }

    }
    if (index1 < arr1.length) {
        for (var i = index1; index1 < arr1.length; i++) {
            result.push(arr1[i])
        }
    }

    if (index2 < arr2.length) {
        for (var i = index2; index2 < arr2.length; i++) {
            result.push(arr2[i])
        }
    }
    return result;
}



module.exports = {
    mergeTwoSortedArray
}