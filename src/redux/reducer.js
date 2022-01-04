import ACTION_TYPES from "./constants";

const initialStateUsers = {
    users: [],
    loading: false,
    error: '',

};

export const requestUsers = (state = initialStateUsers, action = {}) => {
    switch (action.type) {
        case ACTION_TYPES.REQUEST_USERS_PENDING:
            return { ...state, loading: true }

        case ACTION_TYPES.REQUEST_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload, error: '' }

        case ACTION_TYPES.REQUEST_USERS_FAILED:
            return { ...state, loading: false, users: [], error: action.payload }

        case ACTION_TYPES.DELETE_USER:
            return { ...state, users: state.users.filter(user => { return user.id !== action.payload }) }

        case ACTION_TYPES.SAVE_USER:
            return { ...state, users: action.payload }

        default:
            return state;
    }
}


