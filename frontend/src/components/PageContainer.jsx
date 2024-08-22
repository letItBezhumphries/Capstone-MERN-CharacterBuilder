import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CollapsibleList from './CollapsibleList';

const PageContainer = ({
  isRace,
  isClass,
  isModal,
  isOverview,
  selection,
  traits,
  traitNames,
  description,
}) => {
  return (
    <Container
      className={isModal ? 'modal-content' : 'overview-container'}
      fluid
    >
      <Row className={isModal ? 'confirmation-primary' : 'overview-primary'}>
        <Col
          xs={12}
          md={8}
          className={isModal ? 'confirmation-info' : 'selection-info'}
        >
          <div className='form-page-header'>{selection.name}</div>
          <p className='description'>{isRace ? description : null}</p>
        </Col>
        <Col
          xs={6}
          md={4}
          className={isModal ? 'confirmation-aside' : 'selection-aside'}
        >
          <img
            src={selection.imgSrc}
            className={isModal ? 'confirmation-img' : 'selection-img'}
          />
        </Col>
      </Row>
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
      <Row className='full-width-row'>
        <Col className='full-width-col'>
          <h3 className='secondary-title'>
            {isRace ? `${selection.name} Traits` : 'Class Traits'}
          </h3>
          <div className='secondary-detailslist'>
            {isRace && traits.length > 0 ? (
              <CollapsibleList items={traits} />
            ) : null}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageContainer;
