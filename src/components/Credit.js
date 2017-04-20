import React, { PropTypes } from 'react';

const Credit = ({ credit, selectCredit }) => (
  <div>
    <h3>{credit.title}</h3>
    <code>{credit.points}</code>
    <p>{credit.description}</p>
    <button onClick={() => selectCredit(credit)}>Submit</button>
  </div>
  );

Credit.propTypes = {
  credit: PropTypes.shape({
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
  selectCredit: PropTypes.func.isRequired,
};

Credit.defaultProps = {
  credit: {},
};
export default Credit;
