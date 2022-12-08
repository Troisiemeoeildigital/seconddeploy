const functions = require("firebase-functions");
const admin = require('firebase-admin');
const  firebase_tools = require('firebase-tools');

admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context)=> {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
    });
}).then(()=> {
    return {
        message: `Success! ${data.email} has been made an Admin`
    }
}).catch(err => {
    return err;
})
})
// add product Manu user 
exports.addproductManuRole = functions.https.onCall((data, context)=> {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid, {
        productManu: true
    });
}).then(()=> {
    return {
        message: `Success! ${data.email} has been made a product Manufacturer`
    }
}).catch(err => {
    return err;
})
})

// add part supplier  user 
exports.addpartSupplierRole = functions.https.onCall((data, context)=> {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid, {
        partSupplier: true
    });
}).then(()=> {
    return {
        message: `Success! ${data.email} has been made a part supplier`
    }
}).catch(err => {
    return err;
})
})

// add part Default  user 
exports.addDefaultRole = functions.https.onCall((data, context)=> {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid, {
        default: true
    });
}).then(()=> {
    return {
        message: `Success! ${data.email} has been made a default user`
    }
}).catch(err => {
    return err;
})
})

// add admin user 
exports.addadminRole = functions.https.onCall((data, context)=> {
return admin.auth().getUserByEmail(data.email).then(user =>{
    return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
    });
}).then(()=> {
    return {
        message: `Success! ${data.email} has been made an admin`
    }
}).catch(err => {
    return err;
})
})

// .region('asia-northeast3')
exports.recursiveDelete = functions.runWith({timeoutSeconds: 540,memory: '2GB'}).https.onCall( (data, context) => {
    // Only allow admin users to execute this function.
    // if (!(context.auth && context.auth.token && context.auth.token.admin)) {
    //   throw new functions.https.HttpsError(
    //     'permission-denied',
    //     'Must be an administrative user to initiate delete.'
    //   );
    // }

    const path = data.path;
    console.log(
      `User ${context.auth.uid} has requested to delete path ${path}`
    );

    // Run a recursive delete on the given document or collection path.
    // The 'token' must be set in the functions config, and can be generated
    // at the command line by running 'firebase login:ci'.
     firebase_tools.firestore
      .delete(path, {
        project: "projectcrm-f4e5f",
        recursive: true,
        force: true,
        // token: functions.config().fb.token
      });

    return {
      path: path 
    };
  });

