import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const Challenge = ({ challenge }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <p className="points">{challenge.labels}<span>pts</span></p>
        <h3>{challenge.title}</h3>
      </div>
      <div className="card-block">
        <p>{challenge.body}</p>
      </div>
      <div className="card-footer">
        <Button
          bsStyle="secondary"
          href={challenge.url}
          target="_blank"
        >
          More Info
        </Button>
      </div>
    </div>
  </div>
  );

Challenge.propTypes = {
  challenge: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

Challenge.defaultProps = {
  challenge: {},
};
export default Challenge;
