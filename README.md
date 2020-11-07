# vercel-express

Vercel Express Example

### Set up & Deploy with Vercel

```
$ npm install vercel -g
$ npm install
$ vercel
```

- Vercel will generate ".vercel" directory, don't share or commit this one.
- After deploying, open your URL like this: (notice `/api` at the end)
  - http://YOUR-VERCEL-APP-ID.vercel.app/api
  - Example: https://vercel-express-3.vercel.app/api

### app/index.js

- If you're using Typescript, build your source directory, output to "app"
- Update package.json: "main": "app/index.js"

### Links
- https://vercel.com/guides/using-express-with-vercel
- https://dev.to/ngduc/create-and-deploy-an-express-nodejs-app-using-vercel-free-1gnn
