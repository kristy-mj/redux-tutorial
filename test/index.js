var test = require('tape')
var expect = require('expect')
var deepFreeze = require('deep-freeze')

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {completed: !state.completed})
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action))
        default:
            return state
    }
}

//Test video 10?? could be 11

const testAddTodo = () => {
    const stateBefore = []
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter)
}

testAddTodo()
console.log(testAddTodo())
console.log('todos tests pass')

//Test video 11?? could be 10
const toggleTodo = (todo) => {
    return Object.assign({}, todo, {
        completed: !todo.completed
    })
}

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    }
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    }

    deepFreeze(todoBefore)

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
}

testToggleTodo()
console.log(testToggleTodo())
console.log('toggleTodo tests pass')


//Test Video 12
const testToggleTodoTwo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go Shopping',
            completed: false
        }
    ]

    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go Shopping',
            completed: true
        }
    ]

    deepFreeze(stateBefore)
    deepFreeze(action)

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter)
}

testToggleTodoTwo()
console.log(testToggleTodoTwo())
console.log('toggleTodoTwo tests pass')

