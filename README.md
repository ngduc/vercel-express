# vercel-express

Vercel Express and UI Webapp Example.

Live Demo - https://vercel-express-3.ngduc.vercel.app

### Set up & Deploy with Vercel

```
$ npm install vercel -g
$ npm install
$ vercel
```

- Vercel will generate a ".vercel" directory, don't share or commit this one.
- After deploying, open your URL like this:
  - http://YOUR-VERCEL-APP-ID.vercel.app
  - Example: https://vercel-express-3.ngduc.vercel.app

### [app/index.js](./app/index.js)

- If you're using Typescript, build your source directory, output to "app"
- Update package.json: "main": "app/index.js"

### [vercel.json](./vercel.json)

- Map API routes (/api/...) and static (UI) routes (/...).
- Environment variables - examples:
  - ```$ vercel secrets add my-mongodb-uri mongodb+srv://<user>:<password>@clusteridxxx.mongodb.net/<database-name>?retryWrites=true```
  - add "env" to vercel.json ```{ "env": { "MONGODB_URI": "@my-mongodb-uri" }, ... }```


### Links
- https://vercel.com/guides/using-express-with-vercel
- https://medium.com/javascript-in-plain-english/create-and-deploy-a-node-js-express-app-for-free-f75d8796ba70
