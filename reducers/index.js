import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import spells from 'reducers/spells'
import spellbook from 'reducers/spellbook'

export default combineReducers({
  spells,
  spellbook,
  routing: routerReducer
})
