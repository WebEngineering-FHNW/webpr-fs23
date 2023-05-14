
Security Warning:
=================
No usages or installs that depend on Node.js, NPM, or equivalent should ever
be done with your personal user account on your personal machine!
This could read/write/delete/execute all your personal data.

For running the code that is built on the ES6 module feature you either
- have to run it from an IDE-integrated server,
- have to run it from local server like with `npx http-server -c-1`, or
- use a bundler like webpack, parcel, or [rollup](https://rollupjs.org), e.g.
  - install with  `npm install rollup`
  - run via `rollup allModuleTests.js --file allModuleTestsBundle.js --format es --watch` 
  
