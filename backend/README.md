# Backend

Backend code.
- Make sure after building the Backend (npm run build), output files are built to the "build" directory.
- After building the project, you may want to add the "build" directory to .gitignore file.

### Using express with typescript

Build the "backend" project and output files to "backend/build":
```
cd <project-dir>
cd backend
npm install
npm run build
```

### Using Javascript only:

Create this file "backend/build/index.js"
```
const app = require('express')();
const helmet = require('helmet');
const compression = require('compression');

app.use(helmet());
app.use(compression());

app.get('/api', (req, res) => {
  const randomId = `${Math.random()}`.slice(2);
  const path = `/api/item/${randomId}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:itemId', (req, res) => {
  const { itemId } = req.params;
  res.json({ itemId });
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app;
```