export const url = 'http://localhost:3001';

class MainApi {
    constructor(setting) {
        this.url = setting.baseUrl;
        this.headers = setting.headers;
    }

    _handleResponse = (res) => {
        if(res.ok) {
            return res.json();
        }
        return res.json().then((err) => {
            err.code = res.message;
            return Promise.reject(err);
        });
    }

    signUp (name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            credentials: 'include',
            mode: "cors",
            headers: this.headers,
            body: JSON.stringify(
                {name, email, password}
            )
        })
        .then(this._handleResponse)
        .catch((err) => console.log(err));
    }

    signIn (data) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            credentials: 'include',
            mode: "cors",
            headers: this.headers,
            body: JSON.stringify(data)
        })
        .then(this._handleResponse)
        .catch((err) => console.log(err));
    }

    signOut() {
        return fetch(`${this.url}`, {
            method: "POST",
            credentials: 'include',
            headers: this.headers,
        }).then((res) => this._handleResponse(res));
    }

    getUserInfo(token) { 
        return fetch(`${this.url}/users/me`, { 
            method: "GET", 
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(this._handleResponse);
    }

    setUserInfo(data, token) {
        return fetch(`${this.url}/users/me`, {
            method: "PATCH",
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'},
                body: JSON.stringify(data)
        })
        .then(this._handleResponse);
    }

    addNewMovies(data, token) {
        return fetch(`${this.url}/movies`, {
            method: "POST",
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'},
                body: JSON.stringify({
                    country: data.country,
                    director: data.director,
                    duration: data.duration,
                    year: data.year,
                    description: data.description,
                    image: 'https://api.nomoreparties.co' + data.image.url,
                    trailerLink: data.trailerLink,
                    thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
                    movieId: data.id,
                    nameRU: data.nameRU,
                    nameEN: data.nameEN,
            })
        })
        .then(this._handleResponse);
    }

    getSavedMovies(token) {
        return fetch(`${this.url}/movies`, {
            method: "GET",
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(this._handleResponse);
    }

    deleteMovie(movieId, token) {
        return fetch(`${this.url}/movies/${movieId}`, {
            method: "DELETE",
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'},
        })
    .then(this._handleResponse);
    }

    checkToken(token) {
        return fetch(`${this.url}/users/me`, {
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => this._handleResponse(res));
    }
}

export const mainApi = new MainApi({
    baseUrl: url,
    credentials: 'include',
    headers: {
        "Content-Type": "application/json",
    },
});