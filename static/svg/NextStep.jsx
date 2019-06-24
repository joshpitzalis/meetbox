import React from "react";

const propTypes = {};

const defaultProps = {};

export default function NextStep({ className, action }) {
  return (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        onClick={action}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 16 16 12 12 8" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    </React.Fragment>
  );
}

NextStep.propTypes = propTypes;
NextStep.defaultProps = defaultProps;
