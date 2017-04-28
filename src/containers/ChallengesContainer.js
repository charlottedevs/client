import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as challengeActions from '../actions/challenge-actions';
import ChallengesList from '../components/ChallengesList';
import CategoriesList from '../components/CategoriesList';

class ChallengesContainer extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchChallenges();
    }
  }

  render() {
    const currentCategory = this.props.currentCategory;
    const challenges = this.props.challenges.filter(el => el.repo.split('/')[1] === currentCategory);
    const categories = this.props.categories;
    const changeCategory = this.props.changeCategory;

    return (
      <div className="jumbotron">
        <h2>Challenges</h2>
        <CategoriesList categories={categories} changeCategory={changeCategory} />
        <ChallengesList challenges={challenges} />
      </div>
    );
  }
}

ChallengesContainer.propTypes = {
  challenges: PropTypes.arrayOf(PropTypes.shape).isRequired,
  fetchChallenges: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  categories: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  changeCategory: React.PropTypes.func.isRequired,
  currentCategory: React.PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    categories: state.challenges.categories,
    challenges: state.challenges.challenges,
    isAuthenticated: state.account.isAuthenticated,
    currentCategory: state.challenges.currentCategory,
  };
}


export default connect(mapStateToProps, challengeActions)(ChallengesContainer);
