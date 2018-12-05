import React from 'react';
import './footer.scss';

const Footer = ({ buttonIcon, buttonText, buttonAction, isDisabled }) => {
  return (
    <div className="footer">
        <button className={`footer__button ${isDisabled ? 'is-disabled' : ''}`}
          onClick={() => !isDisabled && buttonAction()}>
          <i className={buttonIcon}></i>
          <span className="footer__button-text">
            {buttonText}
          </span>
        </button>
    </div>
  );
};

export default Footer;