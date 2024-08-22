import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function ContextAwareToggle({ children, eventKey, callback, item }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type='button'
      className=''
      style={{
        backgroundColor: isCurrentEventKey ? 'yellow' : 'green',
        color: isCurrentEventKey ? 'white' : 'black',
      }}
      onClick={decoratedOnClick}
    >
      {children}
      {isCurrentEventKey ? (
        <i className='fa-solid fa-chevron-up' style={{ fill: 'yellow' }}></i>
      ) : (
        <i className='fa-solid fa-chevron-down' style={{ fill: 'purple' }}></i>
      )}
    </button>
  );
}

export default ContextAwareToggle;
