import { api } from '../API/api';

const GET_RECIPES = 'GET_RECIPES';
const initialState = {
    recipes: []
};


export function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case GET_RECIPES:
            newState.recipes = action.value
            return newState;
        default:
            return newState;
    }
}

function getRecipesActionCreator(value) {
    return {
        type: GET_RECIPES,
        value: value
    }
}


export function getRecipesThunkCreator() {

    return async dispatch => {
        const recipes = await api.GetRecipes();
        dispatch(getRecipesActionCreator(recipes));
    }
}