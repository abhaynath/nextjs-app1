// const express = require('express')
// const next = require('next')
import express from "express";
import next from "next";

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/a", (req: any, res: any) => {
    return app.render(req, res, "/a", req.query);
  });

  server.get("/b", (req: any, res: any) => {
    return app.render(req, res, "/b", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    // if (err) throw err
    // console.log(`> Ready on http://localhost:${port}`)
  });
});
