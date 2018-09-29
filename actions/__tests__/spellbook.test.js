import * as actions from 'actions/spellbook'
import * as actionTypes from 'constants/actionTypes'

describe('spellbook synchronous actions', () => {
    test('should create an action to toggle the spell id in the spellbook state', () => {
        const id = '1'
        expect(actions.toggleInSpellbook(id)).toEqual({
            type: actionTypes.TOGGLE_IN_SPELLBOOK,
            id
        })
    })
})
