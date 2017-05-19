import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

const Challenge = ({ challenge }) => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-header">
        <h3>{challenge.title}</h3>
        <p>
          <span>{challenge.comments}</span>&nbsp;
          {challenge.comments === 1 ? 'comment' : 'comments'}
        </p>
      </div>
      <div className="card-block">
        <ReactMarkdown source={challenge.body} />
      </div>
      <div className="card-footer">
        <Button
          bsStyle="primary"
          className="btn btn-secondary"
          href={challenge.html_url}
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
