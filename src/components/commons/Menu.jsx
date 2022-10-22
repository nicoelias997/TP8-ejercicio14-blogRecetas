import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {

return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          RecetasML&N
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link">
              Inicio
            </NavLink>
          <NavLink to="/administrar" className="nav-item nav-link">
            Administrar
          </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
       <Link  className="nav-item nav-link" to="/login">Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;