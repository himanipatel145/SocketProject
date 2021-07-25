const initialState = {
    user: {
        name: "",
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}

export default authReducer;