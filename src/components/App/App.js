import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import BurgerMenu from '../BurgerMenu/burgerMenu';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [userAuth, setUserAuth] = useState(false);
  const [movies, setMovies] = useState([]);
  const [userMovies, setUserMovies] = useState([]);
  const token = localStorage.getItem('jwt');

  const navigate = useNavigate();

  useEffect(() => {
    mainApi
    .getUserInfo(token)
    .then((user) => {
      setCurrentUser(user);
    })
    .catch(err => {
      console.log(err);
    })
  }, [token]);

  function handleUpdateUser(data) {
    mainApi
    .setUserInfo(data, token)
    .then((user) => {
      setCurrentUser(user);
  })
    .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    mainApi
      .checkToken(token)
      .then((data) => {
        setUserAuth(true)
        setCurrentUser(data)
      })
      .catch((err) => {
        console.log(err)
      })
  });

  function handleRegistration({name, email, password}) {
    mainApi.signUp(name, email, password)
    .then(() => {
      navigate('/login');
      setUserAuth(true);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleLogin(email, password) {
    mainApi.signIn(email, password)
    .then((res) => {
      localStorage.setItem('jwt', res.token);
      navigate('/movies');
      setUserAuth(true);
      console.dir(token)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const signOut = (() => {
    mainApi.signOut();
    localStorage.removeItem('jwt');
    navigate('/');
    setUserAuth(false);
  })

  function handleMoviesSubmit(data) {
    mainApi.addNewMovies(data, token)
    .then((newMovie) => {
      setUserMovies([newMovie, ...userMovies]); 
    })
    .catch(err => {
      console.log(err);
    })
  }

  function handleMovieDelete(movie) {
    mainApi.deleteMovie(movie._id, token)
    .then(() => userMovies.filter((f) => f._id !== movie._id))
    .catch(err => {
      console.log(err);
  });
}

  useEffect(() => {
    moviesApi.getMovies(token)
    .then((movie) => {
      setMovies(movie); 
      navigate('/movies')
    })
    .catch(err => {
      console.log(err);
    });
  }, [token]);

  useEffect(() => {
    mainApi.getSavedMovies(token)
      .then((movie) => {
        setUserMovies(movie);
      })
      .catch((err) => {
        console.log(err);
      });
}, [token]);

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function handleBurgerClick() {
      setIsBurgerOpen(true);
  }

  function closePopup() {
      setIsBurgerOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
        <div className="page">
          <Header loggedIn={userAuth} onBurgerOpen = {handleBurgerClick} />
          <Routes>
            <Route exact path='/signup' element={<Register onSubmit={handleRegistration} />}/>
            <Route exact path='/login' element={<Login onSubmit={handleLogin} />}/>
            <Route exact path="/" element={<Main />}/>
            <Route exact path='/movies' element={<ProtectedRoute loggedIn={userAuth}>
            <Movies 
            movies={movies}
            userMovies={userMovies}
            onSaveMovie={handleMoviesSubmit}
            onDeleteMovie={handleMovieDelete} />
            </ProtectedRoute>}/>
            <Route exact path='/saved-movies' element={<ProtectedRoute loggedIn={userAuth}>
            <SavedMovies 
            userMovies={userMovies}
            onDeleteMovie={handleMovieDelete} />
            </ProtectedRoute>}/>
            <Route exact path='/profile' element={<ProtectedRoute loggedIn={userAuth}>
            <Profile 
            handleUpdateUser={handleUpdateUser}
            handleLogout={signOut} />
            </ProtectedRoute>}/>
          </Routes>
          <BurgerMenu
            isOpen={isBurgerOpen} 
            onClose={closePopup}
            />
        </div> 
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
