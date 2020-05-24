import { ADD_ITEM, REMOVE_ITEM } from './actionTypes'

// Add functions like:
const addItem = item => {
    return dispatch =>
        dispatch({
            type: ADD_ITEM,
            payload: item,
        })
}

const removeItem = index => {
    return dispatch =>
        dispatch({
            type: REMOVE_ITEM,
            payload: index,
        })
}

export { addItem, removeItem }
