import { Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="custom-navbar">
      <Container>
        <Nav className="justify-content-center py-3">
          <Nav.Item>
            <Nav.Link href="/home" className="nav-link-custom">Space Today</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/asteroids" className="nav-link-custom">Asteroids</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" className="nav-link-custom">Asteroids Chart</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default Header;
