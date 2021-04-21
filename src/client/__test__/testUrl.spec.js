import {urlChecker} from '../js/checkURL'

describe('Test check url functionality', () => {
    test('Testing the urlChecker function defined or not', () => {
        const urlCheckerType = typeof urlChecker
        expect(urlCheckerType).toBe('function');
    })

    test('Testing the urlChecker function return false for invalid url', () => {
        const falseUrl = 'word'
        expect(urlChecker(falseUrl)).toBe(false)
    })

    test('Testing the urlChecker function return true for valid url', () => {
        const trueUrl = 'www.google.com'
        expect(urlChecker(trueUrl)).toBe(true)
    })
})
