"use strict"


const firebaseConfig = {
  apiKey: "AIzaSyAq2QjImxRXEtRHN-N6u2YEod-wUJMtI1s",
  authDomain: "projectcrm-f4e5f.firebaseapp.com",
  databaseURL: "https://projectcrm-f4e5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectcrm-f4e5f",
  storageBucket: "projectcrm-f4e5f.appspot.com",
  messagingSenderId: "404890912341",
  appId: "1:404890912341:web:5b129be76ccdfeba8c76dc",
  measurementId: "G-TL8J23TNZE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = firebase.firestore(app)
const functions = firebase.functions(app)
const modalyWrapper = document.querySelector('.modaly-wrapper');
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addModalyForm = document.querySelector('.add-modaly .form');

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');

const btnprAdd = document.querySelector('.btnpr-add');

const listofusers = document.querySelector('.listofusers');


let id;



// Create element and render users

const renderUser = (doc) => {


  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().userFirstname} ${doc.data().userLastname}</td>
     
      <td>${doc.data().userEmail}</td>
      <td>         <div class="input-group mb-3">
                       <input type="text" readonly value="${doc.data().userRole}" class="form-control" style="margin: 0;border-radius: 10px 0 0 10px;height:46px;width: 35%;"   aria-describedby="basic-addon5">
                          <select class="custom-select assignRole" user-email="${doc.data().userEmail}" user-id="${doc.id}" style="text-align: center;" id="inputGroupSelect03">
                             <option  selected>선택하기</option>
                            <option value="1">기본 사용자</option>
                         <option value="2">제품 제조사</option>
                           <option value="3">부품 공급사</option>
                                <option value="4" >admin</option>
                        </select>
                           <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon5"><i class="bx bx-lock-open-alt font-size-20"></i></span>
                        </div>
                     </div>
      </td>
  
        <td>
    <div class="btngroup" style="margin:0;">
             <nav class="navbary" style="background-color: #219EBC; width: 60%;">
	<a href="#" class="navbary__link">
		<span class="viewbtn" data-toggle="modal" data-target="#exampleModalScrollable"><i class="ri-eye-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">View User Details</span>
	</a>
  
	<a href="#" class="navbary__link">
		<span class="btnpr-edit" data-toggle="modal" data-target="#exampleModalScrollableEDIT"><i class="bx bxs-edit-alt" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Edit User Details</span>
	</a>

 
</nav>

    <nav class="navbary btnpr-delete"  style="margin-left: -12px; width:40px; background-color: #219EBC;">
	<a href="#" class="navbary__link" >
		<span class="" ><i class='ri-delete-bin-line' style="color: white; font-size: 17px;"></i></i></span>
		<span class="navbary__label" style="background-color: #219EBC; left:-55px;" >Delete User</span>
	</a>
</nav>
    </div>
   
      </td>
    </tr>
  `;
  listofusers.insertAdjacentHTML('beforeend', tr);



      const setupUserReqList = (data) => {
    let html = '';
    data.forEach(doc=> {
      const li = `
       <tr data-id='${doc.id}'>
      <td>${doc.data().userFirstname} ${doc.data().userLastname}</td>
   
      <td>${doc.data().userEmail}</td>
        <td>${doc.data().userRole}</td>
          <td>${doc.data().requestRole}</td>
      <td>         <div class="input-group mb-3" style="margin-top: 5px;">
                          <select class="custom-select assignRequestRole" user-email="${doc.data().userEmail}" user-id="${doc.id}" style="text-align: center;" id="inputGroupSelect03">
                             <option  selected>선택하기</option>
                            <option value="1">기본 사용자</option>
                         <option value="2">제품 제조사</option>
                           <option value="3">부품 공급사</option>
                             <option value="4" >admin</option>
                           
                        </select>
                           <div class="input-group-append">
                           <span class="input-group-text" id="basic-addon5"><i class="bx bx-lock-open-alt font-size-20"></i></span>
                        </div>
                     </div>
      </td>
    </tr>
      `;
           html+=li
    
    })
  
    document.querySelector('.listofRoleRequests').insertAdjacentHTML('beforeend', html)
  }
    db.collection('users').where('requestType', '==', true).onSnapshot(snapshot => {
      document.querySelector('.listofRoleRequests').innerHTML = '';

    setupUserReqList(snapshot.docs) 
      console.log("hey")

  const assignRequestRole = document.querySelectorAll('.assignRequestRole');
for (var i = 0; i < assignRequestRole.length; i++){
   const requestRoleType = assignRequestRole[i].getAttribute('user-email')
    let uid = assignRequestRole[i].getAttribute('user-id')
assignRequestRole[i].onchange = function(e){
  e.preventDefault;
 
  console.log(requestRoleType)
  console.log(e.target.value)
    if (e.target.value == 2) {
        const addproductManuRole = functions.httpsCallable('addproductManuRole');
  addproductManuRole({email: requestRoleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Product Manufacturer",
      requestType: false
    }).then(()=>{
    Swal.fire(
  '완료',
  '권한 할당이 적용되었습니다',
  'success'
)
    })
  })
  }

     else if (e.target.value == 1) {
        const addDefaultRole = functions.httpsCallable('addDefaultRole');
  addDefaultRole({email: requestRoleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Default",
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Default User Access Granted !',
  'success'
)
    })
  })
  }

   else if (e.target.value == 3) {
        const addpartSupplierRole = functions.httpsCallable('addpartSupplierRole');
  addpartSupplierRole({email: requestRoleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Part Supplier",
      requestType: false,
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Part Supplier Access Granted !',
  'success'
)
    })
  })
  }

     else if (e.target.value == 4) {
        const addpartSupplierRole = functions.httpsCallable('addadminRole');
  addpartSupplierRole({email: requestRoleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Admin",
      requestType: false,
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Admin Access Granted !',
  'success'
)
    })
  })
  }
 
}
}
  })

  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = 'Edit ' + doc.data().userFirstname + ' ' + doc.data().userLastname;
    editmodalyForm.userFirstname.value = doc.data().userFirstname;
    editmodalyForm.userLastname.value = doc.data().userLastname;
    editmodalyForm.userEmail.value = doc.data().userEmail;
    // editmodalyForm.userID.value = doc.data().userID;

  });

  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', () => {
    db.collection('users').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
  });

  const assignRole = document.querySelectorAll('.assignRole');
for (var i = 0; i < assignRole.length; i++){
   const roleType = assignRole[i].getAttribute('user-email')
    let uid = assignRole[i].getAttribute('user-id')
assignRole[i].onchange = function(e){
  e.preventDefault;
 
  console.log(roleType)
  console.log(e.target.value)
  // if (assignRole.value = 'default') {
  //    const addDefaultRole = functions.httpsCallable('addDefaultRole');
  // addDefaultRole({email: roleType}).then(result => {
  //   console.log(result);
  // })
  // }
 

    if (e.target.value == 2) {
        const addproductManuRole = functions.httpsCallable('addproductManuRole');
  addproductManuRole({email: roleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Product Manufacturer",
    }).then(()=>{
    Swal.fire(
  'Confirmed!',
  'Product Manufacturer Access Granted!',
  'success'
)
    })
  })
  }

     else if (e.target.value == 1) {
        const addDefaultRole = functions.httpsCallable('addDefaultRole');
  addDefaultRole({email: roleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Default",
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Default User Access Granted !',
  'success'
)
    })
  })
  }

   else if (e.target.value == 3) {
        const addpartSupplierRole = functions.httpsCallable('addpartSupplierRole');
  addpartSupplierRole({email: roleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Part Supplier",
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Part Supplier Access Granted !',
  'success'
)
    })
  })
  }

    else if (e.target.value == 4) {
        const addpartSupplierRole = functions.httpsCallable('addadminRole');
  addpartSupplierRole({email: roleType}).then(result => {
    console.log(result);
    db.collection("users").doc(uid).update({
      userRole: "Admin",
    }).then(()=>{
      Swal.fire(
  'Confirmed!',
  'Admin Access Granted !',
  'success'
)
    })
  })
  }
 
}
}
}



// User click anyware outside the modaly
window.addEventListener('click', e => {
  if(e.target === addmodaly) {
    addmodaly.classList.remove('modaly-show');
  }
  if(e.target === editmodaly) {
    editmodaly.classList.remove('modaly-show');
  }
});


// // Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//   console.log(doc.data());
//   })
// });

// Real time listener
db.collection('users').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      listofusers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      listofusers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})


// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('users').doc(id).update({
    userFirstname: editmodalyForm.userFirstname.value,
    userLastname: editmodalyForm.userLastname.value,
    userEmail: editmodalyForm.userEmail.value,
    userID: editmodalyForm.userID.value,
  });
  
  editmodaly.classList.remove('modaly-show');
  
});

const editUI = ( user) => {
  console.log(user)
  const userTitle = document.getElementById('usertitle')
  userTitle.innerHTML = firebase.auth().currentUser.email
}

// const assignRole = document.getElementById('makeAdmin');
// makeAdmin.addEventListener('click', e=> {
//   e.preventDefault;
//   const adminEmail = document.querySelector('.admin-email').value
//   const addAdminRole = functions.httpsCallable('addAdminRole');
//   addAdminRole({email: adminEmail}).then(result => {
//     console.log(result);
//   })
// })



