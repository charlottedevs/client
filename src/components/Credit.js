import React, { PropTypes } from 'react';

const Credit = ({ credit, selectCredit }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <p className="points">{credit.points}<span>pts</span></p>
        <h3>{credit.title}</h3>
      </div>
      <div className="card-block">
        <p>{credit.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-secondary" onClick={() => selectCredit(credit)}>
          More Info
        </button>
      </div>
    </div>
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
