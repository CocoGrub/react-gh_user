import {SHOW_ALERT} from '../actionTypes'
import {HIDE_ALERT} from '../actionTypes'
// const handlers = {
//     [SHOW_ALERT]: (state, action) => action.payload,
//     [HIDE_ALERT]: () => null,
//     Default: state => state
// }
//
// const alertReducer = (state, action) => {
//     const handler = handlers[action.type] || handlers.Default
//     return handler(state, action)
//
//
// }

const initialState={
    text:null
}

const alertReducer = (state=initialState, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, text:action.payload.text}
        case HIDE_ALERT:
            return null
        default:
            return state

    }
}

export const hideAC = () => {
    return {type: HIDE_ALERT}
}

export const showAC = (text, type = "secondary") => {
    return {
        type: SHOW_ALERT,
        payload: {text: text, type: type}
    }
}

export default alertReducer;