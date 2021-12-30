import React from 'react';
import styles from './video_item.module.css'
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';

const VideoItem = ({video:{snippet}}) => (
      <Col xs md="6" xl="4" xxl="3">
        <Card className = {styles.video}>

          <Card.Img  variant="top" src={snippet.thumbnails.high.url} />
          <Card.Body className={styles.video_meta}>
            <Card.Title>{snippet.title}</Card.Title>
            <Card.Text className={styles.channel_name}>{snippet.channelTitle}</Card.Text>
          </Card.Body>
        </Card>
            
      </Col>
  );

export default VideoItem;