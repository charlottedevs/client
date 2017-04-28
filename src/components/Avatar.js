import React, { PropTypes } from 'react';

const Avatar = ({ picture, credibility }) => (
  <div>
    <img className="profilePic" src={picture} alt="" />
    <p className="credibility">{credibility}</p>
  </div>
);

Avatar.propTypes = {
  picture: PropTypes.string.isRequired,
  credibility: PropTypes.string.isRequired,
};

export default Avatar;
