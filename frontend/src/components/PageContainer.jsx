import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PageIntro from './PageIntro';
import PageList from './PageList';

const PageContainer = ({ isRace, isModal, selection, isLoading }) => {
  //  traits is the prop we want to pass to collapsibleItems

  console.log('in PageContainer -> selection:', selection);

  return (
    <Container className={isModal ? 'modal-content' : 'overview-container'}>
      <PageIntro
        isRace={isRace}
        isModal={isModal}
        selection={selection}
        isLoading={isLoading}
      />
      {/* SummaryList */}
      {isModal && isRace ? (
        <Row className='full-width-row'>
          <Col className='full-width-col'>
            <div
              className={
                isModal ? 'confirmation-summarylist' : 'selection-summarylist'
              }
            >
              <p>
                {isRace ? `Race Traits:` : null}
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
      <PageList
        isRace={isRace}
        isModal={isModal}
        selection={selection}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default PageContainer;
