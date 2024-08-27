import React from 'react';
import { Container, Row } from 'react-bootstrap';

const FormContainer = ({ children, sm, width, centered }) => {
  return (
    <Container
      style={
        sm === true
          ? { height: '30%', marginBottom: '40px' }
          : {
              height: '100%',
              marginBottom: '20px',
              width: width ? width : '60%',
              backgroundColor: 'pink',
            }
      }
    >
      <Row
        className={centered ? 'justify-content-md-center' : 'page-container'}
      >
        <div>{children}</div>
      </Row>
    </Container>
  );
};

export default FormContainer;
