import { Grommet } from "grommet";
import React from "react";
import "../static/tachyons.css";

export default function Layout({ children }) {
  return (
    <main className="pa0 ma0 sans-serif">
      <Grommet plain>{children}</Grommet>
    </main>
  );
}
