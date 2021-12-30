import React, { Component } from 'react';
import Video from '../video'
import VideoItem from '../video_item/video_item';
import { Col, Row, Navbar,Nav,NavDropdown,Container, Form,Button,FormControl, Card } from 'react-bootstrap';


const VideoList = (props) => (
  <Row>
  { props.results.map(video => (
    <VideoItem
      key = {video.id}
      video = {video}
    />

  ))}
  </Row>
  );

export default VideoList;
