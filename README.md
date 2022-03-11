# Vercel-Express

Vercel Express and UI fullstack webapp example.

Live Demo - https://vercel-express-ngduc.vercel.app

### Set up & Deploy with Vercel

Star and clone this repo, update package.json with your information (project name, your name, etc.), verify vercel.json.

```
$ npm install
$ cd ./backend && npm install
$ cd ..
$ npm install vercel -g
$ vercel
```

- Vercel will generate a ".vercel" directory, don't share or commit this one!
- After deploying, open your URL like this: YOUR-VERCEL-APP-ID.vercel.app
- Build your backend and ui, the outputs are located at "backend/build" and "ui/buid".
  - Some boilerplate generators output the built files to "dist" instead of "build", so update your vercel.json accordingly.

### Code

Backend
- See [backend/README.md](./backend/README.md)

Frontend
- See [ui/README.md](./ui/README.md)

### [vercel.json](./vercel.json)

- Map API routes (/api/...) and static (UI) routes (/...).
- Environment variables - examples:
  - ```$ vercel secrets add my-mongodb-uri mongodb+srv://<user>:<password>@clusteridxxx.mongodb.net/<database-name>?retryWrites=true```
  - add "env" to vercel.json ```{ "env": { "MONGODB_URI": "@my-mongodb-uri" }, ... }```

### Links

- Article https://vercel.com/guides/using-express-with-vercel
- Article https://medium.com/javascript-in-plain-english/create-and-deploy-a-node-js-express-app-for-free-f75d8796ba70
- Node Express Mongoose boilerplate https://github.com/ngduc/node-rem