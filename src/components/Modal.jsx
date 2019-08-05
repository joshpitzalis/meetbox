import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// const root = window.document.getElementById("modal");

const propTypes = {
  children: PropTypes.element.isRequired
};

const defaultProps = {};

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <section
      className="absolute absolute--fill z-1 bg-black-70 flex rf-x"
      data-testid="modal"
    >
      <div className="dtc v-mid tc white ph3 ph4-l">{children}</div>
    </section>,

    document.getElementById("modal")
  );
};

export default Modal;

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
