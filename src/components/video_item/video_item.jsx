import React from 'react';
import styles from './video_item.module.css'
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';

const VideoItem = ({video:{snippet}}) => (
      <Col xs xl="3" xxl="2">
        <Card className = {styles.video}>

          <Card.Img  variant="top" src={snippet.thumbnails.default.url} />
          <Card.Body className={styles.video_meta}>
            <Card.Title>{snippet.title}</Card.Title>
            <Card.Text className={styles.channel_name}>{snippet.channelTitle}</Card.Text>
          </Card.Body>
        </Card>
            
      </Col>
  );

export default VideoItem;