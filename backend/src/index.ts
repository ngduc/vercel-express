import express from 'express';
import { Request, Response } from 'express';
import helmet from 'helmet';
// import cors from "cors"; // for CORS setup, usage: app.use(cors());

import dotenv from 'dotenv';
dotenv.config(); // load variables from .env file

const app = express();
app.use(helmet());
const port = process.env.PORT || 3030; // default port to listen

app.get('/api', (req: Request, res: Response) => {
  const randomId = `${Math.random()}`.slice(2);
  const path = `/api/item/${randomId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:itemId', (req: Request, res: Response) => {
  const { itemId } = req.params;
  res.json({ itemId });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
