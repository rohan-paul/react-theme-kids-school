A Landing Page Theme (for a school website) built with React, including Login Functionality with json-web-token and Passport middleware authentication.

Few other libraries used - _𝐫𝐞𝐚𝐜𝐭-𝐬𝐜𝐫𝐨𝐥𝐥_ for scrolling within the same page on mouse-click, _𝐇𝐢𝐠𝐡𝐜𝐡𝐚𝐫𝐭𝐬_ 𝐚𝐧𝐝 _𝐃𝟑.𝐣𝐬_ for charting and little bit of _𝐩𝐚𝐫𝐭𝐢𝐜𝐥𝐞.𝐣𝐬_

<img src="site.gif">

### [Live running here (Without backend, Only the Client)](https://bloomingbud.netlify.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### To launch this project in the local machine.

First create a .env file in `./server` directory with the following details.

```js
MONGO_DB=mongodb://localhost:27017/kids-school

NODE_ENV=development

```

You can ofcourse name your database to whatever you like (instead of kids-school)

Then - run `npm install` in both the `./server` and `./client` directories separately, to install all the npm packages for server and client respectively.

Then, start mongodb service with `sudo service mongod start` and then finally run the following command from the `./server` directory

-   `npm run dev`

Which will start both the client (port 3000) and server (port 5000) and launch the site in port 3000. Then navigate to one of the below.

Then navigate to the public or the private (only for logged-in user) site

The site is running at - [http://localhost:3000/dashboard](http://localhost:3000/dashboard)
