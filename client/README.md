What to install:

npm install nodemon
npm install express axios

copy/paste follow to the "script"
(
    "start": "node app.js",
    "devStart": "nodemon app.js"
)
NOTE: this must be copy/paste to package.json file.

npm run devStart    (On the Server)
npm start           (on the client)


npm install cors
(Allows to communicate with API's that we create)