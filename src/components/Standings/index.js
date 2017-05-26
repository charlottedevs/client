import React from 'react';
import PropTypes from 'prop-types';
import Standing from '../Standing';

const StandingsList = ({ standings }) => (
  <div className="card leaderboardCard">
    <div className="list-group">
      {standings.map((standing, index) =>
        <Standing
          key={standing.id}
          standing={standing}
          rank={index + 1}
        />,
      )}
    </div>
  </div>
);

StandingsList.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default StandingsList;
