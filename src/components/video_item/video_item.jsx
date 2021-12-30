import React from 'react';
import styles from './video_item.module.css'
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';

const VideoItem = ({video:{snippet}}) => (
      <Col xs xl="3" xxl="2">
        <Card className = {styles.video} style={{ width: '18rem' }}>

          <Card.Img  variant="top" src={snippet.thumbnails.default.url} />
          <Card.Body>
            <Card.Title>{snippet.title}</Card.Title>
            <strong>{snippet.channelTitle}</strong>
            <Card.Text className={styles.description}>
              {snippet.description}
            </Card.Text>
          </Card.Body>
        </Card>
            
      </Col>
  );

export default VideoItem;