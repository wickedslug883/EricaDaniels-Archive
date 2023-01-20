import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBase() {
  return (
    <Navbar className="navBase" bg="light" expand="lg">
    <Container>
      <Navbar.Brand  href="#home">Erica Daniels Music</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-right ">
          <Nav.Link href="/home">Bio</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/media">Media</Nav.Link>
          <Nav.Link href="/login/sign-up">Login/Sign-Up</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBase;
// const Navbar = () => {
  
//   const handleClick = (e) => {
//     let path = e.target.innerText;
  
//     let str = path.toLowerCase();
  
//     window.location.href = `/${str}`;
  
//   }
    
//     return (
//       <div className="hero">
//         <nav>
//           <h2 className="logo">Erica Daniels Music</h2>
  
//           <button type="button" onClick={handleClick}>Bio</button>
//           <button type="button" onClick={handleClick}>Shop</button>
//           <button type="button" onClick={handleClick}>Events</button>
//           <button type="button" onClick={handleClick}>Media</button>
//           <button type="button" onClick={handleClick}>Login/Sign-up</button>
//         </nav>
       
//       </div>
//     );
//   };
  
//   export default Navbar;
