import React from 'react';
import { Link } from 'react-router-dom';

const Standing = ({ standing, rank }) => (
  <div className="list-group-item">
    <div className="container">
      <div className="row">
        <p className="rank col-sm-1">{rank}</p>
        <div className="col-sm-2">
          <Link to={`/users/${standing.id}`}>
            <img src={standing.picture} alt="avatar" className="avatar" />
          </Link>
        </div>
        <div className="col-sm-6">
          <p>{standing.first_name} {'\u00A0'} {standing.last_name}</p>
        </div>
        <p className="credits col-sm-1">{standing.credibility}</p>
      </div>
    </div>
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
