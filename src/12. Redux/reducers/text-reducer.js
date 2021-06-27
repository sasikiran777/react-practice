export const textReducer = (state = '', action) => {
    if (action.type === 'increment') {
        return 'Value Increased'
    } else {
        return 'Value decreased'
    }
}
