# Vercel-Express

Vercel Express and UI Webapp Example.

Live Demo - https://vercel-express-ngduc.vercel.app

### Set up & Deploy with Vercel

Star and clone this repo, update package.json with your information (project name, your name, etc.).

```
$ npm install vercel -g
$ npm install
$ vercel
```

- Vercel will generate a ".vercel" directory, don't share or commit this one!
- After deploying, open your URL like this:
  - http://YOUR-VERCEL-APP-ID.vercel.app
  - Example: https://vercel-express-ngduc.vercel.app
- Build your source directory, then output to "app/build" (Backend) and "ui/buid" (Frontend).
  - Some boilerplate generator output the built files to "dist" instead of "build", so update your vercel.json accordingly.

### [app/index.js](./app/index.js)

- Update package.json: "main": "app/index.js"
- See [app/README.md](./app/README.md)

### [vercel.json](./vercel.json)

- Map API routes (/api/...) and static (UI) routes (/...).
- Environment variables - examples:
  - ```$ vercel secrets add my-mongodb-uri mongodb+srv://<user>:<password>@clusteridxxx.mongodb.net/<database-name>?retryWrites=true```
  - add "env" to vercel.json ```{ "env": { "MONGODB_URI": "@my-mongodb-uri" }, ... }```
- See [ui/README.md](./ui/README.md)

### Links
- Article https://vercel.com/guides/using-express-with-vercel
- Article https://medium.com/javascript-in-plain-english/create-and-deploy-a-node-js-express-app-for-free-f75d8796ba70
- Node Express Mongoose boilerplate 