import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import Root from 'components/Root'
import { loadState, saveState } from 'store/localStorage'
import throttle from 'lodash/throttle'

const store = configureStore(loadState())

store.subscribe(throttle(() => {
    saveState({
        spellbook: store.getState().spellbook
    })
}, 1000))

render(
    <Root store={ store } />,
    document.getElementById('root')
)
