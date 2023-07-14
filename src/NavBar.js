import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//copied from Netlify a NavBar & changed the inner HTML
//TODO add href's to links
export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Executive Recruiting Co</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Clients</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
