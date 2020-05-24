import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes'

const items = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        case REMOVE_ITEM:
            return state.filter((item, index) => index != action.payload)
        default:
            return state
    }
}

export default items
