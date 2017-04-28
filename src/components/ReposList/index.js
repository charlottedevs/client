import React, { PropTypes } from 'react';
import Repo from '../Repo';

const ReposList = ({ repos, changeRepo }) => (
  <div className="row subNav justify-content-center">
    {repos.map(repo =>
      <Repo
        key={repo.path}
        repo={repo.name}
        repoPath={repo.path}
        changeRepo={changeRepo}
      />,
      )}
  </div>
  );

ReposList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape).isRequired,
  changeRepo: PropTypes.func.isRequired,
};

export default ReposList;
