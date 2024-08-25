import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'purple' }}>
      <Container style={{ backgroundColor: 'purple', color: 'white' }}>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; MERN Dungeon Builder
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
