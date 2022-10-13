import { api } from '../API/api';

const GET_RECIPES = 'GET_RECIPES';
const GET_FAVORITES_RECIPES = 'GET_FAVORITES_RECIPES';

const initialState = {
    recipes: [],
    favoritesRecipes: []
};


export function reducer(state = initialState, action) {
    let newState = { ...state };

    switch (action.type) {
        case GET_RECIPES:
            newState.recipes = action.value
            return newState;
        case GET_FAVORITES_RECIPES:
            newState.favoritesRecipes = action.value;
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

function getFavoritesRecipesActionCreator(value) {
    return {
        type: GET_FAVORITES_RECIPES,
        value: value
    }
}

export function getRecipesThunkCreator() {
    return async dispatch => {
        const recipes = await api.GetRecipes();
        dispatch(getRecipesActionCreator(recipes));
    }
}

export function getFavoritesRecipesThunkCreator() {
    return async dispatch => {
        const recipes = await api.GetFavoritesRecipes();
        dispatch(getRecipesActionCreator(recipes));
    }
}