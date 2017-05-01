import React from 'react';

const Standing = ({ standing, rank }) => (
  <div className="list-group-item">
    <p>{rank}</p>
    <img src={standing.picture} alt="avatar" className="avatar" />
    {standing.first_name}
    {standing.last_name}
    <p className="credits">{standing.credibility}</p>
  </div>

  );

Standing.propTypes = {
  rank: React.PropTypes.number.isRequired,
  standing: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    first_name: React.PropTypes.string.isRequired,
    last_name: React.PropTypes.string.isRequired,
    credibility: React.PropTypes.number.isRequired,
  }),
};

Standing.defaultProps = {
  standing: {},
};
export default Standing;
