import axios from 'axios';

const API_KEY = `600baa4c6c516f1e1f05bfa2e6f7e393`;
const ROOT_SEARCH_URL = `http://food2fork.com/api/search?key=${API_KEY}`;
const ROOT_GET_URL = `http://food2fork.com/api/get?key=${API_KEY}`

export const FETCH_RECIPE = 'FETCH_RECIPE';
export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export const SORT = 'SORT';

export function updateSort(sort = 'r') {
    return {
        type: SORT,
        sort
    };
}

export function fetchRecipe(recipeId) {
    const url = `${ROOT_GET_URL}&rId=${recipeId}`;
    const request = axios.get(url);

    return {
        type: FETCH_RECIPE,
        payload: request
    };
}

export function searchRecipes(ingredients, desiredSort = 'r', searchPage) {
    let url = `${ROOT_SEARCH_URL}`;
    let q = ingredients != null && ingredients != '' ? ingredients.split(",") : [];
    let page = typeof searchPage === 'number' && searchPage > 0 ? searchPage : 1;

    if (q.length >= 1) {
        url += `&q=${q.join(',')}`;
    }

    if (desiredSort === 't') {
        url = `${ROOT_SEARCH_URL}&sort=t`;
    } else {
        url += `&sort=${desiredSort}`;
    }

    url += `&page=${searchPage}`;

    const request = axios.get(url, {
        responseType: 'json'
    });

    return {
        type: SEARCH_RECIPES,
        payload: request
    };
}
