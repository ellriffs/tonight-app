import React from 'react';
import PropTypes from 'prop-types';

const AccountPage = ({ name, picture, info }) => {
  return <div />;
};

export default AccountPage;

AccountPage.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.element.isRequired,
  info: PropTypes.element.isRequired
};
