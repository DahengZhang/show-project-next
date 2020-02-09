import { INIT_USER } from 'store/actionTypes'

const initialState = {
    id: null,
    name: '',
    avatar: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INIT_USER:
            return { ...state, ...action.value }
        default:
            return state
    }
}
