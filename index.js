import React from 'react'
import { render as renderDom } from 'react-dom'
import { createStore } from 'redux'

const INCREMENT = 'INCREMENT'

const DECREMENT = 'DECREMENT'

const Counter = (props) => {
    return (
        <div>
            <h3>Hello, look how I can count: {props.count} </h3>
            <button onClick={()=> props.dispatch({type: INCREMENT})}>Up</button>
            <button onClick={()=> props.dispatch({type: DECREMENT})}>Down</button>
        </div>
    )
}

const counter = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}

const store = createStore(counter)

const redraw = () => {
    renderDom(
        <Counter count={store.getState()} dispatch={store.dispatch} />,
        document.getElementById('root')
    )
}

store.subscribe(redraw)
redraw()