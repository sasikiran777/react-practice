export const counterUpdate = (type = null) => {
    if(type) {
        return {
            type: 'increment',
            payload: {
                message: 'Counter incremented'
            }
        }
    }

    return {
        type: 'decrease',
        payload: {
            message: 'Counter decremented'
        }
    }
}

export const updateText = (type = null) => {
    if(type) {
        return {
            type: 'increment'
        }
    }

    return {
        type: 'decrease'
    }
}

export default {
    counterUpdate,
    updateText
}
