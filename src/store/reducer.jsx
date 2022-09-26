import { api } from '../API/api';

const initialState = {
};


export function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {

        default: return newState;
    }
}

function getRecipesActionCreator(value) {
    return {
        type: '',
        value: value
    }
}


export function getRecipesThunkCreator() {
    return (dispatch) => {
        dispatch(getRecipesActionCreator(api.getAttestationData()));
    }
}