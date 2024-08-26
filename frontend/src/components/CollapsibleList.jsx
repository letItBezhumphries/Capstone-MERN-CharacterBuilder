import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import ContextAwareToggle from './ContextAwareToggle';
import CardTable from './CardTable';

const CollapsibleList = ({ items, selection, isModal, isRace }) => {
  if (!isRace) {
    console.log('in Collaps List -> selection:', selection);
  } else {
  }

  const renderOptions = (item) => {
    return item.choices.map((choice, idx) => {
      console.log('in CollapsibleList choice:', choice);
      return <option key={idx}>{choice}</option>;
    });
  };

  return (
    <Accordion
      flush={true}
      className='collapsiblelist-container'
      alwaysOpen={true}
    >
      {items.map((item, idx) => (
        <Card key={idx}>
          <Card.Header>
            <ContextAwareToggle eventKey={idx} item={item}>
              {item.name}
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={idx}>
            <Card.Body>
              <p>{item.desc}</p>
              {item.table ? (
                <>
                  <p></p>
                  <h5>{item.name}</h5>
                  <CardTable
                    tableHead={item.headCells}
                    tableCells={item.tableCells}
                  />
                </>
              ) : null}
              <div>
                {!isModal && item.choices ? (
                  <Form.Select className='select-trait-option'>
                    <option>- Choose an Option -</option>
                    {renderOptions(item)}
                  </Form.Select>
                ) : null}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default CollapsibleList;
