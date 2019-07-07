const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/meeting/:slug", (req, res) => {
      const actualPage = "/";
      const queryParams = { slug: req.params.slug };
      return app.render(req, res, actualPage, queryParams);
    });

    // server.get("/meet/:slug", (req, res) => {
    //   return app.render(req, res, "/meet", { slug: req.params.slug });
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
