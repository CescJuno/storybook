import React from 'react';
import PropTypes from 'prop-types';

import DefaultButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

const Button = ({
  href,
  label,
  size,
  color,
  variant,
  backgroundColor,
  options,
  isDisabled,
  startIcon,
  endIcon,
  onClick,
}) => {
  return (
    <>
      <DefaultButton
        href={href || null}
        color={color}
        variant={variant}
        style={options ? options : { backgroundColor: backgroundColor }}
        size={size}
        startIcon={startIcon ? <DeleteIcon /> : null}
        endIcon={endIcon ? <SaveIcon /> : null}
        disabled={isDisabled}
        onClick={onClick}
      >
        {label}
      </DefaultButton>
    </>
  );
};
Button.defaultProps = {
  href: '',
  label: 'button',
  size: 'medium',
  color: 'inherit',
  variant: 'text',
  backgroundColor: '',
  options: {},
  isDisabled: false,
  startIcon: false,
  endIcon: false,
  onClick: null,
};
Button.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  backgroundColor: PropTypes.string,
  options: PropTypes.object,
  isDisabled: PropTypes.bool,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  onClick: PropTypes.func,
};
export default Button;
