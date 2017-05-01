import React from 'react';

const Standing = ({ standing }) => (
  <div className="col-md-4">
    <p>this is a standing</p>
    {standing.first_name}
    {standing.last_name}
    {standing.credibility}
  </div>
  );

Standing.propTypes = {
  standing: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    first_name: React.PropTypes.string.isRequired,
    last_name: React.PropTypes.string.isRequired,
    credibility: React.PropTypes.string.isRequired,
  }),
};

Standing.defaultProps = {
  standing: {},
};
export default Standing;
