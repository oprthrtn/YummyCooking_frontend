import './App.css';
import MainPage from './pages/MainPage';
import CreateRicpePage from './pages/CreateRecipePage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
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
                <Nav.Link as={Link} to="auth" className='mr-auto'>Войти</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Routes>
          <Route path="/home" element={<MainPage />}>
          </Route>
          <Route path="/favorites" element={<MainPage />}>
          </Route>
          <Route path="/createRecipe" element={<CreateRicpePage />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
