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
const db = firebase.firestore(app);
const functions = firebase.functions();
const modalyWrapper = document.querySelector('.modaly-wrapper');
const userroledisplay = document.querySelector('.userroledisplay')
const materialtitle = document.querySelector('.modal-title')
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addmodalyPartsSingle = document.querySelector('.addPartMatmodaly');
const addmodalySubssSingle = document.querySelector('.addSubsmodaly');
const addModalyForm = document.querySelector('.add-modaly .form');
const addModalyParts = document.querySelector('.addPartMatmodaly .form');
const addModalyPartsClose = document.querySelector('.addPartMatmodaly');
const editMatmodaly = document.querySelector('.editMatmodaly')
const addModalySubs = document.querySelector('.addSubsmodaly .form');
const addModalySubsClose = document.querySelector('.addSubsmodaly');
const subsmodalclose = document.querySelector('#subsmodalclose')
let addpartWidth = document.querySelector('.addpartWidth')
let addpartDepth = document.querySelector('.addpartDepth')
let addpartHeight = document.querySelector('.addpartHeight')

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');
const btnprAdd = document.querySelector('.btnpr-add');
const tableUsers = document.querySelector('.table-users');
// modaly view
const viewmodaly = document.querySelector('.view-modaly');
const viewmodalyForm = document.querySelector('.view-modaly .form');
const adminElement = document.querySelector('.adminelement')
const notadminElement = document.querySelectorAll('.notadmin')
const usertest = document.getElementById("usertest");
const partsName = document.querySelector('.partsName')
const materiallist = document.querySelector('.materiallist')
const closebtn = document.querySelectorAll('.action-button-close')
const closebtnMat = document.querySelectorAll('.action-button-closeMat')
const subslist = document.querySelector('.subslist')
const addPartsForm = document.querySelector('#addPartsForm')

// materials edit references
let viewMatTable = document.querySelector('.viewMatTable')
let PMmaterialGroup = document.getElementById('PMmaterialGroup')
let PMmaterialName = document.getElementById('PMmaterialName')
let PMmaterialRecycleContent = document.getElementById('PMmaterialRecycleContent')
let PMMaterialRecycleType = document.getElementById('PMMaterialRecycleType')
let PMmaterialMassg = document.getElementById('PMmaterialMassg')
 let PMMaterialMassPerc = document.getElementById('PMMaterialMassPerc')
 let editMat = document.getElementById('editMat')

//substances references
 let addSubs = document.getElementById('addSubs')
 let getSubsname = document.getElementById('getSubsname')
 let getsubstancelist = document.querySelector('.getsubstancelist')
  let getsubstancetype = document.querySelector('.getsubstancetype')
  let addcas = document.querySelector('.addcas')
  let addcrm = document.querySelector('.addcrm')
  let addrohs = document.querySelector('.addrohs')
  let addsubstanceMassg = document.querySelector('.addsubstanceMassg')
  let addsubstanceMassPerc = document.querySelector('.addsubstanceMassPerc')
 let substancelisttable = document.querySelector('.substancelisttable')
 let delSubs = document.getElementById('delSubs')

 let matnameSelect = document.querySelector('#editmaterialName');
 let reuseMat = document.querySelector('#reuseMat');
let recycMat = document.querySelector('#recycMat');
let recovMat = document.querySelector('#recovMat');
 let selecreuseMat = document.querySelector('#selecreuseMat');
let selecrecycMat = document.querySelector('#selecrecycMat');
let selecrecovMat = document.querySelector('#selecrecovMat');
let selectiveMat = document.querySelector('#selectiveMat')
const addmaterialOptions = document.querySelector('#editmaterialName')
   const editmaterialOptions = document.querySelector('.editmaterialName')
// order and filtering 
let id;



// const renderTest = doc => {
// //   console.log(doc)
// //   const tl = `
// //  <a class="mb-1 " id="usertest" > ${doc.data().productClass}</a>
// //   `
// //     usertest.insertAdjacentHTML('beforeend', tl);
// // }

// Create element and render users
document.querySelector('.loadingtitle').innerHTML = "Data is loading - Please wait... ⌛"
  document.querySelector('.loadingtitle').style.fontWeight = "600"
  document.querySelector('.loadingtitle').style.color = "black"
    document.querySelector('.loadingtitle').style.marginLeft = "43%";
const renderUser = doc => {



  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid grey;">
      <td>${doc.data().supplierName}</td>
     <td>${doc.data().partName}</td>
   
      <td>${doc.data().partCode}</td>
        <td>${doc.data().partWeight}</td>
           <td>${doc.data().reusedPart}</td>
     <td>${doc.data().partRegisteredDate}</td>
           <td>${doc.data().partMemo}</td>


         <td>
  <nav class="navbary" style="background-color: #219EBC">
	<a href="#" class="navbary__link">
		<span class=" viewbtn" id="btnprview"  data-toggle="modal" data-target="#exampleModalScrollable" partname='${doc.data().partName}' data-id='${doc.id}'><i class="ri-eye-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="left: -36px; background-color: #219EBC">View Materials</span>
	</a>
</nav>
   
      </td>
    </tr>
  `;


  const parttable = document.querySelector('.parttable')
  parttable.insertAdjacentHTML('beforeend', tr);
   document.querySelector('.loadingtitle').style.display = "none"
  
 const viewbtn = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewbtn.addEventListener('click', (e)=> {
e.preventDefault()
viewMatTable.classList.add('modaly-show');

const setPSubsheader = document.querySelector('.setPSubsheader')
setPSubsheader.innerHTML =  `물질목록 : ${doc.data().partName}`
const setPMatheader = document.querySelector('.setPMatheader')
setPMatheader.innerHTML =  `소재목록 : ${doc.data().partName}`
      const breadbody = document.querySelector('.breadbody')
      breadbody.innerHTML = ""
    const breadpartname = document.querySelector('.breadpartname')
    breadpartname.innerHTML = `${doc.data().partName}`
  materialtitle.innerHTML = `${doc.data().partName}`
  const partRef = `${doc.id}`
  console.log(partRef)
 const materiallist = document.querySelector('.materiallist')
 materiallist.innerHTML = "";
    //click add parts button
 const setupMaterialUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const material = doc.data();

      const li = `
     <tr id='${doc.id}' data-id='${doc.id}'>
    <td>${doc.data().materialGroup}</td>
       <td>${doc.data().materialName}</td>
      <td>${doc.data().materialRecycleContent}</td>
      <td>${doc.data().materialRecycleType}</td>
      <td>${doc.data().materialMassg}</td>
        <td>${doc.data().materialMassPerc}</td>


  <td>
 <nav class="navbary" style="background-color: #219EBC">
	<a href="#" class="navbary__link">
		<span class="btnpmviewSubs" id="btnprview" data-id='${doc.id}'  data-toggle="modal" data-target="#exampleModalScrollableSubstances"><i class="ri-eye-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="left: -36px; background-color: #219EBC">View Substances</span>
	</a>
</nav>
      </td>
    </tr>
      
      `;
      html+=li
       const bpart = `
       <tr data-id="1" data-parent="0" data-level="1">
                                 <td data-column="name">${doc.data().materialName}</td>
                              </tr>

      `;
        
       breadbody.insertAdjacentHTML('beforeend', bpart)
    }
    )
    materiallist.insertAdjacentHTML('beforeend', html)
  }
  
   db.collection('recycledparts').doc(`${doc.id}`).collection('materials').onSnapshot(snapshot => {
     materiallist.innerHTML = "";
     breadbody.innerHTML = "";
    setupMaterialUI(snapshot.docs)
    let partId = doc.id
    console.log(partId)



   let btnpmedit = document.querySelectorAll(".btnpmedit");
  let btnpmSubs = document.querySelectorAll(".btnpmSubs");
   let btnpmviewSubs = document.querySelectorAll(".btnpmviewSubs");


      
btnpmedit.forEach((eachbtnpmedit)=>{
// edit a material of a specific part
 eachbtnpmedit.onclick = function(e) {
  
editMatmodaly.classList.add('modaly-show');
  let editData = eachbtnpmedit.getAttribute("data-id");
  console.log(editData)
  e.preventDefault()
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).get().then((doc)=> {
  if (doc.exists) {
        console.log("Document data:", doc.id, doc.data());
         const editMatHeader = document.querySelector('.editMatHeader')
         console.log(doc.data())
    id = doc.id;
    editMatHeader.innerHTML = ' ' + doc.data().materialName
    PMmaterialGroup.value = doc.data().materialGroup;
    PMmaterialName.value = doc.data().materialName;
    PMmaterialRecycleContent.value = doc.data().materialRecycleContent;
    PMMaterialRecycleType.value = doc.data().materialRecycleType;
    PMmaterialMassg.value = doc.data().materialMassg;
    PMMaterialMassPerc.value = doc.data().materialMassPerc;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
 })

 editMat.onclick = function(e){
  materiallist.innerHTML = ""
e.preventDefault()
Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
      db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).update({
    materialGroup: PMmaterialGroup.value,
    materialName: PMmaterialName.value,
    materialRecycleContent: PMmaterialRecycleContent.value,
    materialRecycleType: PMMaterialRecycleType.value,
    materialMassg: PMmaterialMassg.value,
    materialMassPerc: PMMaterialMassPerc.value,
   
  })
  .then(()=> {
    console.log('Document Updated Successfully!')
  });  
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
}) 
} 
}
})

//delete material specific to a part
   let btnpmdelete = document.querySelectorAll(".btnpmdelete");
     for (let i = 0; i < btnpmdelete.length; i++) {
 
 btnpmdelete[i].addEventListener('click', (event) => {
  event.preventDefault()
      let deleteData = btnpmdelete[i].getAttribute("data-id");
console.log(deleteData)
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
       let tr = document.getElementById(`${deleteData}`);
      tr.remove(tr);
      materiallist.innerHTML = ""
      db.collection('recycledparts').doc(`${doc.id}`).collection('materials').doc(deleteData).delete().then(() => {
        
      console.log('Document succesfully deleted!');
    })
 
    .catch(err => {
      console.log('Error removing document', err);
    });
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})

    event.stopPropagation();

  })
}
btnpmSubs.forEach((eachbtnpmSubs)=> {
  //add a new substance to a specific material
 eachbtnpmSubs.onclick = function (e) {
  e.preventDefault()
  let matId = eachbtnpmSubs.getAttribute("data-id");
  let matWeightRef = eachbtnpmSubs.getAttribute("matWeight");
addmodalySubssSingle.classList.add('modaly-show');
  console.log(matId)
  getsubstancetype.onchange = function(e) {
    e.preventDefault()
    getsubstancelist.innerHTML = ""
    db.collection("substances").where(getsubstancetype.value,"==", "Y")
    .get()
    .then((querySnapshot) => {
      
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().subtanceName}</option>
  // `;
  getsubstancelist.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
   
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    }


 getSubsname.onchange = function() {
 db.collection("substances").where("subtanceName", "==", getsubstancelist.value).where(getsubstancetype.value, "==", "Y").get()
      .then((querySnapshot)=> {
           querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          addcas.value = doc.data().casnumber,
          addrohs.value = doc.data().rohs,
          addcrm.value = doc.data().crm

        });
      })
      }


  //to be fixed
 addsubstanceMassg.onchange = function(e){
  e.preventDefault()
  addsubstanceMassPerc.value = (addsubstanceMassg.value / parseFloat(matWeightRef) * 100).toFixed(2)
}

addSubs.onclick = function(e) {
  e.preventDefault();
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${matId}`).collection('substances').add({
    subidRef : '',
    substanceName: getsubstancelist.value,
    casnumber: addcas.value,
    crm: addcrm.value,
    rohs: addrohs.value,
    substanceMassg: addsubstanceMassg.value,
    substanceMassPerc: addsubstanceMassPerc.value,
 })
 .then((doc)=> {
  const subRef = doc.id

  console.log(doc.id)
  db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${matId}`).collection('substances').doc(doc.id).update({
       subidRef : subRef,
  })
  Swal.fire(
  'Success!',
  'A new Substance has been added!',
  'success'
)
  console.log('Substance added Successfully');
  addmodalySubssSingle.classList.remove('modaly-show');
 })
}}
})
btnpmviewSubs.forEach((eachbtnpmviewSubs)=>{
   const subsmatId = eachbtnpmviewSubs.getAttribute("data-id");
eachbtnpmviewSubs.onclick = function() {
substancelisttable.innerHTML = "";
 
  console.log(`${subsmatId}`)
      //Start work here
db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${subsmatId}`).collection('substances').get()
.then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    console.log(data)

    let arrUniq = [...new Map(data.map(v => [JSON.stringify([v.casnumber,v.crm,v.rohs,v.substanceMassPerc,v.substanceMassg,v.substanceName]), v])).values()]
   
    console.log(arrUniq)
    buildTable(arrUniq)
	function buildTable(arrUniq){

		for (var i = 0; i < arrUniq.length; i++ ) {
			var row = `<tr id="${arrUniq[i].subidRef}">
     
							<td>${arrUniq[i].substanceName}</td>
              <td>${arrUniq[i].casnumber}</td>
                <td>${arrUniq[i].crm}</td>
                    <td>${arrUniq[i].rohs}</td>
							<td>${arrUniq[i].substanceMassg}</td>
							<td>${arrUniq[i].substanceMassPerc}</td>
                    <td>
   
   
      </td>
             </tr>`
			substancelisttable.innerHTML += row
		}}
  })
.then(()=> {
    const btnpartsubdelete = document.querySelectorAll('.btnpartsubdelete');
    btnpartsubdelete.forEach((eachbtnpartsubdelete) => {
eachbtnpartsubdelete.onclick = function(e){
  e.preventDefault()
  const subtRefId = eachbtnpartsubdelete.getAttribute('data-part')
   let tr = document.getElementById(`${subtRefId}`);
   Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
      tr.remove(tr);
  db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${subsmatId}`).collection('substances').doc(`${subtRefId}`).delete().then(() => {
    
      console.log('Document succesfully deleted!');
    })
 
    .catch(err => {
      console.log('Error removing document', err);
    });
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
)}})}
    })
})}})})})

}
 






// User click anyware outside the modaly
window.addEventListener('click', e => {
  if(e.target === addmodaly) {
    addmodaly.classList.remove('modaly-show');
  }
  if(e.target === editmodaly) {
    editmodaly.classList.remove('modaly-show');
  }
  if(e.target === viewmodaly) {
    viewmodaly.classList.remove('modaly-show');
  }
  
   if(e.target === editMatmodaly) {
    editMatmodaly.classList.remove('modaly-show');
  }
   if(e.target === addmodalySubssSingle) {
    addmodalySubssSingle.classList.remove('modaly-show');
  }
     if(e.target === addmodalyPartsSingle) {
    addmodalyPartsSingle.classList.remove('modaly-show');
  }
     if(e.target === editMatmodaly ) {
    editMatmodaly.classList.remove('modaly-show');
  }
      if(e.target === viewMatTable ) {
    viewMatTable.classList.remove('modaly-show');
  }
});


// Get all users


// Real time listener
db.collection('recycledparts').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
        // renderTest(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
        // renderTest(change.doc);
    }
  })
})

   auth.onAuthStateChanged(user => {

    if(user) {
      
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
const supplierNameData = document.querySelector('#addsupplierName')
supplierNameData.value = doc.data().userCompanyname
   })})}})


// Click submit in add modaly
addPartsForm.addEventListener('click', e => {
  e.preventDefault();
  db.collection('recycledparts').add({
     supplierName: addModalyForm.addsupplierName.value,
   partName: addModalyForm.addpartName.value,
    partCode: document.querySelector('#addClass').value,
    partWeight: addModalyForm.addpartWeight.value,
    partSize: `${addpartWidth.value} x ${addpartDepth.value} x ${addpartHeight.value}`,
    reusedPart: addModalyForm.addreusedPart.value,
    partRegisteredDate: addModalyForm.addpartregisteredDate.value,
    partMemo: addModalyForm.addMemo.value
    
  })
Swal.fire(
  'Good job!',
  'New part is added successfully!',
  'success'
)
});
const editsupplierName = document.querySelector('#editsupplierName')
const editpartName = document.querySelector('#editpartName')
const editpartWeight = document.querySelector('#editpartWeight')
const editpartClass = document.querySelector('#editpartClass')
const editpartSize = document.querySelector('#editpartSize')
const editreusedPart = document.querySelector('#editreusedPart')
const editpartregisteredDate = document.querySelector('#editpartregisteredDate')
const editMemo = document.querySelector('#editMemo')
const editPart = document.querySelector('#editPart')
// document.querySelector('#addpartName').setAttribute("disabled","disabled")
// Click submit in edit modaly
editPart.onclick = function(e) {
  e.preventDefault();
  Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
     db.collection('recycledparts').doc(id).update({
     supplierName: editsupplierName.value,
    partName: editpartName.value,
    partCode: editpartClass.value,
    partWeight: parseFloat(editpartWeight.value),
    partSize: editpartSize.value,
    reusedPart: editreusedPart.value,
    partRegisteredDate: editpartregisteredDate.value,
    partMemo: editMemo.value
  });
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
 
  };



    //click add subsctance button
   
 


 

firebase.auth().onAuthStateChanged(user => {
  const userEmailCard = document.getElementById('useremailcard')
 
  userEmailCard.innerHTML = user.email
  
})

auth.onAuthStateChanged(user => {
    if(user) {
        user.getIdTokenResult().then(idTokenResult => {
            user.admin = idTokenResult.claims.admin
            editUI(user)
        })
    }
    else {
        console.log("There's nothing here!")
    }
})

const editUI = (user) => {
  if (user) {
    const userTitleCard = document.getElementById('usertitle')
     const notadminElement = document.querySelectorAll('.notadmin')
     
      
    if(user.admin) {
      // document.addEventListener('DOMContentLoaded', ()=> {
        
      // })
    const firstcreation = document.getElementById('lastsignin')
     const userDisplay = document.getElementById('userDisplay')
      const adminElement = document.querySelectorAll('.adminelement');
    adminElement.forEach(item => item.style.display = 'flex');
     notadminElement.forEach(item => item.style.display = 'none');
     
      userTitleCard.innerHTML = 'Product Manufacturer'
      console.log("This User is an admin")
      const firstcreationtime = firebase.auth().currentUser.metadata.creationTime
      const userDisplayName = firebase.auth().currentUser.displayName
    console.log(user.metadata.lastSignInTime)
    console.log(firebase.auth().currentUser.displayName)
    firstcreation.innerHTML = "Since "  + firstcreationtime;
    userDisplay.innerHTML = userDisplayName;


   
   
    } else {
       const userTitleCard = document.getElementById('usertitle')
       
       const lastsignin = document.getElementById('lastsignin')
        const adminElement = document.querySelectorAll('.adminelement');
        const notadminElement = document.querySelectorAll('.notadmin')
    adminElement.forEach(item => item.style.display = 'none');
    notadminElement.forEach(item => item.style.display = 'flex');
    userTitleCard.innerHTML = 'Part Supplier'
    // lastsignindata = firebase.auth().currentUser.metadata.lastSignInTime
    // console.log(lastsignindata)
    // notadminElement.style.display = 'flex'
   
    //  lastsignin.innerHTML = ''

    }

  } else {
   
    console.log("not an admin")
  }
}

const arr = ['one', 'two', 'one', 'one', 'two', 'three'];

const count = arr.reduce((accumulator, value) => {
  return {...accumulator, [value]: (accumulator[value] || 0) + 1};
}, {});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);



closebtn.forEach((eachClose)=> {
  eachClose.addEventListener('click', () =>{
    addmodaly.classList.remove('modaly-show');
    addModalyPartsClose.classList.remove('modaly-show');
    editmodaly.classList.remove('modaly-show');
    addModalySubsClose.classList.remove('modaly-show');
    viewMatTable.classList.remove('modaly-show');
   })
})


closebtnMat.forEach((eachCloseMat)=> {
  eachCloseMat.addEventListener('click', () =>{
    editMatmodaly.classList.remove('modaly-show');
   })
})
