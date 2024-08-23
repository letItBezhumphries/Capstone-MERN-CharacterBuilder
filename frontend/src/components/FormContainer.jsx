import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FormContainer = ({ children, sm }) => {
  return (
    <Container
      style={
        sm === true
          ? { height: '30%', marginBottom: '40px' }
          : { height: '100%', marginBottom: '20px' }
      }
    >
      <Row className='justify-content-md-center'>
        {/* <Col>{children}</Col> */}
        <div>{children}</div>
      </Row>
    </Container>
  );
};

export default FormContainer;
