import React, { PropTypes } from 'react';

const Credit = ({ credit, selectCredit }) => (
  <div>
    <h3>{credit.title}</h3>
    <code>{credit.points}</code>
    <p>{credit.description}</p>
    <button onClick={selectCredit(credit)}>Submit</button>
  </div>
  );

Credit.propTypes = {
  credit: PropTypes.shape.isRequired,
  selectCredit: PropTypes.func.isRequired,
};

export default Credit;
