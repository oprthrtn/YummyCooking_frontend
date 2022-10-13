import axios from "axios";

const apiUrl = 'http://yummycookingbackend/';

async function GetRecipes() {

    let response = await axios.get(apiUrl + 'getRecipes');
    return response.data;
}


async function Auth(username, password) {
    return await axios.post(apiUrl + 'auth', { username: username, password: password }).then((response) => {
        return response;
    });
}

async function Register(username, password) {
    return await axios.post(apiUrl + 'register', { username: username, password: password }).then((response) => {
        return response;
    });
}

async function Logout() {
    return await axios.post(apiUrl + 'logout').then((response) => {
        return response;
    });
}

async function AddToFavorites(recipeId) {
    return await axios.post(apiUrl + 'addToFavorites', { recipeId: recipeId }).then((response) => {
        return response;
    });
}

async function DeleteRecipe(recipeId) {
    return await axios.delete(apiUrl + `deleteRecipe/${recipeId}`).then((response) => {
        return response;
    });
}


async function PostRecipe(body) {
    return await axios.post(apiUrl + 'postRecipe', { body }).then((response) => {
        return response;
    });
}

export const api = {
    GetRecipes: GetRecipes,
    Auth: Auth,
    Register: Register,
    Logout: Logout,
    AddToFavorites: AddToFavorites,
    DeleteRecipe: DeleteRecipe,
    PostRecipe: PostRecipe
}