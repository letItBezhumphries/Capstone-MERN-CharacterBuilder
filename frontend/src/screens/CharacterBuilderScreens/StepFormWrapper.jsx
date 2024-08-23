import ClassNames from 'classnames';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './StepFormWrapper.css';

function StepFormControlWrapper({ children, className, ...rest }) {
  // add the className prop to the classNames
  const finalClassNames = classNames('step-form-controls-wrapper', className);

  return (
    <div {...rest} className={finalClassNames}>
      <div className='step-iconbox prev-box'>
        <button className='prev-btn'>
          Prev
          <i
            className='fa-solid fa-chevron-left fa-2xl'
            style={{ color: '#74C0FC' }}
          ></i>
        </button>
      </div>
      {children}
      <div className='step-next next-box'>
        <button className='next-btn'>
          Next
          <i
            className='fa-solid fa-chevron-right fa-2xl'
            style={{ color: '#74C0FC' }}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default StepFormControlWrapper;
