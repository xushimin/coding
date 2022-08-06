
const {mergeTwoSortedArray} = require('../mergeTowSortedArrays.js')

describe('test', () => {
    it('test mergeTwoSortedArray', () => {
        expect(mergeTwoSortedArray([1, 2, 3, 4], [1, 2, 3, 4])).toEqual([1, 1,  2, 2, 3, 3, 4, 4]);
        expect(mergeTwoSortedArray([8, 10], [2, 11])).toEqual([2, 8, 10, 11]);
    })
})

