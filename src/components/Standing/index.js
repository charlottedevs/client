import React from 'react';

const Standing = ({ standing }) => (
  <div className="list-group-item">
    <img src={standing.picture} alt="avatar" className="avatar" />
    {standing.first_name}
    {standing.last_name}
    <p className="credits">{standing.credibility}</p>
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
