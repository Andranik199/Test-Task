import {extractIdFromUrl} from '../extractIdFromUrl';


it('extractIdFromUrl should return params', () => {
    const result = extractIdFromUrl('http://testing.com/test/2/test/4')
    expect(result).toEqual(4)
})
