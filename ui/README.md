# UI

Web UI.
- Make sure after building the UI (npm run build), output files are built to the "build" directory.
- After building the project, you may want to add the "build" directory to .gitignore file.

### Using CRA (create-react-app)

```
cd <project-dir>
rm -rf ui
npx create-react-app my-app --template ui
cd ui
npm install
```

### Using CSA (create-snowpack-app)

```
cd <project-dir>
rm -rf ui
npx create-snowpack-app --template @snowpack/app-template-react-typescript ui
cd ui
npm install
```