import { Grommet } from "grommet";
import PropTypes from "prop-types";
import React from "react";
import "../static/tachyons.css";

const propTypes = { children: PropTypes.array.isRequired };

export default function Layout({ children }) {
  return (
    <main className="pa0 ma0 sans-serif">
      <Grommet plain>{children}</Grommet>
    </main>
  );
}

Layout.propTypes = propTypes;
