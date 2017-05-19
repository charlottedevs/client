import React from 'react';

const Repo = ({ repo, changeRepo, repoPath, repoIssues }) => (
  <div className="repoSwitches">
    <button className="btn btn-subnav" onClick={() => changeRepo(repoPath)}>
      {repo}
      <span className="badge">{repoIssues}</span>
    </button>
  </div>
  );

Repo.propTypes = {
  repo: React.PropTypes.string.isRequired,
  repoPath: React.PropTypes.string,
  repoIssues: React.PropTypes.number,
  changeRepo: React.PropTypes.func.isRequired,
};

Repo.defaultProps = {
  repo: {},
  repoPath: '',
  repoIssues: 0,
};
export default Repo;
