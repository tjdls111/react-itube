import React, { memo, Component } from 'react';
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl } from 'react-bootstrap';
import { ArchiveFill, MicFill, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';


const Mynavbar = memo(()=>{
  const inputRef = React.createRef();

  const getData = (event)=>{
    event.preventDefault();
    
    const searchWord = inputRef.current.value;
    console.log(searchWord);

    inputRef.current.value = '';
  } 
  
  return (
    <>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home"><ArchiveFill /> ITube</Navbar.Brand>


        <Nav className="me-auto">
          <Nav.Link href="#"><MicFill /></Nav.Link>
          <Nav.Link href="#"><CameraVideo/></Nav.Link>
          <Nav.Link href="#"><Inboxes /></Nav.Link>
          <Nav.Link href="#"><Bell /></Nav.Link>
          <Nav.Link href="#"><PersonCircle color='pink' /></Nav.Link>
  
        </Nav>
        </Container>
      </Navbar>

        <Form>

          <Form.Group className="mb-3" controlId="formSearchData">
            <Form.Control ref = {inputRef} type="text" placeholder="검색" />
            <Button variant="secondary" onClick={getData}>
              검색
            </Button>
            
          </Form.Group>

        </Form>
    </>
    )

  });


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