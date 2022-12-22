const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");
const express = require("express");
const admin = require("firebase-admin");
const firebase = require('firebase-admin');


const serviceAccount = require("./serviceAccountKey.json");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://projectcrm-f4e5f-default-rtdb..firebaseio.com",
});


const db = firebase.firestore()


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




//admin pages
app.get("/admin/parts", function (req, res) {
   const sessionCookie = req.cookies.session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
        
         if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
      res.render("admin/parts.html.html");
      }
      else {
           res.redirect("/404");
      }
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/admin/listofproducts", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
        
         if(userData.partSupplier == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
      res.render("admin/productslist.html");
      }
      else {
           res.redirect("/404");
      }
         

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/admin/dashboard", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("admin/dashboard.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/admin/listofusers", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("admin/listofusers.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});

app.get("/admin/materials", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("admin/materials.ejs");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/admin/substances", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("admin/substances.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/admin/selectivesmaterials", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.admin == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("admin/selectivematerials.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});


//main pages
app.get("/main", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.default == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("main.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/signup", function (req, res) {
    const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
      
      res.redirect("/");
    })
    .catch((error) => {
      res.render("signup.html");
    });
});
app.get("/404", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
      res.render("404.html");
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/registration", function (req, res) {
 res.render("registration.html");
});
app.get("/login", function (req, res) {
 
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.userEmail)
      
      res.render("login.html");
    })
    .catch((error) => {
      res.render("login.html");
    });
});
app.get("/profile", function (req, res) {
  const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
      res.render("profile.html");
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/", function (req, res) {
   res.render("index.html");

});
app.get("/userprofile", function (req, res) {
     const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {

      console.log("Logged in:", userData.email)
      res.render("userprofile.html");
    })
    .catch((error) => {
      res.redirect("/login");
    });
});



//part supplier pages
app.get("/partsupplier/parts", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
  
      
         if(userData.partSupplier == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
      res.render("partsupplier/parts.html");
      }
      else {
           res.redirect("/404");
      }
      
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/partsupplier/dashboard", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
          if(userData.partSupplier == false) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
        res.render("partsupplier/dashboard.html");
      }
      else {
           res.redirect("/partsupplier/parts");
      }
      
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/partsupplier/selectivematerials", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {

        if(userData.partSupplier == true) {
       
  
      console.log("Logged in:", userData.email)
      res.render("partsupplier/selectivematerials.html");
      }
      else {
           res.redirect("/404");
      }
      
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/partsupplier/materials", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
   
       if(userData.partSupplier == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
        res.render("partsupplier/materials.ejs");
      }
      else {
           res.redirect("/404");
      }
  
    })
    .catch((error) => {
      console.log(error)
      res.redirect("/login");
    });
});
app.get("/partsupplier/substances", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
 
         if(userData.partSupplier == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
           res.render("partsupplier/substances.html");
      }
      else {
           res.redirect("/404");
      }
    })
    .catch((error) => {
      res.redirect("/login");
    });
});



//product manufacturer pages
app.get("/productmanufacturer/dashboard", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      console.log("Logged in:", userData.email)
         if(userData.productManu == false) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
       res.render("productmanufacturer/dashboard.html");
      }
      else {
           res.redirect("/productmanufacturer/listofproducts");
      }
  
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/productmanufacturer/listofparts", function (req, res) {
   const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
          if(userData.productManu == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
            res.render("productmanufacturer/listofparts.html");
      }
      else {
           res.redirect("/404");
      }

    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/productmanufacturer/listofproducts", function (req, res) {
     const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      if(userData.productManu == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
           res.render("productmanufacturer/productslist.html");
      }
      else {
           res.redirect("/404");
      }
  

   
    })
    .catch((error) => {
      res.redirect("/login");
    });
});
app.get("/productmanufacturer/addparts/main", function (req, res) {
     const sessionCookie = req.cookies.session || "";

  admin
    .auth()
    .verifySessionCookie(sessionCookie, true /** checkRevoked */)
    .then((userData) => {
      if(userData.productManu == true) {
            console.log(userData)
  
      console.log("Logged in:", userData.email)
           res.render("productmanufacturer/addparts/parts.html");
      }
      else {
           res.redirect("/404");
      }
  

   
    })
    .catch((error) => {
      res.redirect("/login");
    });
});





app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        const options = { maxAge: expiresIn, httpOnly: true };
        res.cookie("session", sessionCookie, options);
        res.end(JSON.stringify({ status: "success" }));
        
      },
    
      (error) => {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
    )
});

app.get("/sessionLogout", (req, res) => {
  
  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
  res.clearCookie("session");
//   firebase.auth().signOut()
//   .then(() => {
//   console.log("sign out success")
// }).catch((error) => {
// });
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
