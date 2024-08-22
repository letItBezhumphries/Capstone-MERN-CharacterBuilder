import { useContext } from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type='button'
      style={{
        backgroundColor: isCurrentEventKey ? 'yellow' : 'green',
        color: isCurrentEventKey ? 'white' : 'black',
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default ContextAwareToggle;
