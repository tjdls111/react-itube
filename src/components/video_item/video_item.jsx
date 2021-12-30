import React from 'react';
import styles from './video_item.module.css'
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';

const VideoItem = (props) => (
      <Col xs xl="3" xxl="2">
      <Card style={{ width: '18rem' }}>

        {/* <Card.Img variant="top" src={this.props.video.snippet.thumbnails.default.url} /> */}
        {/* <img src={this.props.video.snippet.thumbnails.default.url} alt="" /> */}
        {/* <img variant="top" src={this.props.video.snippet.thumbnails.default.url} /> */}
        <Card.Body>
          <Card.Title>{props.video.snippet.title}</Card.Title>
          <Card.Text>
            {props.video.snippet.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
            
      </Col>
  );

export default VideoItem;