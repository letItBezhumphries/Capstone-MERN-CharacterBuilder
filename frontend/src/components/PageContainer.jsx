import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CollapsibleList from './CollapsibleList';
import { LinkContainer } from 'react-router-bootstrap';

const PageContainer = ({
  isRace,
  isClass,
  isModal,
  selection,
  traits,
  traitNames,
  description,
}) => {
  //  traits is the prop we want to pass to collapsibleItems

  return (
    <Container
      className={isModal ? 'modal-content' : 'overview-container'}
      fluid
    >
      <Row className={isModal ? 'confirmation-primary' : 'overview-primary'}>
        <Col
          xs={'auto'}
          md={8}
          className={isModal ? 'confirmation-info' : 'selection-info'}
        >
          <div className='form-page-header'>{selection.name}</div>
          <p className='description'>{isRace ? description : null}</p>
          {!isModal ? (
            <p className='traitlist'>
              <strong>{isRace ? `Race Traits:` : 'Something Else'}</strong>
              <span>
                {isRace && traitNames.length > 0
                  ? `${traitNames.join(', ')}`
                  : null}
              </span>
            </p>
          ) : null}
        </Col>
        <Col
          xs={'auto'}
          md={2}
          className={isModal ? 'confirmation-aside' : 'selection-aside'}
        >
          <img
            src={selection.imgSrc}
            className={isModal ? 'confirmation-img' : 'selection-img'}
          />
          {!isModal ? (
            <LinkContainer to='/character/chrace'>
              <button className='change-race-btn'>Change Race</button>
            </LinkContainer>
          ) : null}
        </Col>
      </Row>
      {isModal ? (
        <Row className='full-width-row'>
          <Col className='full-width-col'>
            <div
              className={
                isModal ? 'confirmation-summarylist' : 'selection-summarylist'
              }
            >
              <p>
                {isRace ? `Race Traits:` : 'Something Else'}
                <span>
                  {isRace && traitNames.length > 0
                    ? `${traitNames.join(', ')}`
                    : null}
                </span>
              </p>
            </div>
          </Col>
        </Row>
      ) : null}

      <Row className='full-width-row'>
        <Col className='full-width-col'>
          {isModal ? (
            <h3 className='secondary-title'>
              {isRace ? `${selection.name} Traits` : 'Class Traits'}
            </h3>
          ) : null}

          <div className='secondary-detailslist'>
            {isRace && traits.length > 0 ? (
              <CollapsibleList items={traits} isModal={isModal} />
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageContainer;
