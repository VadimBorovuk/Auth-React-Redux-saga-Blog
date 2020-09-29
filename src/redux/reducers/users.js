import {GET_DATA} from '../actions/actionData'

let initialState = {
    data: [],
    loading: true
}

const users = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload,
                loading: false
            }
        default:
            return state;
    }
}

export default users;