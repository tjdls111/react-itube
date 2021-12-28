import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown,Container, Form,Button,FormControl } from 'react-bootstrap';
import { ArchiveFill, MicFill, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';


class Mynavbar extends Component {
  render() {
    return (
      <>

        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home"><ArchiveFill /> ITube</Navbar.Brand>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="검색" />
            </Form.Group>
          </Form>

          <Nav className="me-auto">
            <Nav.Link href="#"><MicFill /></Nav.Link>
            <Nav.Link href="#"><CameraVideo/></Nav.Link>
            <Nav.Link href="#"><Inboxes /></Nav.Link>
            <Nav.Link href="#"><Bell /></Nav.Link>
            <Nav.Link href="#"><PersonCircle color='pink' /></Nav.Link>
    
          </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Mynavbar;


// import React, { Component } from 'react';
// import { ArchiveFill, MicFill, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';
// import '../index.css';

// class Mynavbar extends Component {
//   render() {
//     return (
//       <>
//         <ul className='navbar'> 
//           <h1><ArchiveFill/> ITube</h1>
          
//           <li href="#"><MicFill /></li>
//           <li href="#"><CameraVideo/></li>
//           <li href="#"><Inboxes /></li>
//           <li href="#"><Bell /></li>
//           <li href="#"><PersonCircle color='pink' /></li>

//         </ul>
//       </>
  
//     );
//   }
// }

// export default Mynavbar;