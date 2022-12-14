import './App.css';
import { useEffect } from 'react';
import MainPage from './pages/MainPage';
import CreateRicpePage from './pages/CreateRecipePage';
import Container from 'react-bootstrap/Container';
import RecipePage from './pages/RecipePage';
import AuthPage from './pages/authPage';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import FavoritesPage from './pages/FavoritesPage';
import Button from 'react-bootstrap/Button';
import { api } from './API/api';

function App() {

  useEffect(() => {
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="home">YUMMYCOOKING</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100">
                <Nav.Link as={Link} to="home">Главная</Nav.Link>
                <Nav.Link as={Link} to="favorites">Избранное</Nav.Link>
                <Nav.Link as={Link} to="createRecipe">Создать рецепт</Nav.Link>
                <IsAuth />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Routes>
          <Route path="/home" element={<MainPage />}>
          </Route>
          <Route path="/favorites" element={<FavoritesPage />}>
          </Route>
          <Route path="/createRecipe" element={<CreateRicpePage />}>
          </Route>
          <Route path="/recipe/:id" element={<RecipePage />}>
          </Route>
          <Route path="/auth" element={<AuthPage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function IsAuth() {

  function handleButton(e) {
    localStorage.clear();
    api.Logout();
  }

  console.log(localStorage.getItem('token'))
  if (localStorage.getItem('token')) {
    return (
      <Button className='submit ms-auto' onClick={handleButton}>Выйти</Button>
    )
  }
  else {

    return (
      <Nav.Link as={Link} to="auth" className='ms-auto'>Войти</Nav.Link>
    )
  }
}
export default App;
