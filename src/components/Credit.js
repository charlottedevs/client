import React, {PropTypes} from 'react';

const Credit = ({credit, selectCredit}) => {
  return (
    <div onClick={() => selectCredit(credit)}>
      <h3>{credit.title}</h3>
      <code>{credit.points}</code>
      <p>{credit.description}</p>
    </div>
  );
};

Credit.propTypes = {
  credit: PropTypes.object.isRequired
};

export default Credit;
