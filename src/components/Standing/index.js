import React from 'react';
import { Link } from 'react-router-dom';

const Standing = ({ standing, rank }) => (
  <div className="list-group-item">
    <p className="rank">{rank}</p>
    <Link to={`/users/${standing.id}`}>
      <img src={standing.picture} alt="avatar" className="avatar" />
    </Link>
    <p>{standing.first_name} &nbsp</p>
    <p>{standing.last_name}</p>
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
