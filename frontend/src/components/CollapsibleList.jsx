import React from 'react';
import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import ContextAwareToggle from './ContextAwareToggle';
import CardTable from './CardTable';

const CollapsibleList = ({ items }) => {
  const [tableCells, setTableCells] = useState();
  const [tableHead, setTableHead] = useState();
  const itemTable = items.find((item) => item.table.length > 0);
  const tableStr = itemTable.table;

  useEffect(() => {
    if (tableStr.length > 0) {
      parseTableString();
    }
  }, [tableStr]);

  const parseTableString = () => {
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
        <Accordion.Item eventKey={idx} key={idx}>
          <Accordion.Header>
            {item.name}
            <i className='fa-solid fa-chevron-up'></i>
            <i className='fa-solid fa-chevron-down'></i>
          </Accordion.Header>
          <Accordion.Body>
            <p>{item.desc}</p>
            {item.table ? (
              <>
                <p></p>
                <h5>{item.name}</h5>
                <CardTable tableHead={tableHead} tableCells={tableCells} />
              </>
            ) : null}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CollapsibleList;
