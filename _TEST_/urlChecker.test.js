import {validURL} from '../src/client/js/urlChecker'

describe('testing validURL function', () => {
    test('Should be valid url', () => {
        expect(validURL('https://www.example.com/')).toBeTruthy();
    })
})

describe('testing validURL function', () => {
    test('Should be invalid url', () => {
        expect(validURL('//www.example.com/')).toBeFalsy();
    })
})