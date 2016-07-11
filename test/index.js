var test = require('tape')
var expect = require('expect')
var deepFreeze = require('deep-freeze')


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

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
console.log('todos tests pass')

//Test video 10
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
console.log('toggleTodo tests pass')

