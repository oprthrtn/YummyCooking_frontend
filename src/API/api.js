import axios from "axios";

const apiUrl = 'http://yummycookingbackend/';
const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

async function GetRecipes() {

    let response = await axios.get(apiUrl + 'getRecipes');
    return response.data;
}

async function GetFavoritesRecipes() {
    let response = await axios.get(apiUrl + 'getRecipes');
    return response.data;
}


async function Auth(username, password) {
    return await axios.post(apiUrl + 'auth', { nickname: username, password: password }).then((response) => {
        if (response.data.message) {
            localStorage.setItem('token', response.data.message)
        }
        return response;
    });
}

async function Register(username, password) {
    return await axios.post(apiUrl + 'register', { username: username, password: password }).then((response) => {
        if (response.data.message) {
            localStorage.setItem('token', response.data.message)
        }
        return response;
    });
}

async function Logout() {
    return await axios.post(apiUrl + 'logout', {}, config).then((response) => {
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
    return await axios.post(apiUrl + 'postRecipe', body, config).then((response) => {
        console.log(response)
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
    PostRecipe: PostRecipe,
    GetFavoritesRecipes: GetFavoritesRecipes
}