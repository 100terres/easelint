/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from "prop-types";
import React from "react";

export const Image = ({ alt, ...rest }) => <img alt={alt} {...rest} />;

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
