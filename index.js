import { createStore } from 'redux'
import React from 'react'
import { render } from 'react-dom'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}

const addCounter = (list) => {
    list.push(0)
    return list
}

const store = createStore(counter) // points to the counter fn on line 3

const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const renderer = () => {
    render (
        <Counter
            value={store.getState()}
            onIncrement={ () =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={ () =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />
        , document.getElementById('root')
    )
}

store.subscribe(renderer)
renderer()

// document.addEventListener('click', () => {
//     store.dispatch({ type: 'INCREMENT' })
// })

// console.log(store.getState()) //grabbed the initial state = 0 declared in parameter

// store.dispatch({ type: 'INCREMENT'})

// console.log(store.getState()) // increment by 1