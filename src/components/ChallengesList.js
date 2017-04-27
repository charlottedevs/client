import React, { PropTypes } from 'react';
import Challenge from './Challenge';

const ChallengesList = ({ challenges, selectChallenge }) => (
  <div className="row">
    {challenges.map(challenge =>
      <Challenge
        key={challenge.id}
        challenge={challenge}
        selectChallenge={selectChallenge}
      />,
      )}
  </div>
  );

ChallengesList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectChallenge: PropTypes.func.isRequired,
};

export default ChallengesList;
