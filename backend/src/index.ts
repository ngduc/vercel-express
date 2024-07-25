import express from 'express';
import { Request, Response } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import helmet from 'helmet';
import compression from 'compression';
// import cors from "cors"; // for CORS setup, usage: app.use(cors());
import { ItemValidation } from './itemValidation';

import dotenv from 'dotenv';
dotenv.config(); // load variables from .env file

const port = process.env.PORT || 3030; // default port to listen

export const app = express();
app.use(express.json()); // parse json payload
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(helmet());
app.use(compression());

app.get('/api', (req: Request, res: Response) => {
  const randomId = `${Math.random()}`.slice(2);
  const path = `/api/items/${randomId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Fetch one item: <a href="${path}">${path}</a>`);
});

app.get('/api/items/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const parsedResult = ItemValidation.safeParse({ id }); // validate inputs

  if (id.length <= 1 || parsedResult.success === false) {
    res.status(StatusCodes.BAD_REQUEST).send(getReasonPhrase(StatusCodes.BAD_REQUEST));
  }
  res.json({ id });
});

export const server = app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port} - try: http://localhost:3030/api`);
});
