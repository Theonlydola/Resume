import axios from 'axios';
import { gitHubUserName } from './texts';

export async function fetchRepos() {
    const API = "https://api.github.com";
    const allReposAPI = `${API}/users/${gitHubUserName}/repos?sort=updated&direction=desc`;
    const specficReposAPI = `${API}/repos/${gitHubUserName}`;

    let repoList = [];
    try {
        // getting all repos
        const response = await axios.get(allReposAPI);
        repoList = response.data;
        return repoList;
    } catch (error) {
        console.error(error.message);
    }
}