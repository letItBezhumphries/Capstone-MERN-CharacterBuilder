import React from 'react';
import { useState, useEffect } from 'react';
import { Accordion, Card } from 'react-bootstrap';

import ContextAwareToggle from './ContextAwareToggle';
import CardTable from './CardTable';

const CollapsibleList = ({ items, isLoading, selection }) => {
  const [tableCells, setTableCells] = useState();
  const [tableHead, setTableHead] = useState();
  // console.log('selection:', selection);
  // // const itemTable = items.find((item) => item.index === 'dragonborn');
  // const itemTable = items.filter((item) => item.index === 'dragonborn')[0];
  // console.log('itemTable:', itemTable);
  // const tableStr = itemTable.table;

  useEffect(() => {
    if (isLoading && selection.table) {
      // console.log('true dragonboarn', selection.table, 'isloading:', isLoading);
      parseTableString(selection.table);
    }
  }, [selection, isLoading]);

  const parseTableString = (tableStr) => {
    const output = [];
    let splitTable = tableStr
      .split('|')
      .filter((str) => str.indexOf('-') === -1)
      .filter((str) => str.indexOf('\n') === -1);

    let tableHeadCells = splitTable.slice(0, 3).map((str) => str.trim());
    setTableHead(tableHeadCells);

    let tableCells = splitTable.slice(3).map((str) => str.trim());
    let lastCellIndex = tableCells.length - 1;

    let first = 0;
    let last = 3;
    while (last <= lastCellIndex) {
      let currentRow = tableCells.slice(first, last);
      output.push(currentRow);
      first += 3;
      last += 3;
    }
    setTableCells(output);
    return output;
  };

  return (
    <Accordion flush={true} className='list-container'>
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
                  <CardTable tableHead={tableHead} tableCells={tableCells} />
                </>
              ) : null}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default CollapsibleList;
