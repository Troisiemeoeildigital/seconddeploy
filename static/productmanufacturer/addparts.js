

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
let selectUnit = document.querySelector(".selectUnit")
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
const closebtnSub = document.querySelectorAll('.action-button-closeSub')
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

 //edit part
 const editsupplierName = document.querySelector('#editsupplierName')
const editpartName = document.querySelector('#editpartName')
const editpartWeight = document.querySelector('#editpartWeight')
const editpartClass = document.querySelector('#editpartClass')
const editpartSize = document.querySelector('#editpartSize')
const editreusedPart = document.querySelector('#editreusedPart')
const editpartregisteredDate = document.querySelector('#editpartregisteredDate')
const editMemo = document.querySelector('#editMemo')
const editPart = document.querySelector('#editPart')

const editpartWidth = document.querySelector('.editpartWidth')
const editpartDepth = document.querySelector('.editpartDepth')
const editpartHeight = document.querySelector('.editpartHeight')
const editselectUnit = document.querySelector('.editselectUnit')

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
// Edit Substances
const editSubmodaly = document.querySelector('.editSubmodaly')
const EditPMSubsName = document.querySelector('#EditPMSubsName')
const EditPMSubsCAS = document.querySelector('#EditPMSubsCAS')
const EditPMSubsCRM = document.querySelector('#EditPMSubsCRM')
const EditPMSubsROHS = document.querySelector('#EditPMSubsROHS')
const EditPMSubsMassg = document.querySelector('#EditPMSubsMassg')
const EditPMSubsMassPerc = document.querySelector('#EditPMSubsMassPerc')
const editSub = document.querySelector('#editSub')
let id;



// const renderTest = doc => {
// //   console.log(doc)
// //   const tl = `
// //  <a class="mb-1 " id="usertest" > ${doc.data().productClass}</a>
// //   `
// //     usertest.insertAdjacentHTML('beforeend', tl);
// // }

// Create element and render users

const renderUser = doc => {



  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid grey;">
     <td>
                                <div class="checkbox " style="  display: inline-table;  width: 20px;
    height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" style="height: fit-content;">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
     <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().partName}</td>
      <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().partCode}</td>
        <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().partWeight}</td>

           <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().reusedPart}</td>
     <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().partRegisteredDate}</td>
           <td style="color: black;font-weight: 600; font-size: 15px;">${doc.data().partMemo}</td>


   

         <td>
    <div class="btngroup" style="margin:0;">
             <nav class="navbary" style="background-color: #219EBC; width: 60%;">
	<a href="#" class="navbary__link">
		<span class="viewbtn" id="btnprview" data-id='${doc.id}' partWeight='${doc.data().partWeight}' data-toggle="modal" data-target="#exampleModalScrollable"><i class="ri-eye-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">View Materials</span>
	</a>

  	<a href="#" class="navbary__link">
		<span class="btnpr-edit"><i class="bx bxs-edit-alt" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Edit Part</span>
	</a>
  
    	<a href="#" class="navbary__link">
		<span class="btnpr-addParts" data-id='${doc.id}' partWeight='${doc.data().partWeight}'><i class="bx bx-plus" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Add New Material</span>
	</a>

      	<a href="#" class="navbary__link">
		<span class="btnpr-delete" ><i class="ri-delete-bin-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="left: -36px; background-color: #219EBC;">Delete Part</span>
	</a>
</nav>

    <nav class="navbary duplicatePart" data-id='${doc.id}'  style="margin-left: -12px; width:40px; background-color: #219EBC;">
	<a href="#" class="navbary__link" >
		<span class="" ><i class='bx bx-duplicate' style="color: white; font-size: 17px;"></i></i></span>
		<span class="navbary__label" style="background-color: #219EBC; left:-55px;" >Duplicate Part</span>
	</a>
</nav>
    </div>
   
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
// start here
let partWeightRef = viewbtn.getAttribute('partWeight')

const setMatheader = document.querySelector('.setMatheader')
      const breadbody = document.querySelector('.breadbody')
      breadbody.innerHTML = ""
    const breadpartname = document.querySelector('.breadpartname')
    breadpartname.innerHTML = `${doc.data().partName}`
  materialtitle.innerHTML = `${doc.data().partName}`
  setMatheader.innerHTML = `  소재목록 - ${doc.data().partName}`
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
         <td>
                                <div class="checkbox " style="  display: inline-table;  width: 20px;
    height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" >
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
    <td>${doc.data().materialGroup}</td>
       <td>${doc.data().materialName}</td>
      <td>${doc.data().materialRecycleContent}</td>
      <td>${doc.data().materialRecycleType}</td>
      <td>${doc.data().materialMassg}</td>
        <td>${doc.data().materialMassPerc}</td>

      <td ><a class="fileicon" href="${doc.data().proofurl}" _blank title="Proof File">
 <i class="ri-file-download-line " style="font-size: 25px;  color: black;"></i>
</a></td>



  <td>

       <nav class="navbary" style="background-color: #219EBC; width: 80%;">
	<a href="#" class="navbary__link" >
		<span class="btnpmviewSubs"    data-id='${doc.id}' data-toggle="modal" data-target="#exampleModalScrollableSubstances"><i class="ri-eye-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">View Substances</span>
	</a>

<a href="#" class="navbary__link" >
		<span class="btnpmedit"  data-id='${doc.id}'><i class="bx bxs-edit-alt" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Edit Material</span>
	</a>

<a href="#" class="navbary__link">
		<span class="btnpmSubs" matName="${doc.data().materialName}"  matWeight="${doc.data().materialMassg}" data-id='${doc.id}'><i class="bx bx-plus" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC; top:-46px; width:180px; left:-46px;">Add New Substances</span>
	</a>

  <a href="#" class="navbary__link">
		<span class="btnpmdelete"   data-Part='${partRef}' data-id='${doc.id}'><i class="ri-delete-bin-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style='left:-49px; background-color: #219EBC;'>Delete Material </span>
	</a>
  </nav>
      </td>
    </tr>
      
      `;
      html+=li
       const bpart = `
         <li><span style="background-color:#219EBC; color:white;">${doc.data().materialName}</span>
                              </li>
      `;
        
       breadbody.insertAdjacentHTML('beforeend', bpart)
    }
    )
    materiallist.insertAdjacentHTML('beforeend', html)

       var materialTable = document.querySelector(".materiallist"),
   sumVal = 0;
            for(var i = 0; i < materialTable.rows.length; i++)
            {
             sumVal = sumVal + parseFloat(materialTable.rows[i].cells[5].innerHTML);
            }
            console.log(sumVal.toFixed(2));
            console.log(partWeightRef)
               const setPMWeight = document.querySelector('.setPMWeight')
  setPMWeight.innerHTML = "Total Materials/Parts Weight: " + sumVal.toFixed(2) + " / " + partWeightRef;
   
      let fileIcon = document.querySelectorAll('.fileicon')
      fileIcon.forEach((eachfileIcon)=>{
        if (eachfileIcon.href == "https://kitech.onrender.com/partsupplier/undefined") {
          eachfileIcon.style.display = "none"
        }
        else {
           eachfileIcon.style.display = "block"
        }
      })
  
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
 
  var addpartsRef = db.collectionGroup('materialsdb');
addpartsRef
.get()
  .then(query=>{
    // let data = query.docs.map(doc=>{
    //     let x = doc.data()
    //         return x;
    // })
    // console.log(data)
        let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    console.log(data)
    // const matHashMap = {}
    // data = data.filter((item, _)=>{
    //   let alreadyExists = matHashMap.hasOwnProperty(item.MaterialGroup)
    //   return alreadyExists ? false: matHashMap[item.MaterialGroup] = 1
    // })
    // console.log(data)

              data = data.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.MaterialGroup === value.MaterialGroup 
  ))
)


        buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `
							<option value="${data[i].MaterialGroup}">${data[i].MaterialGroup}</option>
              
					  `
		
       PMmaterialGroup.innerHTML += row

		}}
  })


  var addpartsRef = db.collectionGroup('materialsdb');
addpartsRef
.get()
  .then(query=>{
    // let data = query.docs.map(doc=>{
    //     let x = doc.data()
    //         return x;
    // })
    // console.log(data)
        let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    // console.log(data)
    const matHashMap = {}
    data = data.filter((item, _)=>{
      let alreadyExists = matHashMap.hasOwnProperty(item.재료명)
      return alreadyExists ? false: matHashMap[item.재료명] = 1
    })
    // console.log(data)


        buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `
							<option value="${data[i].재료명}">${data[i].재료명}</option>
              
					  `
		
       PMmaterialName.innerHTML += row

		}}
  })
  let editData = eachbtnpmedit.getAttribute("data-id");
  console.log(editData)
  e.preventDefault()
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).get().then((doc)=> {
  if (doc.exists) {

        const PMmaterialMassg = document.querySelector('#PMmaterialMassg')
 PMmaterialMassg.onchange = function(e){
  e.preventDefault()
       const PMMaterialMassPerc = document.querySelector('#PMMaterialMassPerc')
  
  PMMaterialMassPerc.value = (PMmaterialMassg.value / doc.data().partRefWeight * 100).toFixed(2)
}
        console.log("Document data:", doc.id, doc.data());
         const editMatHeader = document.querySelector('.editMatHeader')
         console.log(doc.data())
    id = doc.id;
    editMatHeader.innerHTML = '소재정보수정 -' + doc.data().materialName
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

  

var editfiles = [];
document.querySelector(".editfiles").addEventListener("change", function(e) {
  editfiles = e.target.files;
  for (let i = 0; i < editfiles.length; i++) {
    console.log(editfiles[i]);
    document.querySelector('.editprodImgphld').innerHTML = editfiles[i].name
  }
});

const deleteProof = document.querySelector('.deleteProof')
deleteProof.onclick = function(e) {
  e.preventDefault()
   db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).update({
                        proofurl: "https://kitech.onrender.com/undefined"
                       })
}

const updateProof = document.querySelector('.updateProof')
updateProof.onclick = function(e) {
  e.preventDefault()
    //Loops through all the selected editfiles
    for (let i = 0; i < editfiles.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(editfiles[i].name);

      //upload file
      var upload = storage.put(editfiles[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
        
            //create a storage reference
              let filename = editfiles[i].name;
            var storage = firebase.storage().ref(filename);

                //get file url
                storage
                  .getDownloadURL()
                  .then(function(url) {
                    console.log(url);
                       db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).update({
                        proofurl: url
                       })
})
                .then(()=>{
                   Swal.fire(
  'Success!',
  'Proof File updated successfully!',
  'success'
)
                })
        }
      );
    }
}

editMat.onclick = function(e) {
  e.preventDefault();
  //  materiallist.innerHTML = ""
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
  
    Swal.fire(
  'Success!',
  'Material updated successfully!',
  'success'
)

} else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }



})
  };
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
addmodalySubssSingle.classList.add('modaly-show');
  let matId = eachbtnpmSubs.getAttribute("data-id");
  let matWeightRef = eachbtnpmSubs.getAttribute("matWeight");
    let matNametRef = eachbtnpmSubs.getAttribute("matName");
        const setAddSubsHeader = document.querySelector('.setAddSubsHeader')
  
    setAddSubsHeader.innerHTML = '물질추가 - ' + `${matNametRef}`

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
            let subsname = doc.data().subtanceName;
            var length = 70;
var trimmedString = subsname.substring(0, length);
           const tm = `
      <option style="width:50%;">${trimmedString}...</option>
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
   const addPartSubsHeader = document.querySelector('.addPartSubsHeader')
  addPartSubsHeader.innerHTML = `물질목록   - ${doc.data().partName}`
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
         <td >
                                <div class="checkbox " style="  display: inline-table;  width: 20px;
    height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" >
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
							<td>${arrUniq[i].substanceName}</td>
              <td>${arrUniq[i].casnumber}</td>
                <td>${arrUniq[i].crm}</td>
							<td>${arrUniq[i].substanceMassg}</td>
							<td>${arrUniq[i].substanceMassPerc}</td>
       
                    <td>
             <nav class="navbary" style="background-color: #219EBC;">
             	<a href="#" class="navbary__link btnEditSubs" data-Part='${arrUniq[i].subidRef}'>
		<span  ><i class="bx bxs-edit-alt" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Edit Substances</span>
	</a>
	<a href="#" class="navbary__link">
		<span class="btnpartsubdelete"  data-Part='${arrUniq[i].subidRef}'><i class="ri-delete-bin-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label" style="background-color: #219EBC;">Delete Substance</span>
	</a>
  </nav>
      </td>
             </tr>`
      
			substancelisttable.innerHTML += row
		}}
  })
.then(()=> {
    const btnEditSubs = document.querySelectorAll('.btnEditSubs')
      
btnEditSubs.forEach((eachbtnEditSubs)=>{
// edit a material of a specific part
 eachbtnEditSubs.onclick = function(e) {

editSubmodaly.classList.add('modaly-show');
 
 
  const EditSubRef = eachbtnEditSubs.getAttribute('data-part')
  console.log(EditSubRef)
  e.preventDefault()
 db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${subsmatId}`).collection('substances').doc(`${EditSubRef}`).get().then((doc)=> {
  if (doc.exists) {
        console.log("Document data:", doc.id, doc.data());
         const editSubHeader = document.querySelector('.editSubHeader')
         console.log(doc.data())

    id = doc.id;
    editSubHeader.innerHTML = '물질 정보 수정 -' + doc.data().substanceName;
   
    EditPMSubsName.value = doc.data().substanceName;
    EditPMSubsCAS.value = doc.data().casnumber;
    EditPMSubsCRM.value = doc.data().crm;
    // EditPMSubsROHS.value = doc.data().rohs;
    EditPMSubsMassg.value = doc.data().substanceMassg;
    EditPMSubsMassPerc.value = doc.data().substanceMassPerc;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
 })



editSub.onclick = function(e) {
  e.preventDefault();
  //  materiallist.innerHTML = ""
  Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  


  
	     db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${subsmatId}`).collection('substances').doc(`${EditSubRef}`).update({
    substanceName: EditPMSubsName.value,
    casnumber: EditPMSubsCAS.value,
    crm: EditPMSubsCRM.value,
    rohs: EditPMSubsROHS.value,
    substanceMassg: EditPMSubsMassg.value,
    substanceMassPerc: EditPMSubsMassPerc.value,
	
   
  })
  
    Swal.fire(
  'Success!',
  'Susbstance updated successfully!',
  'success'
)

})
  };
}
})
    


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


let duplicatePart = document.querySelectorAll('.duplicatePart')
	duplicatePart.forEach(eachDuplicatePart=>{
eachDuplicatePart.onclick = function(e) {
    e.preventDefault()
     var duplicatePartRef = eachDuplicatePart.getAttribute('data-id')
      db.collection('recycledparts').doc(duplicatePartRef).get().then((doc)=>{
        if (doc.exists) {
                let masterPart = doc.id
                   db.collection('recycledparts').add({
                    partCode: doc.data().partCode,
                     partDepth: doc.data().partDepth,
                      partHeight: doc.data().partHeight,
                       partMemo: doc.data().partMemo,
                        partName: doc.data().partName + "(Duplicated)",
                         partRegisteredDate: doc.data().partRegisteredDate,
                          partWeight: doc.data().partWeight,
                           partWidth: doc.data().partWidth,
                            reusedPart: doc.data().reusedPart,
                             sizeUnit: doc.data().sizeUnit,
                              supplierName: doc.data().supplierName
                   }).then((doc)=> {
                    let childPart = doc.id
                     console.log(childPart)
                    console.log(masterPart)
                    db.collection('recycledparts').doc(duplicatePartRef).collection('materials').get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            // doc.data() is never undefined for query doc snapshots
                            let masterPtMat = doc.id
                            // console.log(doc.id, " => ", doc.data());
                             db.collection('recycledparts').doc(childPart).collection('materials').add({
                             materialClassId: doc.data().materialClassId,
                             materialGroup: doc.data().materialGroup,
                             materialMassPerc: doc.data().materialMassPerc,
                             materialRecycleContent: doc.data().materialRecycleContent,
                             materialRecycleType: doc.data().materialRecycleType,
                             matnameSelect: doc.data().matnameSelect,
                             partRef: doc.data().partRef,
                             partRefWeight: doc.data().partRefWeight,
                            //  proofurl: doc.data().proofurl,
                             recovMat: doc.data().recovMat,
                             recycMat: doc.data().recycMat,
                             reuseMat: doc.data().reuseMat,
                             selecrecovMat: doc.data().selecrecovMat,
                             selecrecycMat: doc.data().selecrecycMat,
                             selecreuseMat: doc.data().selecreuseMat,
                             selectiveMat: doc.data().selectiveMat,
                             materialMassg: doc.data().materialMassg,
                             materialName: doc.data().materialName
                             })
                             .then((doc)=>{
                               let childPartMat = doc.id
                     console.log(childPartMat)
                              db.collection('recycledparts').doc(duplicatePartRef).collection('materials').doc(masterPtMat).collection('substances').get().then((querySnapshot)=>{
                                querySnapshot.forEach((doc) =>{
                                  let masterPtMatSub = doc.id
                                       console.log(doc.data())
                                   db.collection('recycledparts').doc(childPart).collection('materials').doc(childPartMat).collection('substances').add({
                                             casnumber: doc.data().casnumber,
                             crm: doc.data().crm,
                             rohs: doc.data().rohs,
                             subidRef: doc.data().subidRef,
                             substanceMassg: doc.data().substanceMassg,
                              substanceMassPerc: doc.data().substanceMassPerc,
                             substanceName: doc.data().substanceName
                                   })
                                })
                              })
                             })
                                });
                            })
                            .catch((error) => {
                                console.log("Error getting documents: ", error);
                                }); 
                   
                   })
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
      })
   }
  })
   
  




//add materials 
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addParts`);

btnpraddParts.onclick =  function(e)  {
  e.preventDefault();
  let partWeightRef = btnpraddParts.getAttribute('partWeight')
  console.log(partWeightRef)
  addmodalyPartsSingle.classList.add('modaly-show');
  const addPartHeader = document.querySelector('.addPartHeader')
  addPartHeader.innerHTML = `소재추가  - ${doc.data().partName}`


  const getPMatRef = btnpraddParts.getAttribute('data-id')
  console.log(getPMatRef)
  const addmaterialOptions = document.querySelector('#selectiveMat')
addmaterialOptions.innerHTML = ""
  const addmatpartform = document.querySelector('.addmatpartform')
  addmatpartform.reset()
     
     
  addModalyParts.addmaterialName.value = '';
  
  db.collection('recylcedparts').doc(`${doc.id}`).get().then(()=>{
    let partData = doc.data()
    
    console.log(partData);
    
     addModalyParts.addmatpartref.value = partData.partName
     addModalyParts.addmatpartWeight.value = partData.partWeight

  })
const editmaterialGroup = document.querySelector('#editmaterialGroup')
const PMmaterialGroup = document.querySelector('#PMmaterialGroup')
editmaterialGroup.innerHTML = "";
  var addpartsRef = db.collectionGroup('materialsdb');
addpartsRef
.get()
 .then(query=>{
    // let data = query.docs.map(doc=>{
    //     let x = doc.data()
    //         return x;
    // })
    // console.log(data)
        let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    console.log(data)
    const matHashMap = {}
    data = data.filter((item, _)=>{
      let alreadyExists = matHashMap.hasOwnProperty(item.MaterialGroup)
      return alreadyExists ? false: matHashMap[item.MaterialGroup] = 1
    })
    console.log(data)
    buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `
							<option>${data[i].MaterialGroup}</option>
              
					  `
			editmaterialGroup.innerHTML += row
    

		}}
    


  })

 
  



 editmaterialGroup.onchange = function () {
  const addmaterialName = document.querySelector('.addmaterialName')
  addmaterialName.innerHTML = "";
db.collection("materialsdb").where('MaterialGroup', '==', editmaterialGroup.value)
    .get()
    .then((querySnapshot) => {
          getsubstancelist.innerHTML = ""
      const to = `
      <option>Select an option</option>
  // `;
  addmaterialName.insertAdjacentHTML('beforeend', to)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().재료명}</option>
  // `;
  
  addmaterialName.insertAdjacentHTML('beforeend', tm);
    editmaterialOptions.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
 }
db.collection("selectivematerials").get().then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    console.log(data)
    function getUniqueListBy(data, key) {
    return [...new Map(data.map(item => [item[key], item])).values()]
}
const uniqSelecMat = getUniqueListBy(data, 'selectiveMaterials')
console.log(uniqSelecMat)

    const to = `
      <option>Select an option</option>
  // `;
  addmaterialOptions.insertAdjacentHTML('beforeend', to)
    buildTable(uniqSelecMat)
	function buildTable(uniqSelecMat){

		for (var i = 0; i < uniqSelecMat.length; i++){
			var row = `   <option>${uniqSelecMat[i].selectiveMaterials}</option>`


  //  const editmaterialOptions = document.querySelector('.selectiveMat')
  addmaterialOptions.insertAdjacentHTML('beforeend', row)
    editmaterialOptions.insertAdjacentHTML('beforeend', row)

		}
	}


  })

     const addPartmaterialMassg = document.querySelector('.addPartmaterialMassg')
 addPartmaterialMassg.onchange = function(e){
  e.preventDefault()
  addModalyParts.addmaterialMassPerc.value = (addModalyParts.addmaterialMassg.value / addModalyParts.addmatpartWeight.value * 100).toFixed(2)

  
}


 matnameSelect.onchange = function (e) {
    e.preventDefault()
  console.log(matnameSelect.value);
  db.collection("materialsdb").where('재료명', '==', matnameSelect.value)
    .get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            recovMat.value = doc.data().Recoverability,
            recycMat.value = doc.data().Recyclability,
            reuseMat.value = doc.data().Reusabiity
        });
    })
};
 let selectiveMat = document.getElementById("selectiveMat");
let seleccheckbox = document.querySelector('.seleccheckbox');
seleccheckbox.onclick = function() {
  if(seleccheckbox.checked == true) {
selectiveMat.removeAttribute('disabled')
seleccheckbox.style.height = "1px"
  } else {
    selectiveMat.setAttribute("disabled", "disabled") 
  }
}

 selectiveMat.onchange = function () {

  console.log(matnameSelect.value);
  db.collection("selectivematerials").where('selectiveMaterials', '==', selectiveMat.value)
    .get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            selecrecovMat.value = doc.data().recoverability,
            selecrecycMat.value = doc.data().recyclability,
            selecreuseMat.value = doc.data().reusability
        });
    })
}

//  let selectiveMat2 = document.getElementById("selectiveMat2");
// let seleccheckbox2 = document.querySelector('.seleccheckbox2');
 
// seleccheckbox2.onclick = function() {
//   if(seleccheckbox2.checked == true) {
// selectiveMat2.removeAttribute('disabled')
// seleccheckbox2.style.height = "1px"
//   } else {
//     selectiveMat2.setAttribute("disabled", "disabled") 
//   }
// }

var files = [];
document.querySelector(".files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
        const addMatPartBtn = document.querySelector('#addMatPartBtn')
addMatPartBtn.onclick = function(e) {
  e.preventDefault()
  e.stopPropagation()
//check if the materials weight doesnt exceed the part weight
  db.collection("recycledparts").doc(`${getPMatRef}`).collection('materials').get().then((querySnapshot) => {
                 let matWeihtArr = []
                  querySnapshot.forEach((doc) => {
                      // console.log(doc.data())
                      matWeihtArr.push(parseFloat(doc.data().materialMassg));
                  })
                    console.log(matWeihtArr)
                  const weightSum = matWeihtArr.reduce((partialSum, a) => partialSum + a, 0);
                  console.log(partWeightRef, weightSum)
                  let checkWeightSum = weightSum + parseFloat(addPartmaterialMassg.value)
                  console.log(checkWeightSum)
                if (checkWeightSum <= partWeightRef) {
                  console.log(checkWeightSum <= partWeightRef)
                    //checks if files are selected
 
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);

      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
       
            //create a storage reference
              let filename = files[i].name;
            var storage = firebase.storage().ref(filename);

                //get file url
                storage
                  .getDownloadURL()
                  .then(function(url) {
                    console.log(url);  })

         
        }
      );
    }

    let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}


  // console.log(doc.id, " => ", doc.data());
  db.collection('recycledparts').doc(`${getPMatRef}`).collection('materials').doc(guid()).set({
    partRef: addModalyParts.addmatpartref.value,
    partRefWeight: addModalyParts.addmatpartWeight.value,
    materialName: addModalyParts.addmaterialName.value,
    materialGroup: addModalyParts.addmaterialGroup.value,
    materialClassId: addModalyParts.addmaterialClassID.value,
    materialRecycleContent: addModalyParts.addmaterialRecycleContent.value,
    materialRecycleType: addModalyParts.addmaterialRecycleType.value,
    materialMassg: addModalyParts.addmaterialMassg.value,
    materialMassPerc: addModalyParts.addmaterialMassPerc.value,
    recovMat: recovMat.value,
    recycMat: recycMat.value,
    reuseMat: reuseMat.value,
    selecrecovMat: selecrecovMat.value,
    selecrecycMat: selecrecycMat.value,
    selecreuseMat: selecreuseMat.value,
    matnameSelect: matnameSelect.value,
    selectiveMat: selectiveMat.value
    // proofurl: url
    
  })
  console.log('Material Added! ')
  Swal.fire(
  'Success!',
  'A new material was Added!',
  'success'
)
setTimeout(resetForm, 0);
 function resetForm() {
addModalyParts.reset();
}

                }
                else {
                      Swal.fire(`소재 총 중량이 부품 중량을 초과했습니다 ${checkWeightSum} (g) / ${partWeightRef} (g)` , '', 'info')
                }
                })



};

// function getFileUrl() {

// }


   subsmodalclose.addEventListener('click', (e) =>{
    e.preventDefault()
    addmodalySubssSingle.classList.remove('modaly-show');
    // editMatmodaly.classList.remove('modaly-show');
   })
}










  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.onclick = function() {
    
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = '부품정보수정 - ' + doc.data().partName
    editmodalyForm.editsupplierName.value = doc.data().supplierName;
    editmodalyForm.editpartName.value = doc.data().partName;
    editmodalyForm.editpartClass.value = doc.data().partCode;
    editmodalyForm.editpartWeight.value = doc.data().partWeight;

    editmodalyForm.editreusedPart.value = doc.data().reusedPart;
     editmodalyForm.editpartregisteredDate.value = doc.data().partRegisteredDate;
    editmodalyForm.editMemo.value = doc.data().partMemo;

     editmodalyForm.editpartWidth.value = doc.data().partWidth;
     editmodalyForm.editpartDepth.value = doc.data().partDepth;
    editmodalyForm.editpartHeight.value = doc.data().partHeight;
     editmodalyForm.editselectUnit.value = doc.data().sizeUnit;
  }


  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
   let path = db.collection('recycledparts').doc(`${doc.id}`);

  btnprDelete.onclick = function(e) {
    e.preventDefault()
       console.log(path.path + typeof(path.path))
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
     var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    deleteFn({ path: `${path.path}`})
        .then(function(result) {
            console.log('Hurray! Delete success: ' + JSON.stringify(result));
        })
    //     db.collection('recycledparts').doc(`${doc.id}`).delete().then(() => {
    //   console.log('Document succesfully deleted!');
    // }).catch(err => {
    //   console.log('Error removing document', err);
    // });
    
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})

  }
}



 
  let form = document.querySelector('.uploadbtn');
		let file = document.querySelector('.filey');
 form.onclick = function upload(e) {
      e.preventDefault()
        var files = file.files;
        if(files.length==0){
          alert("Please choose any file...");
          return;
        }
        var filename = files[0].name;
        var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
        if (extension == '.CSV' ) {
            //Here calling another method to read CSV file into json
            csvFileToJSON(files[0]);
        }else{
            alert("Please select a valid csv file.");
        }
      }
    
      //Method to read csv file and convert it into JSON 
      function csvFileToJSON(file){
          try {
            var reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = function(e) {
                var jsonData = [];
                var headers = [];
                var rows = e.target.result.split("\r\n");               
                for (var i = 0; i < rows.length; i++) {
                    var cells = rows[i].split(",");
                    var rowData = {};
                    for(var j=0;j<cells.length;j++){
                        if(i==0){
                            var headerName = cells[j].trim();
                            headers.push(headerName);
                        }else{
                            var key = headers[j];
                            if(key){
                                rowData[key] = cells[j].trim();
                            }
                        }
                    }
                    //skip the first row (header) data
                    if(i!=0){
                        jsonData.push(rowData);
                    }
                }
                  
                //displaying the json result in string format
                console.log(JSON.stringify(jsonData));
                let jsonDatUniq = jsonData
                jsonDatUniq = jsonData.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.partCode === value.partCode 
  ))
)
  // console.log(jsonData)
  //   console.log(jsonDatUniq)

      for(let i = 0; i < jsonDatUniq.length; i++) { 
    let obj = jsonDatUniq[i]
          var partsCodeRef = db.collectionGroup('recycledparts');
partsCodeRef
.get()
 .then(query=>{
    var data = query.docs.map(doc=>{
        let x = doc.data().partCode
            return x;
    })
    // console.log(data)
    auth.onAuthStateChanged(user => {
    if(user) {
      db.collection("users").where('userEmail', '==', user.email).get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
         console.log(doc.data().userCompanyname)
              const checkUsername = element => element == `${obj.partCode}`;
      console.log(data.some(checkUsername) )
      if (data.some(checkUsername) == false) { //document don't exist
        console.log("document do not exist")
           db.collection('recycledparts').doc().set({
            supplierName: doc.data().userCompanyname,
            partName: obj.partName,
            partCode: obj.partCode,
            partWeight: obj.partWeight,
            partRegisteredDate: obj.partRegisteredDate,
            reusedPart: obj.reusedPart,
            partMemo: obj.partMemo
           },{merge:true}) 
        
            
        
      }
      else if (data.some(checkUsername) == true) { //document exist
        console.log("document already exists")
      }
        });
    })
      
    
    }
    else {
        console.log("There's no such user!")
    }
})
   
  })

   
  
  }

setTimeout(addMaterial, '7000')
    function addMaterial() {
     for(let i = 0; i < jsonData.length; i++) {
    let obj = jsonData[i];

// console.log(obj.partCode)
  var partsCodeRef = db.collectionGroup('recycledparts');
partsCodeRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data().partCode
            return x;
    })
    // console.log(data)
const checkUsername = element => element == `${obj.partCode}`;
console.log(data.some(checkUsername) )


if (data.some(checkUsername) == true) {
     console.log("doc exists")
    db.collection('recycledparts').where("partCode", "==", `${obj.partCode}`).get() .then((querySnapshot) => {
                
                 querySnapshot.forEach((doc) => {
       db.collection('recycledparts').doc(doc.id).collection('materials').add({
              materialGroup	: obj.materialGroup,
            materialMassPerc: obj.materialMassPerc,
            materialMassg: obj.materialMassg,
            materialName: obj.materialName,

            materialRecycleContent: obj.materialRecycleContent,
            matnameSelect: obj.matnameSelect,
            partRef: obj.partName,
            partRefWeight: obj.partWeight,

            recovMat: obj.recovMat,
            recycMat: obj.recycMat,
            reuseMat: obj.reuseMat,

      })
    })
    })

}

})
}
  }   
 
         





                }
            }catch(e){
                console.error(e);
            }
}



// Click add user button
btnprAdd.onclick = function() {

  addmodaly.classList.add('modaly-show');
    const setDate = document.querySelector('.setDate')
  let now = new Date()
  console.log(now)
 setDate.value = now.getFullYear() + "/" + (now.getMonth() +1)  + "/" + now.getDate() + " - " +   now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  addModalyForm.addpartName.value = '';
  addModalyForm.addpartClass.value = '';
  addModalyForm.addpartWeight.value = '';
  addModalyForm.addreusedPart.value = '';
  addModalyForm.addMemo.value = '';



  
  
};

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
       if(e.target === editSubmodaly ) {
    editSubmodaly.classList.remove('modaly-show');
  }
});

  auth.onAuthStateChanged(user => {
     if(user) {
      
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
  console.log( doc.data().userCompanyname)

    
    console.log('hey')
    document.querySelector('.loadingtitle').innerHTML = "Data is loading - Please wait... ⌛"
  document.querySelector('.loadingtitle').style.fontWeight = "600"
  document.querySelector('.loadingtitle').style.color = "black"
    document.querySelector('.loadingtitle').style.marginLeft = "43%";
db.collection('recycledparts').where("supplierName", '==',  doc.data().userCompanyname).onSnapshot(snapshot => {
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
  document.querySelector('.loadingtitle').innerHTML ="   "
})
  
 })
})}
  })

//   auth.onAuthStateChanged(user => {

//     if(user) {
      
//  const userRef = db.collection('users').where('userID', '==', user.uid).get()

// userRef.then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {

//    })})}})

// Real time listener


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

        //Start work here
   var partsCodeRef = db.collectionGroup('recycledparts');
partsCodeRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data().partCode
            return x;
    })
    console.log(data)
const checkUsername = element => element == document.querySelector('#addClass').value;
    
console.log(data.some(checkUsername) )
if (data.some(checkUsername) == false) {
  db.collection('recycledparts').add({
     supplierName: addModalyForm.addsupplierName.value,
   partName: addModalyForm.addpartName.value,
    partCode: document.querySelector('#addClass').value,
    partWeight: addModalyForm.addpartWeight.value,
    partWidth: addpartWidth.value,
    partDepth: addpartDepth.value,
    partHeight: addpartHeight.value,
    sizeUnit: selectUnit.value,
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
}
else {
  Swal.fire(
  'Error!',
  `Part Code ${document.querySelector('#addClass').value} already exists!`,
  'warning'
)
}
  })


});

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
    // partWidth: addpartWidth.value,
    // partDepth: addpartDepth.value,
    // partHeight: addpartHeight.value,
    // sizeUnit: selectUnit.value,
    partWidth:editpartWidth.value,
    partDepth:editpartDepth.value,
    partHeight:editpartHeight.value,
    sizeUnit:editselectUnit.value,
  
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

closebtnSub.forEach((eachCloseSub)=> {
  eachCloseSub.addEventListener('click', () =>{
    editSubmodaly.classList.remove('modaly-show');
   })
})