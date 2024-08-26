import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CollapsibleList from './CollapsibleList';

const PageList = ({ isRace, isModal, selection }) => {
  const [classItems, setClassItems] = useState([]);

  if (isRace) {
    // setClassItems([
    //   ...selection.features,
    // ])
    console.log(
      'in PageList - features:',
      selection.features,
      '\n equipment:',
      selection.equipment,
      '\nproficiencies:',
      selection.proficiencies,
      '\nhit_points:',
      selection.hit_points
    );
  }

  // console.log('in PageList:', selection);
  return (
    <Row className='full-width-row'>
      <Col className='full-width-col'>
        {isModal ? (
          <h3 className='secondary-title'>
            {isRace ? `${selection.name} Traits` : null}
          </h3>
        ) : null}

        <div className='secondary-detailslist'>
          {isRace && selection.traits.length > 0 ? (
            <CollapsibleList
              items={selection.traits}
              isModal={isModal}
              isRace={isRace}
            />
          ) : (
            <CollapsibleList
              items={selection}
              isModal={isModal}
              isRace={isRace}
            />
          )}
        </div>
      </Col>
    </Row>
  );
};

export default PageList;
