import React, { PropTypes } from 'react';
import MasonryLayout from 'react-masonry-layout';
import Challenge from './Challenge';


const ChallengesList = ({ challenges }) => (
  <MasonryLayout id="challenges" >
    {challenges.map(challenge =>
      <Challenge
        key={challenge.id}
        challenge={challenge}
      />,
  )}

  </MasonryLayout>
  );

ChallengesList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ChallengesList;
