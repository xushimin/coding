const {removeEvenNumberInArray} = require('../remove_even_integers')

describe('test', () => {
    it('test removeEvenNumberInArray', () => {
        expect(removeEvenNumberInArray([1, 2, 3, 4])).toEqual([1, 3]);
        expect(removeEvenNumberInArray([0, 1, 2, 3, 4])).toEqual([1, 3]);
    })
})

