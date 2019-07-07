import { Grommet } from "grommet";
import PropTypes from "prop-types";
import React from "react";
// import "../static/keen.css";
import "../static/tachyons.css";
import "../static/typeface.css";
const propTypes = { children: PropTypes.array.isRequired };

export default function Layout({ children }) {
  return (
    <main className="pa0 ma0">
      <Grommet plain>{children}</Grommet>
    </main>
  );
}

Layout.propTypes = propTypes;
