```js

"heroku-postbuild": "cd client && npm install && npm run build"

// This did not work
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```