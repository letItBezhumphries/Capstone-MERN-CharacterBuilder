import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children, sm }) => {
  return (
    <Container
      style={
        sm === true
          ? { height: '30%', marginBottom: '40px' }
          : { height: 'auto', marginBottom: '40px' }
      }
    >
      <Row className='justify-content-md-center'>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
