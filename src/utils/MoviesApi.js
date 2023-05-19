export const url = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
    constructor(setting) {
        this.url = setting.baseUrl;
        this.headers = setting.headers;
    }

    _handleResponse = (res) => {
        if(res.ok) {
            return res.json();
        }
        return res.json().then((err) => {
            err.code = res.status;
            return Promise.reject(err);
        });
    }

    getMovies(token) {
        return fetch(`${this.url}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(this._handleResponse);
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: url,
    headers: {
        "Content-Type": "application/json", 
        
    }
})
