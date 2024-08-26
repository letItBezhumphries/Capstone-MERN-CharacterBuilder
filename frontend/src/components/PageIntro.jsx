import React from 'react';
import { Row, Col } from 'react-bootstrap';

const PageIntro = ({ isRace, isModal, selection, isLoading }) => {
  console.log('in PageIntro -> selection:', selection);
  return (
    <>
      <Row className={isModal ? 'confirmation-primary' : 'overview-primary'}>
        <Col
          xs={'auto'}
          md={8}
          className={isModal ? 'confirmation-info' : 'selection-info'}
        >
          <div className='form-page-header'>{selection.name}</div>
          <p className='description'>
            {isRace ? selection.desc : selection.primary_desc}
          </p>
          {!isModal ? (
            <p className='traitlist'>
              <strong>{isRace ? `Race Traits:` : null}</strong>
              <span>
                {isRace && selection.traitNames.length > 0
                  ? `${selection.traitNames.join(', ')}`
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
          {/* MIGHT NEED TO ADD redux action here */}
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
              {!isRace && isModal ? (
                <>
                  <p>
                    Hit Die:
                    <span>{selection.hit_points.hit_die}</span>
                  </p>
                  <p>
                    Primary Ability:
                    <span>{selection.primary_ability}</span>
                  </p>
                  <p>
                    Saves:
                    <span>{selection.proficiencies.saving_throws}</span>
                  </p>
                </>
              ) : isModal ? (
                <p>
                  Race Traits:
                  <span>
                    {isRace && selection.traitNames.length > 0
                      ? `${selection.traitNames.join(', ')}`
                      : null}
                  </span>
                </p>
              ) : null}
            </div>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default PageIntro;
