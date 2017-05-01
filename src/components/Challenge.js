import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Challenge = ({ challenge }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <p className="points">{challenge.labels}<span>pts</span></p>
        <h3>{challenge.title}</h3>
      </div>
      <div className="card-block">
        <ReactMarkdown source={challenge.body} />
      </div>
      <div className="card-footer">
        <Button
          bsStyle="primary"
          className="btn btn-secondary"
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
    body: PropTypes.string.isRequired,
  }),
};

Challenge.defaultProps = {
  challenge: {},
};
export default Challenge;
