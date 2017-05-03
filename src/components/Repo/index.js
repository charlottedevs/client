import React from 'react';

const Repo = ({ repo, changeRepo, repoPath }) => (
  <div className="repoSwitches">
    <button className="btn btn-subnav" onClick={() => changeRepo(repoPath)}>
      {repo}
    </button>
  </div>
  );

Repo.propTypes = {
  repo: React.PropTypes.string.isRequired,
  repoPath: React.PropTypes.string,
  changeRepo: React.PropTypes.func.isRequired,
};

Repo.defaultProps = {
  repo: {},
  repoPath: '',
};
export default Repo;
