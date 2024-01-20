
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation();

    return (
        <Navbar className="bg-primary">
            <Container>
                <Nav className="ms-auto">
                    <Link to="/" className="nav-link text-dark">treding</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/functional" className="nav-link text-dark">podcats</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/prenotazioni" className="nav-link text-dark">Mods e generes</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/pippo" className="nav-link text-dark">new relegase</Link>
                </Nav>
             
            </Container>
        </Navbar>
    )
}

export default Header;
