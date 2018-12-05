import React from 'react';
import './footer.scss';

const Footer = ({ buttonIcon, buttonText, buttonAction, buttonClass = "", isDisabled, timer }) => {
  return (
    <div className="footer">
        <button className={`footer__button ${isDisabled ? 'is-disabled' : ''} ${buttonClass}`}
          onClick={() => !isDisabled && buttonAction()}>
          <i className={buttonIcon}></i>
          <span className="footer__button-text">
            {buttonText}
          </span>
          {!!timer &&
            <span className="footer__button-timer">
              {timer}
            </span>
          }
        </button>
    </div>
  );
};

export default Footer;