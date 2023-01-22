const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");
// const firebase = require('firebase-admin');

//dev variables
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://projectcrm-f4e5f-default-rtdb..firebaseio.com",
});

//production variables
// var serviceAccount = require("./prodFbConfig.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });





const csrfMiddleware = csrf({ cookie: true });

const PORT = process.env.PORT || 3000;
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(csrfMiddleware);


app.all("*", (req, res, next) => {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  next();
});

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use("", require('./routes/routes.js'));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
