import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {

  return (
    <div className="App">
        <div className="page">
          <Routes>
            <Route exact path="/" element={<Main />}/>
            <Route exact path='movies/' element={<Movies />}/>
            <Route exact path='saved-movies/' element={<SavedMovies />}/>
            <Route exact path='profile/' element={<Profile />}/>
            <Route exact path='signup/' element={<Register />}/>
            <Route exact path='login/' element={<Login />}/>
          </Routes>
        </div> 
    </div>
  );
}

export default App;
