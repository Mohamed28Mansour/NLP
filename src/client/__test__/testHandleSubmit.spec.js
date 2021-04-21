import 'babel-polyfill'
import {handleSubmit} from '../js/formSubmit'

describe('Client Test', () => {
        test('Testing the handleSubmit function defined or not', () => {
            const handleSubmitType = typeof handleSubmit
            expect(handleSubmitType).toBe('function');
    })
})    
