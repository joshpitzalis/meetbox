export const PrimaryButton = ({ action, text, className }) => {
  return;
  <button
    className={`pointer f6 grow no-underline br-pill b--navy ph3 pv2 mb2 dib white bg-navy ttu ${className}`}
    onClick={action}
  >
    {text}
  </button>;
};

export const SecondaryButton = ({ action, text, className }) => {
  return (
    <button
      className={`pointer f6 grow  bn  ph3 pv2 mb2 dib gray ttu ${className}`}
      onClick={action}
    >
      {text}
    </button>
  );
};
