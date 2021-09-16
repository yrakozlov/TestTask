const REG_USER = "REG_USER"
const SET_USER = 'SET_USER'
const LOG_OUT = 'LOG_OUT'

const defaultState = {
    curentUser: {}, 
    isAuth: false
}

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                curentUser: action.payload.user,
                isAuth: true
            }
        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                urentUser: {},
                isAuth: false
            }
            case REG_USER:
                return {
                    ...state,
                    urentUser: action.payload.user,
                    isAuth: true
                }
        default:
            return state
    }
}

export const regUser = (user) => ({type: 'REG_USER', payload: user}) 
export const setUser = (user) => ({type: 'SET_USER', payload: user}) 
export const logOut = () => ({type: 'LOG_OUT'}) 