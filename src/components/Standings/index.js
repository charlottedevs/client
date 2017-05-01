import React, { PropTypes } from 'react';
import Standing from '../Standing';

const StandingsList = ({ standings }) => (
  <div className="row">
    {standings.map(standing =>
      <Standing
        key={standing.id}
        standing={standing}
      />,
      )}
  </div>
  );

StandingsList.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default StandingsList;
