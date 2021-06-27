export const counterReducer = (state = {
    count: 0
}, action) => {
    if (action.type === 'increment') {
        state.count = parseInt(state.count) + 1
    } else {
        state.count = parseInt(state.count) - 1
    }

    console.log(action.payload && action.payload.message)

    return {...state, state}
}
