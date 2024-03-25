import React from 'react';
import PropTypes from 'prop-types';
import './footer.scss';

function Footer(props) {
  return (
    <>
      <div className="footer">
        <button className="footer-button-cancel" onClick={props.onCancelClick}>
          {props.cancelButtonText}
        </button>
        <button className="footer-button-submit" onClick={props.onSubmitClick} disabled={props.isDisabled}>
          {props.submitButtonText}
        </button>
      </div>
    </>
  );
}

Footer.propTypes = {
  cancelButtonText: PropTypes.string.isRequired,
  submitButtonText: PropTypes.string.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
};

export default Footer;
