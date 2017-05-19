import PropTypes from 'prop-types';
import Challenge from './Challenge';

const ChallengesList = ({ challenges }) => (
  <div className="row">
    {challenges.map(challenge =>
      <Challenge
        key={challenge.id}
        challenge={challenge}
      />,
      )}
  </div>
  );

ChallengesList.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ChallengesList;
