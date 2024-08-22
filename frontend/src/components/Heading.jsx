import React from 'react';

const Heading = ({ text, classType, elem }) => {
  return (
    <>
      {!elem ? (
        <h3 className={classType}>{text}</h3>
      ) : (
        <elem className={classType}>{text}</elem>
      )}
    </>
  );
};

export default Heading;
