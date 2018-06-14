import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const rootUrl = "http://reduxblog.herokuapp.com/api/";
const API_KEY = '?key=Jamma1234';

export function fetchPosts(){
    const request = axios.get(`${rootUrl}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS
        payload: request
    };
}