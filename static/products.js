

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
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addmodalyPartsSingle = document.querySelector('.addPartmodaly');
const disposalWeightPerc = document.querySelector('.disposalWeightPerc')
const sumRecovWeightPercChart = document.querySelector('.sumRecovWeightPerc')
const sumReuseWeightPercChart = document.querySelector('.sumReuseWeightPerc')
const sumRecycWeightPercChart = document.querySelector('.sumRecycWeightPerc')
const energyRecoveryWeightperc = document.querySelector('.energyRecoveryWeightperc')
const addmodalySubssSingle = document.querySelector('.addSubsmodaly');
const addModalyForm = document.querySelector('.add-modaly .form');
const addModalyParts = document.querySelector('.addPartmodaly .form');
const addModalySubs = document.querySelector('.addSubsmodaly .form');
const closebtn = document.querySelectorAll('.action-button-close')
const addPPmodaly = document.querySelector('.addPPmodaly')
let assess = document.querySelector('.assess')

let addcas = document.querySelector('.addcas')
let addcrm = document.querySelector('.addcrm')
let addrohs = document.querySelector('.addrohs')
let addsubstanceMassg = document.querySelector('.addsubstanceMassg')
let addsubstanceMassPerc = document.querySelector('.addsubstanceMassPerc')
const sumRecycWeightPerChart = document.querySelector(".sumRecycWeightPer")
const chartsthree = document.querySelector(".chartsthree")
const chartsecond = document.querySelector(".chartsecond")
const charts = document.querySelector(".chart")
let selectUnit = document.querySelector('.selectUnit')
let addprodWidth = document.querySelector('#addprodWidth')
let addprodDepth = document.querySelector('#addprodDepth')
let addprodHeight = document.querySelector('#addprodHeight')

const editprodWidth = document.querySelector('.editprodWidth')
const editprodDepth = document.querySelector('.editprodDepth')
const editprodHeight = document.querySelector('.editprodHeight')
const editselectUnit = document.querySelector('.editselectUnit')

  let addProduct = document.querySelector('#addProduct')
let addproductCategory = document.querySelector('#addproductCategory')
let addproductName = document.querySelector('#addproductName')
let addproductMN = document.querySelector('#addproductMN')
let addproductWeight = document.querySelector('#addproductWeight')
let addregisteredDate = document.querySelector('#addregisteredDate')
let addproductStatus = document.querySelector('#addproductStatus')
let addMemo = document.querySelector('#addmemo')

// modaly edit
const editmodaly = document.querySelector('.edit-modaly');
const editmodalyForm = document.querySelector('.edit-modaly .form');
const btnprAdd = document.querySelector('.btnpr-add');
const tableUsers = document.querySelector('.table-users');
const editForm = document.querySelector('#editForm');

// modaly view
const viewmodaly = document.querySelector('.view-modaly');
const viewmodalyForm = document.querySelector('.view-modaly .form');
const adminElement = document.querySelector('.adminelement')
const notadminElement = document.querySelectorAll('.notadmin')
const usertest = document.getElementById("usertest");
const partsName = document.querySelector('.partsName')
const editpartsName = document.querySelector('.editpartsName')
const materiallist = document.querySelector('.materiallist')
const partslist = document.querySelector('.partslist')
const subslist = document.querySelector('.subslist')
const addedpartslist = document.querySelector('.addedpartslist')
const checkpartdata = document.querySelector('.checkpartdata')
const addPart = document.querySelector('.addPart')
const partsTab = document.querySelector('#pills-contact-tab-fill')

//parts references 
    const supplierinfo = document.querySelector('#supplierinfo')
const partname = document.querySelector('#partname')
let quantity = document.querySelector('.quantity')
const partCode = document.querySelector('#partCode')
const partNumber = document.querySelector('#partNumber')
const partSpecs = document.querySelector('#partSpecs')
const partSize = document.querySelector('#partSize')
const partWeight = document.querySelector('#partWeight')
const partRegisteredDate = document.querySelector('#partRegisteredDate')
const companyName = document.querySelector('#companyName')
const partId = document.querySelector('#partId')
const supplierName = document.querySelector('.supplierName')
const renderEN4557 = document.querySelector('.renderEN4557')

const sumTotalWeightPerc = document.querySelectorAll('.sumTotalWeightPerc')

let id;

// auth.onAuthStateChanged(user => {
//     if(user) {
//         user.getIdTokenResult().then(idTokenResult => {
//           // console.log(idTokenResult)
//           // console.log(idTokenResult.claims)
//             user.admin = idTokenResult.claims.admin
//             editUI(user)
//         })
//     }
//     else {
//         console.log("There's nothing here!")
//     }
// })
  document.querySelector('.loadingtitle').innerHTML = "Data is processing - Please wait... ⌛"
  document.querySelector('.loadingtitle').style.fontWeight = "600"
  document.querySelector('.loadingtitle').style.color = "black"
    document.querySelector('.loadingtitle').style.marginLeft = "43%";
 auth.onAuthStateChanged(user => {
     if(user) {
      
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
  console.log( doc.data().userCompanyname)

  
db.collection('recycledproducts').where("productManufacturer", '==',  doc.data().userCompanyname).orderBy("createdAt").onSnapshot(snapshot => {
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
  
 })
})}
  })

const editUI = (user) => {
  if (user) {
    const userTitleCard = document.getElementById('usertitle')
     const notadminElement = document.querySelectorAll('.notadmin')
     
      
    if(user.productManu) {
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
    // firstcreation.innerHTML = "Since "  + firstcreationtime;
    // userDisplay.innerHTML = userDisplayName;
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


// const renderTest = doc => {
// //   console.log(doc)
// //   const tl = `
// //  <a class="mb-1 " id="usertest" > ${doc.data().productClass}</a>
// //   `
// //     usertest.insertAdjacentHTML('beforeend', tl);
// // }

// Create element and render users
// document.querySelector('.loadingtitle').innerHTML = "Data is loading - Please wait... ⌛"
//   document.querySelector('.loadingtitle').style.fontWeight = "600"
//   document.querySelector('.loadingtitle').style.color = "black"

const renderUser = doc => {
  
  //  console.log(doc.ref.path)
  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid #8080804d ;">
         <td >
   <div class="checkbox "  style="  display: inline-table;  width: 20px; height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" style="height: fit-content;">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
       <td><img style="max-width: 30px; max-height: 30px;" src="${doc.data().productImg}" alt="${doc.data().productName}"></td>
     <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().productCategory}</td>
      <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().productName}</td>
      <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().productMN}</td>
      <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().productWeight}</td>
        <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().registeredDate}</td>
             <td style="color: black;font-weight: 600; font-size: 13px;">${doc.data().memo}</td>


    <td >
  
    
 <nav class="navbary" style="background-color:  #219EBC; ">
	<a href="#" class="navbary__link"   ;>
		<span class=" btnpr-addPP"  id='${doc.id}' part-weight='${doc.data().productWeight}' product-name='${doc.data().productName}' ><i class="bx bx-plus" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label" style="background-color:  #219EBC">Add Parts</span>
	</a>
	<a href="#" class="navbary__link"  >
		<span class=" btnpr-edit" data-id="${doc.id}"><i class='bx bxs-edit-alt' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label" style="background-color:  #219EBC">Edit Product</span>
	</a>
	<a href="#" class="navbary__link"  >
		<span class=" viewbtn" data-toggle="modal" data-id='${doc.id}' data-PN='${doc.data().productName}'  prodWeight='${doc.data().productWeight}'data-target="#exampleModalScrollable"><i class='ri-file-chart-fill' style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label" style="background-color:  #219EBC">View Assessment</span>
	</a>
  	<a href="#" class="navbary__link"  >
		<span class=" btnpr-delete" ><i class='ri-delete-bin-line' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label" style="left: -50px; background-color:  #219EBC ;">Delete Product</span>
	</a>
</nav>
   
      </td>
    </tr>
  `;

  const prodTabledata = document.querySelector('.prodTabledata')
  prodTabledata.insertAdjacentHTML('afterbegin', tr);
  
   document.querySelector('.loadingtitle').style.display = "none"



closebtn.forEach((eachClose)=> {
  eachClose.addEventListener('click', () =>{
    addmodalyPartsSingle.classList.remove('modaly-show');
    addPPmodaly.classList.remove('modaly-show');
    addmodaly.classList.remove('modaly-show');
    editmodaly.classList.remove('modaly-show');
    
   })
})

const subsmodalclose = document.querySelector('#subsmodalclose')
subsmodalclose.onclick = function() {
document.querySelector('#addsubsproduct').classList.remove('show');
document.querySelector('#addsubsproduct').style.display = "none";
}

// Click on view product button to view assessment


  const viewassess = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewassess.onclick= function (e) {
    e.preventDefault()
  
    let dataPWeightRef = viewassess.getAttribute('data-id');
let dataPN = viewassess.getAttribute('data-PN');
let prodWeightRef = viewassess.getAttribute('prodWeight');
  db.collection("recycledproducts").doc(doc.id).collection('selectedParts').get().then((querySnapshot) => {
                 let partWeihtArr = []
                  querySnapshot.forEach((doc) => {
                      // console.log(doc.data())
                      partWeihtArr.push(parseFloat(doc.data().partWeight));
                  })
                    console.log(partWeihtArr)
                  const weightSum = partWeihtArr.reduce((partialSum, a) => partialSum + a, 0);
                  console.log(prodWeightRef, weightSum)
                if (weightSum == prodWeightRef) {
                  console.log(weightSum == prodWeightRef)
                  assess.classList.add('modaly-show');
                }
                else {
                      Swal.fire(`제품 평가 산출을 위해 부품 등록을 완료해주세요 <br />
                            <span style="font-size:13px">Current total parts weight: ${weightSum}</span> <br />
                                  <span style="font-size:13px"> Total product weight: ${prodWeightRef}</span>` , '', 'info')
                }
                })
console.log(dataPN)
   		var table = document.querySelector('.renderParts')
      var renderEN4555 = document.querySelector('.renderEN4555')
          let renderEN4555ToG = document.querySelector('.renderEN4555ToG')
              let renderEN4555ToPerc = document.querySelector('.renderEN4555ToPerc')
    table.innerHTML = "";
    renderEN4555.innerHTML = "";
     renderEN4555ToG.innerHTML = "";
          renderEN4555ToPerc.innerHTML = "";
    renderEN4557.innerHTML = " ";
    //  renderEN4555G.innerHTML = " ";
      // Get a reference from the dom to the tree elements
      const treeproducttitle = document.querySelector('.treeproducttitle')
      const productCategory = document.querySelectorAll('.productCategory')
      const productStatus = document.querySelectorAll('.productStatus')
      const productName = document.querySelectorAll('.productName')
      const productWeight = document.querySelectorAll('.productWeight')
      const registeredDate = document.querySelectorAll('.registeredDate')
      const productSizeAssess = document.querySelectorAll('.productSizeAssess')
      const productMNAssess = document.querySelectorAll('.productMNAssess')
     
    // inject data from firebase document to the tree element and display them
     id = doc.id;
     
     treeproducttitle.innerHTML = '자원효율성 평가 : ' + doc.data().productName
     productCategory.forEach((el)=>{
      el.value = doc.data().productCategory;
     })
      productName.forEach((el)=>{
      el.value = doc.data().productName;
     })
      productMNAssess.forEach((el)=>{
      el.value = doc.data().productMN;
     })
      productSizeAssess.forEach((el)=>{
      el.value = `${doc.data().prodWidth} x ${doc.data().prodHeight} x ${doc.data().prodDepth} (${doc.data().sizeUnit})`;
     })
      productWeight.forEach((el)=>{
      el.value = doc.data().productWeight;
     })
      registeredDate.forEach((el)=>{
      el.value = doc.data().registeredDate;
     })
      productStatus.forEach((el)=>{
      el.value = doc.data().productStatus;
     })

     
  var partsRef = db.collectionGroup('selectedSubs');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    // console.log(data)
  var obj = data;
    var newArray = obj.filter(function (el)
{
  return el.productRef == dataPN;
}
);
console.log(newArray)

    var numCrm = newArray.filter(function (el)
{
  return el.crm == "Y";
}
);
   console.log(numCrm)
  // Total CRM Weight (g)
  let numCrmArr = [...new Map(numCrm.map(v => [JSON.stringify([v.substanceName,v.partRef,v.casnumber,v.crm,v.materialNameRef,v.materialWeightgRef,v.partWeight,v.productRef,v.rohs,v.substanceMassPerc,v.substanceMassg]), v])).values()]
  console.log(numCrmArr)
const crmWeightSum = numCrmArr.reduce((accumulator, object) => {
  return accumulator + object.substanceMassg;
}, 0);
console.log(crmWeightSum)

  
     // CRM Weight (g)

const crmweightg = document.querySelectorAll('.crmweightg')
crmweightg.forEach((el)=> {
  el.innerHTML = crmWeightSum.toFixed(2)
})

     // CRM Weight (%)

const crmweightPerc = document.querySelectorAll('.crmweightPerc')
crmweightPerc.forEach((el)=> {
  el.innerHTML = (crmWeightSum / prodWeightRef * 100).toFixed(2)
})


  // Total Parts Weight with CRM (g)
const partscrmWeightSum = numCrm.reduce((accumulator, object) => {
  return accumulator + object.partWeight;
}, 0);
console.log(partscrmWeightSum)

let arrUniq = [...new Map(newArray.map(v => [JSON.stringify([v.substanceName,v.partRef,v.productRef,v.casnumber,v.crm,v.materialNameRef,v.materialWeightgRef,v.partWeight,v.rohs,v.substanceMassPerc,v.substanceMassg]), v])).values()]

console.log(arrUniq)
buildTable(arrUniq)
	function buildTable(arrUniq){

		for (var i = 0; i < arrUniq.length; i++){
			var row = `<tr>
          
							<td>${arrUniq[i].partRef}</td>
              <td>${arrUniq[i].partWeight}</td>
                <td>${arrUniq[i].materialNameRef}</td>
                    <td>${arrUniq[i].materialWeightgRef}</td>
							<td>${arrUniq[i].substanceName}</td>
							<td>${arrUniq[i].casnumber}</td>
              	<td>${arrUniq[i].substanceMassg}</td>
							<td>${arrUniq[i].substanceMassPerc}</td>
              	<td>${arrUniq[i].crm}</td>
                  
					  </tr>`
			table.innerHTML += row


		}
	}
  
  //filter table by alphabet
    var subsAssess, rows, switching, i, x, y, shouldSwitch;
   var subsAssess = document.querySelector(".subsAssess")
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = subsAssess.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  let optionsthreeref = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'No. of CRMs',
      y: 0
    }, {
      x: 'CRM Weight ',
      y: 0
    }]
  }]
  
}
  let optionsthree = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'No. of CRMs',
      y: numCrmArr.length
    }, {
      x: 'CRM Weight',
      y: crmWeightSum
    }]
  }]
}

let chartthreeref = new ApexCharts(chartsthree, optionsthreeref);
  let chartthree = new ApexCharts(chartsthree, optionsthree);
  chartsthree.innerHTML = ""
  chartthree.render();

})
 

// //TESTING OUT FUNCTION 
// var tableJSON = document.querySelector('.materialChart').tableToJSON()
// console.log(tableJSON);
//TESTING OUT FUNCTION



  var matRef = db.collectionGroup('selectedMaterials');
matRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    
    // console.log(data)
   
    var materialData = data.filter(function (el)
{
  return el.productRef === dataPN;
}
);
   console.log(materialData)

//       let partdata = query.docs.map(doc=>{
//         let x = doc.data().partRef
//             return x;
//     })
//        var partdataRef = partdata.filter(function (el)
// {
//   return el.productRef === dataPN;
// }
// );

//    console.log(partdataRef)
 
   let materialDataUniq = [...new Map(materialData.map(v => [JSON.stringify([v.materialGroup,v.materialMassPerc,v.materialMassg,v.materialName,v.materialRecycleContent,v.materialRecycleType,v.matnameSelect,v.partRef,v.partWeight,v.productRef,v.recovMat,v.recycMat,v.reuseMat]), v])).values()]

 

console.log(materialDataUniq)


buildTable(materialDataUniq)

	function buildTable(materialDataUniq){

   let energyrecovarr = []
    let energyrecovarrperc = []
    
    let sumenergyrecovmassG = energyrecovarr.reduce((partialSum, a) => partialSum + a, 0);
      console.log(sumenergyrecovmassG)
     let sumenergyrecovmassPerc = energyrecovarrperc.reduce((partialSumPer, b) => partialSumPer + b, 0);
      console.log(sumenergyrecovmassPerc)
		for (var i = 0; i < materialDataUniq.length; i++){
  
      let recycMat = parseFloat(materialDataUniq[i].recycMat)
      let reuseMat = parseFloat(materialDataUniq[i].reuseMat)
      let recovMat = parseFloat(materialDataUniq[i].recovMat)
      let materialMass = parseFloat(materialDataUniq[i].materialMassg)
      // let secondmaterialMass = parseFloat(secondMatarrUniq[i].materialMassg)
      let PartMass = parseFloat(materialDataUniq[i].partWeight)
         let recycleRate = parseFloat(materialDataUniq[i].materialRecycleContent)
      // Reuse Mass (g)
      let reuseMassgAssess = reuseMat * materialMass
        console.log(reuseMassgAssess)
           let prodWeightRefValue = viewassess.getAttribute('prodWeight');
      // Reuse Mass (%)
      let reuseMassPerAssess = reuseMassgAssess / prodWeightRefValue * 100
    
      // Recycle Mass (g),  Formula: material mass * Recycle factor
      let recycleMassgAssess = materialMass * recycMat 
      // Recycle Mass (%),  Formula: (material mass * Recycle factor) / Part Mass
   
      let recycleMassPercAssess = recycleMassgAssess  / materialMass * 100
      console.log(recycleMassPercAssess)
       //Recovery Mass (g),  Formula: material mass * Recovery factor
      let recovMassgAssess = materialMass * recovMat 
     //Recovery Mass (%),  Formula: (material mass * Recovery factor) / Part Mass
      let recovMassPercAssess = recovMassgAssess / materialMass * 100
      //  console.log(recovMassPercAssess.toFixed(2))
      // Disposable Mass (g), Formulat: Material total mass - Recovery mass 
      let disposabaleMassg = (materialMass - recovMassgAssess).toFixed(2)
      // Disposable Mass (%), Formula: (Material total mass - Recovery mass) / Material mass
      let disposabalePercMass = disposabaleMassg / materialMass * 100
      // Energy Recovery Mass (g), Formula: Recovery mass - Reuse mass - Recycling mass 
      let energyRecoMassgAssess = recovMassgAssess - reuseMassgAssess - recycleMassgAssess
     
      //Energy Recovery Mass (%), Formula: (Recovery mass - Reuse mass - Recycling mass ) / Material mass
      const energyRecoMassPercAssess = energyRecoMassgAssess / materialMass 
 console.log(energyRecoMassPercAssess)
      // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
    //  const RecycMatg = materialMass * recycleRate
        // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
    //  let RecycMatg = (recycMat * secondmaterialMass)
   let RecycMatPerc = (materialDataUniq[i].materialMassg * recycleRate / 100).toFixed(2)
      energyrecovarr.push(energyRecoMassgAssess)
      energyrecovarrperc.push(energyRecoMassPercAssess)
        //quantity  solution starts here
  
      // console.log(doc.data().quantity)
      		var row = `<tr>
              <td>${materialDataUniq[i].partRef}</td>
							<td class="toggleG " >${(PartMass).toFixed(2)}</td>
              <td>${materialDataUniq[i].materialName}</td>
              <td class="toggleG ">${materialMass.toFixed(2)}</td>
              <td class="toggleG ">${reuseMassgAssess.toFixed(2)}</td>
              <td class="togglePerc ">${reuseMassPerAssess.toFixed(2)}</td>
              <td class="toggleG  ">${recycleMassgAssess.toFixed(2)}</td>
              <td class="togglePerc ">${recycleMassPercAssess.toFixed(2)}</td>
              <td class="toggleG ">${recovMassgAssess.toFixed(2)}</td>
              <td class="togglePerc ">${recovMassPercAssess.toFixed(2)}</td>
              <td class="toggleG ">${parseFloat(disposabaleMassg).toFixed(2)}</td>
              <td class="togglePerc ">${disposabalePercMass.toFixed(2)}</td>
              <td class="toggleG ">${PartMass.toFixed(2)}</td>
              <td class="togglePerc ">100</td>
					  </tr>`

			renderEN4555.innerHTML += row
  
  
	

      		var row = `<tr>
              <td>${materialDataUniq[i].partRef}</td>
							<td>${PartMass.toFixed(2)}</td>
              <td>${materialDataUniq[i].materialName}</td>
              <td>${materialMass.toFixed(2)}</td>
              <td>${reuseMassgAssess.toFixed(2)}</td>
        
              <td>${recycleMassgAssess.toFixed(2)}</td>
              
              <td>${recovMassgAssess.toFixed(2)}</td>
          
              <td>${parseFloat(disposabaleMassg).toFixed(2)}</td>
          
              <td>${PartMass.toFixed(2)}</td>
        
					  </tr>`
  
			renderEN4555ToG.innerHTML += row

        		var row = `<tr>
              <td>${materialDataUniq[i].partRef}</td>
              <td>${materialDataUniq[i].materialName}</td>
              <td class="togglePerc ">${reuseMassPerAssess.toFixed(2)}</td>
              <td class="togglePerc ">${recycleMassPercAssess.toFixed(2)}</td>
              <td class="togglePerc ">${recovMassPercAssess.toFixed(2)}</td>
              <td class="togglePerc ">${disposabalePercMass.toFixed(2)}</td>
              <td class="togglePerc ">100</td>
					  </tr>`
			renderEN4555ToPerc.innerHTML += row

     

      var rowMat = `
         <tr> 
         <td>${materialDataUniq[i].materialGroup}</td>
         <td>${materialDataUniq[i].materialName}</td>
         <td>${materialDataUniq[i].materialMassg.toFixed(2)}</td>
         <td>${recycleRate.toFixed(2)} </td>
         <td>${parseFloat(RecycMatPerc).toFixed(2)} (g)</td>
               </tr>
      `
    
      	renderEN4557.innerHTML += rowMat
  


		}
 

  
  // Summary Energy Recov Weight (g)


const energyRecoveryWeightg = document.querySelector('.energyRecoveryWeightg')
  energyRecoveryWeightg.innerHTML = sumenergyrecovmassG
  const energyRecoveryWeightper = document.querySelector('.energyRecoveryWeightperc')
  energyRecoveryWeightper.innerHTML = sumenergyrecovmassPerc

	}

   })

.then(()=>{
      let matTable = document.querySelector('.materialChart')
      function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }

    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
        console.log(data, typeof(data))
    }       
 
           var resMap = new Map();
var result = [];
data.map((x) => {
    if (!resMap.has(x.materialgroup))
        resMap.set(x.materialgroup, parseFloat(x.recycledmaterialmass));
    else
        resMap.set(x.materialgroup, (parseFloat(x.recycledmaterialmass) + resMap.get(x.materialgroup)));
})
resMap.forEach((value, key) => {
    result.push({
        materialgroup: key,
        recycledmaterialmass: value
    })
})
console.log(result);

let materialNameValues = result.map(function (el) {
  return el.materialgroup
})
console.log(materialNameValues)

let recycledmaterialmassValues = result.map(function (el) {
  return el.recycledmaterialmass
})
console.log(recycledmaterialmassValues)
let nullVal = 0
let nullNameVal = []

     var optionsref = {
          series: [{
          data:  nullVal
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: nullNameVal,
        }
        };
     var optionstwo = {
          series: [{
          data:  recycledmaterialmassValues
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: materialNameValues,
        }
        };

let chartsecondref = new ApexCharts(chartsecond, optionsref);
  let chartssecond = new ApexCharts(chartsecond, optionstwo);
  chartsecond.innerHTML = " "
        chartssecond.render();
 
const summedrecyc = document.querySelector('.summedrecyc')
summedrecyc.innerHTML = ""

buildTable(result)
	function buildTable(result){

		for (var i = 0; i < result.length; i++){
			var recycarr = `<tr>
          
							<td>${result[i].materialgroup}</td>
              <td>${result[i].recycledmaterialmass.toFixed(2)}</td>
              <td>${(result[i].recycledmaterialmass / prodWeightRef * 100).toFixed(2)} </td>
                  
					  </tr>`
		summedrecyc.innerHTML += recycarr


		}
	}

}
JSON.stringify(tableToJson(matTable))




})

.then(()=>{
  //filter table by alphabet
    var sumAssess, rows, switching, i, x, y, shouldSwitch;
   var sumAssess = document.querySelector(".sumAssess")
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = sumAssess.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})

.then(()=>{
  //filter table by alphabet
    var materialChartFilter, rows, switching, i, x, y, shouldSwitch;
   var materialChartFilter = document.querySelector(".materialChart")
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = materialChartFilter.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
})


.then(()=>{
    var matRefChart = db.collectionGroup('selectedMaterials');
matRefChart
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })
    
    // console.log(data)
    var obj = data;
    var materialDataChart = obj.filter(function (el)
{
  return el.productRef == dataPN;
}
);
   console.log(materialDataChart)

  // Summary (not table) Disposable Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[10].innerHTML);
}
const sumDisposableWeightg = document.querySelectorAll('.disposalWeightg')
sumDisposableWeightg.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

  // Summary (not table) Disposable Weight (%)
 let DisposabalsumValPerc = sumVal / prodWeightRef * 100
const sumDisposableWeightPerc = document.querySelectorAll('.disposalWeightPerc')
sumDisposableWeightPerc.forEach((el)=> {
  el.innerHTML = DisposabalsumValPerc.toFixed(2)
})

  // Summary Reuse Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[4].innerHTML);
}
const sumReuseWeight = document.querySelectorAll('.sumReuseWeight')
sumReuseWeight.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

// Summary Reuse Weigth (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[4].innerHTML);
}
  let ReusesumValPerc = sumVal / prodWeightRef * 100
const sumReuseWeightPerc = document.querySelectorAll('.sumReuseWeightPerc')
sumReuseWeightPerc.forEach((el)=> {
  el.innerHTML = ReusesumValPerc.toFixed(2)
})

// Summary Recycling Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[6].innerHTML);
}
const sumRecycWeightg = document.querySelectorAll('.sumRecycWeightg')
sumRecycWeightg.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

// Summary Recycling Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[6].innerHTML);
}

let RecycSumValPerc = (sumVal / prodWeightRef) * 100
console.log(RecycSumValPerc)
const sumRecycWeightPerc = document.querySelectorAll('.sumRecycWeightPerc')
sumRecycWeightPerc.forEach((el)=> {
  el.innerHTML = RecycSumValPerc.toFixed(2)
})

// Summary Recovering Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[8].innerHTML);
}
const sumRecovWeightg = document.querySelectorAll('.sumRecovWeightg')
sumRecovWeightg.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

// Summary Recovering Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[8].innerHTML);
}
  let RecovSumValPerc = sumVal / prodWeightRef * 100
const sumRecovWeightPerc = document.querySelectorAll('.sumRecovWeightPerc')
sumRecovWeightPerc.forEach((el)=> {
  el.innerHTML = RecovSumValPerc.toFixed(2)
})

// Summary Total Weight (g)
  var sumAssess = document.querySelector(".sumAssess");
   let sumAssessUniq = [...new Map(materialDataChart.map(v => [JSON.stringify([v.partRef]), v])).values()]
   var sumAssesUniqTbl = sumAssessUniq.reduce(( sum, el ) => sum + el.partWeight, 0 );
   console.log(sumAssesUniqTbl)
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[12].innerHTML);
}
let sumTotalWeightg = document.querySelectorAll('.sumTotalWeightg')
sumTotalWeightg.forEach((el)=> {
  el.innerHTML = parseFloat(prodWeightRef).toFixed(2)
})

// Summary Total Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
 sumVal = materialDataChart.length
  console.log(sumVal)

sumTotalWeightPerc.forEach((el)=> {
  if (sumVal > 0) {
  el.innerHTML = "100";
  }
  else {
     el.innerHTML = "0";
  }
})
let chartReuseWeight = document.querySelector('.sumReuseWeight').textContent
let chartRecycWeight = document.querySelector('.sumRecycWeightg').textContent
let chartRecovWeight = document.querySelector('.sumRecovWeightg').textContent

   let optionsoneref = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'Reuse Weight(g)',
      y: 0
    }, {
      x: 'Recycled Weight(g)',
      y: 0
    }, {
      x: 'Recovery Weight(g)',
      y: 0
    }]
  }]
}

   let options = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

  //Chart for 1st assessement
  series: [{
    data: [{
      x: 'Reuse Mass(%)',
      y: parseFloat(sumReuseWeightPercChart.textContent )  
    }, {
      x: 'Recycled Mass(%)',
      y: parseFloat(sumRecycWeightPercChart.textContent )  
    }, {
      x: 'Recovery Mass(%)',
      y: parseFloat(sumRecovWeightPercChart.textContent )  
    }, {
      x: 'Disposable Mass(%)',
      y: parseFloat(disposalWeightPerc.textContent ) 
    }, {
      x: 'Energy Recovery Mass(%)',
      y: parseFloat(energyRecoveryWeightperc.textContent )
    }

  ]
  }]
}

let chartref = new ApexCharts(charts, optionsoneref);
  var chart = new ApexCharts(charts, options);
   charts.innerHTML = ""
        chart.render();
     


const materialChart = document.querySelector('.materialChart');
   // Recycled Material (%)
  
  sumVal = 0;
for (var i = 1; i < materialChart.rows.length; i++) {
  sumVal = sumVal + parseFloat(materialChart.rows[i].cells[2].innerHTML);

}
  let sumValPerc = sumVal / prodWeightRef * 100
const sumRecycWeightPer = document.querySelectorAll('.sumRecycWeightPer')
sumRecycWeightPer.forEach((el)=> {
  el.innerHTML = sumValPerc.toFixed(2)
})
     // Recycled Material (g)
  sumVal = 0;
for (var i = 1; i < materialChart.rows.length; i++) {
  sumVal = sumVal + parseFloat(materialChart.rows[i].cells[2].innerHTML);
}
const sumRecycWeight = document.querySelectorAll('.sumRecycWeight')
sumRecycWeight.forEach((el)=> {
  el.innerHTML = sumVal

const tableMatSummarry = document.querySelector('.tableMatSummarry')
let materialnum = tableMatSummarry.rows.length
   

})
})
})
 const convertG = document.querySelector('.convertG')
   const convertPerc = document.querySelector('.convertPerc')
      const convertAll = document.querySelector('.convertAll')
   const fulldata = document.querySelector('.fulldata')
   const convertedToGram = document.querySelector('.convertedToGram')
   const convertedToPerc = document.querySelector('.convertedToPerc')
 
 
//Convert Table to Gram
convertG.onclick = function(e) {
  e.preventDefault()
  convertedToGram.style.display = "table-cell"
    convertedToGram.style.height = "auto"
  fulldata.style.display = "none"
  convertedToPerc.style.display = "none"
  

}

convertPerc.onclick = function(e) {
  e.preventDefault()
  convertedToPerc.style.display = "table-cell"
    convertedToPerc.style.height = "auto"
  fulldata.style.display = "none"
  convertedToGram.style.display = "none"
}

convertAll.onclick = function(e) {
  e.preventDefault()
  fulldata.style.display = "inline-block"
    fulldata.style.height = "auto"
  convertedToPerc.style.display = "none"
  convertedToGram.style.display = "none"
}


  

}

  

//add parts tp specific product
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addPP`);
btnpraddParts.addEventListener('click', () => {
  addPPmodaly.classList.add('modaly-show');
  const addedpartslist = document.querySelector('.addedpartslist')
   const btnpraddRef = btnpraddParts.getAttribute('id');
    const btnpraddWeightRef = btnpraddParts.getAttribute('part-weight');
     const btnpraddNameRef = btnpraddParts.getAttribute('product-name');
    console.log(btnpraddWeightRef)
  addedpartslist.innerHTML = "";
  const setPPheader = document.querySelector('.setPPheader')
  const setPPheaderMat = document.querySelector('.setPPheaderMat')
   const setPPheaderSubs = document.querySelector('.setPPheaderSubs')
    const addPPheaderSubs = document.querySelector('.addPPheaderSubs')
  setPPheader.innerHTML = '부품등록 : ' + btnpraddNameRef
   setPPheaderMat.innerHTML = '소재목록 : ' + btnpraddNameRef
    setPPheaderSubs.innerHTML = '물질목록 : ' + btnpraddNameRef
       addPPheaderSubs.innerHTML = '물질추가 : ' + btnpraddNameRef
 console.log(btnpraddRef)

   auth.onAuthStateChanged(user => {

    if(user) {
      console.log(user.email)

        var addpartsRef = db.collectionGroup('recycledparts').where("authorizedUsers", "array-contains", `${user.email}`);
addpartsRef
.get()
 .then(query=>{
        let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
    })

    const matHashMap = {}
    data = data.filter((item, _)=>{
      let alreadyExists = matHashMap.hasOwnProperty(item.supplierName)
      return alreadyExists ? false: matHashMap[item.supplierName] = 1
    })
 
    // console.log(data)
   
    buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `
							<option>${data[i].supplierName}</option>
              
					  `
			supplierName.insertAdjacentHTML ("beforeend", row)


		}}
  })
  supplierName.addEventListener('change', ()=>{
   partname.innerHTML = "";

db.collection("recycledparts").where("supplierName", "==",supplierName.value).where("authorizedUsers", "array-contains", `${user.email}`).where("supplierName", "==",supplierName.value)
    .get()
    .then((querySnapshot) => {
          const to = `
      <option>Select an option</option>
  // `;
  partname.insertAdjacentHTML('beforeend', to);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().partName}">${doc.data().partName}</option>
  `;

   partname.insertAdjacentHTML('beforeend', tm)
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
 })

}})

//click on add new parts
const partname = document.querySelector('.partname');
const getPPdata = document.querySelector('.getPPdata')
getPPdata.onclick = function(e) {
 e.preventDefault()
  partSize.value = 0;
  partWeight.value = 0;



console.log(  typeof(btnpraddWeightRef))
  const partsRef = db.collection("recycledparts")
     partsRef.where("partName", "==", partname.value).where("supplierName", "==", supplierName.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const partWeightRef =  parseInt(doc.data().partWeight) * quantity.value;
           console.log(partWeightRef)
          console.log(partWeightRef < btnpraddWeightRef)
           if (partWeightRef <= btnpraddWeightRef) {
               partId.value = doc.id
             partname.value = doc.data().partName
          partSize.value = doc.data().partSize
          partWeight.value = parseInt(doc.data().partWeight)
          partRegisteredDate.value = doc.data().partRegisteredDate
          companyName.value = doc.data().partMemo
          supplierName.value = doc.data().supplierName
           const buttonaddParts = document.querySelector('.buttonaddParts')
      buttonaddParts.style.display = "block";
      
      } else {
            const buttonaddParts = document.querySelector('.buttonaddParts')
      buttonaddParts.style.display = "none";
       Swal.fire({
        
  icon: 'warning',
  title: '알림',

  html: `조회하신 부품 [${doc.data().partName} x ${quantity.value} (${partWeightRef} g)]이` + '<b> ' + `제품 중량(${btnpraddWeightRef} g) 을 초과했습니다. 다시 입력해주세요. `,
  footer: '<a href="" style="display: none;">Why do I have this issue?</a>'
})
      }
        });
    })
  
}

// Add Parts/Materials/Substances to a product
const buttonaddParts = document.querySelector('.buttonaddParts')
   addPart.onclick = function(e) {
  e.preventDefault();
   buttonaddParts.classList.add("active");
  // console.log(doc.id, " => ", doc.data());
  setTimeout(()=>{
       db.collection('recycledproducts').doc(btnpraddRef).get().then(()=>{
      let productRef = doc.data()
      console.log(productRef);
       db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partId.value).set({
   productRef: productRef.productName,
    partname: partname.value,
    supplierName: supplierName.value,
    partSize: partSize.value,
    partWeight: parseFloat(partWeight.value * quantity.value),
    partWeightRef: parseFloat(partWeight.value),
    partRegisteredDate: partRegisteredDate.value,
    partMemo: companyName.value,
    quantity: quantity.value,
     partCode: partCode.value,
    
  },{merge:true})
  db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            db.collection('recycledparts').where('partName', '==', doc.data().partname).get()
            .then((querySnapshot) => {
              
              let  partproductRef = doc.id 
              let partproductname = doc.data().partname
                 let partproductweight = doc.data().partWeight
                     let partproductweightRef = doc.data().partWeightRef
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(partproductRef)
                      db.collection("recycledparts").doc(doc.id).collection('materials').get().then((querySnapshot) => {
                 
                  querySnapshot.forEach((doc) => {
                           const matRef = doc.id
                             const matRefData = doc.data()
                    console.log(matRefData)
                    db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partproductRef).collection('selectedMaterials').doc(matRef).set({
                            productRef: productRef.productName,
                            partRef: partproductname,
                            partWeight: parseFloat(partproductweight ),
                            partWeightRef: parseFloat(partproductweightRef),
                            materialName: doc.data().materialName,
                            materialGroup:doc.data().materialGroup,
                            materialClassId: doc.data().materialClassId,
                            materialRecycleContent: doc.data().materialRecycleContent,
                            materialRecycleType: doc.data().materialRecycleType,
                            materialMassg:parseFloat(doc.data().materialMassg * quantity.value),
                            materialMassgRef:parseFloat(doc.data().materialMassg ),
                            materialMassPerc: parseFloat(doc.data().materialMassPerc),
                            recovMat: parseFloat(doc.data().recovMat),
                            recycMat: parseFloat(doc.data().recycMat),
                            reuseMat: parseFloat(doc.data().reuseMat),
                            matnameSelect: doc.data().matnameSelect,
                            selectiveMat: parseFloat(doc.data().selectiveMat)
                    }, {merge:true})
                    .then((docRef) => {
    db.collection("recycledparts").doc(partproductRef).collection('materials').doc(matRef).collection('substances').get()
    .then((querySnapshot)=>{
       querySnapshot.forEach((doc) => {
        const subRefIdProd = doc.id;
          let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}
let idref = guid()
        //  const matPPRef = docRef.id;
        //  console.log(doc.id, " => ", doc.data());
         db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').doc(partproductRef).collection('selectedMaterials').doc(`${matRef}`).collection('selectedSubs').doc(subRefIdProd).set({
            subProdid: idref,
            productRef: productRef.productName,
            partRef: partproductname,
            partWeight: parseFloat(partproductweight),
            partWeightRef: parseFloat(partproductweightRef),
            materialWeightgRef: parseFloat(matRefData.materialMassg),
            materialWeightgRef: parseFloat(matRefData.materialMassgRef),
            materialNameRef: matRefData.materialName,
            substanceName: doc.data().substanceName,
            casnumber: doc.data().casnumber,
            crm: doc.data().crm,
            rohs: doc.data().rohs,
            substanceMassg: parseFloat(doc.data().substanceMassg * quantity.value),
             substanceMassgRef: parseFloat(doc.data().substanceMassg),
            substanceMassPerc: parseFloat(doc.data().substanceMassPerc),
         }, {merge:true})
      
       })
    })
    .then(()=>{
      console.log("All substances were added")
     const addPPform=  document.querySelector('.addPPForm')
     addPPform.reset()
     
      buttonaddParts.style.display = "none";
    })
     .catch((error) => {
        console.log("Error getting documents: ", error);
    });
})

                  });
        
              });
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
     })
          

   buttonaddParts.classList.remove("active");
        buttonaddParts.querySelector("i").classList.replace( "bxs-edit", "bx-check-circle")
        buttonaddParts.querySelector("span").innerText = "Completed";
   setTimeout(()=>{
     buttonaddParts.classList.remove("active");
        buttonaddParts.querySelector("i").classList.replace( "bx-check-circle", "bxs-edit")
        buttonaddParts.querySelector("span").innerText = "부품 추가";
   }, 3500)
   

  }, 2000)
}

   const setupPartsProducts = (data) => {
    let html = '';
      const breadproductname = document.querySelector('.breadproductname')
          const breadbody = document.querySelector('.breadbody')
          breadbody.innerHTML = ""
          breadproductname.innerHTML = ""
    data.forEach(doc=> {
       const addedparts = doc.data();
          const breadbody = document.querySelector('.breadbody')
     
       breadproductname.innerHTML = doc.data().productRef
      console.log(addedparts)
      const pp = `
      <tr id='${doc.id}' data-Part='${doc.id}'>
  <td>
                                <div class="checkbox " style="  display: inline-table;  width: 15px;
    height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" style="height: 15px;
    width: 15px;">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
        <td  style="color: black; font-weight: 600;">${doc.data().partname}</td>
        <td style="color: black; font-weight: 600;">${doc.data().partCode}</td>
        <td style="color: black; font-weight: 600;">${doc.data().partWeight}</td>
        <td style="color: black; font-weight: 600;">${doc.data().partRegisteredDate}</td>
           <td style="color: black; font-weight: 600;"><input type="number" class="quantityPart" style=" border-radius:5px; border: 1px solid #ddd; text-align: center;" data-Part='${doc.id}' min="0" value="${doc.data().quantity}" placeholder="${doc.data().quantity}" name="" id=""></td>
        <td style="color: black; font-weight: 600;">${doc.data().partMemo}</td>

          <td>
  <nav class="navbary"  style="background-color:  #219EBC" ;>
 	<a href="#" class="navbary__link"  style="background-color:  #219EBC">
		<span class="viewpartmat"data-toggle="modal" data-target="#partproductmaterial" data-PN= '${doc.data().partname}' data-id='${doc.id}'><i class="ri-eye-line" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label" style="background-color:  #219EBC">View Materials</span>
	</a>
   
  	<a href="#" class="navbary__link"  style="background-color:  #219EBC">
		<span class="btnprodpartdelete" data-Part='${doc.id}' ><i class='ri-delete-bin-line' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label" style="background-color:  #219EBC">Delete Part</span>
	</a>
   
</nav>
   
      </td>
  
    </tr>
      `;
      html+=pp
       const bpart = `
       <li><span>${doc.data().partname}</span>
                              </li>
      `;
       
       breadbody.insertAdjacentHTML('beforeend', bpart)
    })

    addedpartslist.insertAdjacentHTML('beforeend', html)
  }
 db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').onSnapshot(snapshot => {
  addedpartslist.innerHTML = " "
  setupPartsProducts(snapshot.docs)




   var tableparts = document.querySelector(".addedpartslist"),
   sumVal = 0;
            for(var i = 0; i < tableparts.rows.length; i++)
            {
             sumVal = sumVal + parseFloat(tableparts.rows[i].cells[3].innerHTML);
            }
            console.log(sumVal);
   const setPPWeight = document.querySelector('.setPPWeight')
  setPPWeight.innerHTML = "Total Parts/Product Weight: " + sumVal.toFixed(2) + " / " + btnpraddWeightRef;

//!Edit Part specific to a product

   let quantityPart = document.querySelectorAll(".quantityPart");
     for (let i = 0; i < quantityPart.length; i++) {
 
 quantityPart[i].onchange = function() {
   let editData = quantityPart[i].getAttribute("data-part");
   db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).get()
     .then((doc) => {
        
          let partWeightRef = doc.data().partWeightRef
 db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).update({
    partWeight: partWeightRef * quantityPart[i].value,
    quantity: quantityPart[i].value
   })
   .then (()=>{
       db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).collection('selectedMaterials').get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("Parts edited!")
          let materialsWeightRefId = doc.id
          let materialMassgRef = doc.data().materialMassgRef
          let materialRecycleRate = doc.data().materialRecycleContentRef
          let materialMassGcalc = materialMassgRef * quantityPart[i].value
          let partMatWeightRef = partWeightRef * quantityPart[i].value
          db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).collection('selectedMaterials').doc(`${materialsWeightRefId}`).update({
            //todo continue here
            materialMassg: parseFloat(materialMassGcalc),
            materialMassPerc: parseFloat(materialMassGcalc / partMatWeightRef * 100).toFixed(2),
         
          }).then(()=>{
            console.log("Materials edited!")
              db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).collection('selectedMaterials').doc(`${materialsWeightRefId}`).collection('selectedSubs').get()
       .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
                let subsWeightRefId = doc.id
          let subsMassgRef = doc.data().substanceMassgRef
            db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${editData}`).collection('selectedMaterials').doc(`${materialsWeightRefId}`).collection('selectedSubs').doc(`${subsWeightRefId}`).update({
              substanceMassg: parseFloat(subsMassgRef * quantityPart[i].value)
            })
            .then(()=>{
              console.log("Subs edited!")
            })
            })
          })
          })
        })
      })
   })
        
     })
  
 }}


//delete part specific to a product
   let btnprodpartdelete = document.querySelectorAll(".btnprodpartdelete");
     for (let i = 0; i < btnprodpartdelete.length; i++) {
 
 btnprodpartdelete[i].onclick = function(event) {
  event.preventDefault()
      let deleteData = btnprodpartdelete[i].getAttribute("data-part");
console.log(deleteData)
   let path = db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${deleteData}`);
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
       let tr = document.getElementById(`${deleteData}`);
      tr.remove(tr);
      // materiallist.innerHTML = ""
       



    var deleteFn = firebase.functions().httpsCallable('recursiveDelete');
    deleteFn({ path: `${path.path}`})
        .then(function(result) {
            console.log('Hurray! Delete success: ' + JSON.stringify(result));
        })
            .then(()=>{
          
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
        })
        .catch(function(err) {
            console.log('Delete failed, see console,');
            console.log(err.message);
        });
    

  }
})
}
}


   const viewpartmat = document.querySelectorAll('.viewpartmat')
    for (let i = 0; i < viewpartmat.length; i++) {
 viewpartmat[i].addEventListener('click', ()=>{
   const partmatRef = viewpartmat[i].getAttribute('data-id');
   console.log(partmatRef)
    
    const setupMaterialUI = (data) => {
    let html = '';
    data.forEach(doc=> {
      const material = doc.data();
     
      console.log(material)
      const li = `
     <tr id='${doc.id}' data-id='${doc.id}'>
      <td>
                                <div class="checkbox" style="  display: inline-table;  width: 20px;
    height: 15px;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" style="height: 15px;
    width: 15px;">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
    <td>${doc.data().materialGroup}</td>
       <td>${doc.data().materialName}</td>
      <td>${doc.data().materialRecycleContent}</td>
      <td>${doc.data().materialRecycleType}</td>
      <td>${doc.data().materialMassg}</td>
        <td>${doc.data().materialMassPerc}</td>
     
 
         <td>
     <nav class="navbary"  style="background-color:  #219EBC ";>
	<a href="#" class="navbary__link"  style="background-color:  #219EBC">
		<span class=" viewmatsub" id="btnprview" data-toggle="modal" data-target="#partproductmaterialsubs"  data-id='${doc.id}'><i class="ri-eye-line" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label">View Substances</span>
	</a>

	<a href="#" class="navbary__link"  style="background-color:  #219EBC">
		<span class=" addProdmatsub"  data-toggle="modal" data-target="#addsubsproduct" mat-weight="${doc.data().materialMassg}" data-id='${doc.id}'><i class='bx bx-plus' style="color: white; font-size: 15px; left:-58px;"></i></span>
		<span class="navbary__label" style = "top: -46px;
    left: -50px;">Add New Substance</span>
	</a>

</nav>
   
      </td>
    </tr>
      
      `;
           html+=li
    //   const partmat = `
    //      <tr data-id="1" data-parent="0" data-level="1">
    //                              <td data-column="name">${doc.data().materialGroup}</td>
    //                           </tr>
    //                           <tr data-id="2" data-parent="2" data-level="2">
    //                              <td data-column="name">${doc.data().materialName}</td>
    //                           </tr>
    //   `
    //    const breadpartmat = document.querySelector('.breadpartmat')
    // breadpartmat.insertAdjacentHTML('beforeend', partmat)
    })
  
    document.querySelector('.materiallist').insertAdjacentHTML('beforeend', html)
  }
  
  db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').onSnapshot(snapshot => {
      document.querySelector('.materiallist').innerHTML = '';
    console.log(doc.data())
    setupMaterialUI(snapshot.docs)
          const addProdmatsub = document.querySelectorAll('.addProdmatsub')
    for (let i = 0; i < addProdmatsub.length; i++) {
    
 addProdmatsub[i].onclick= function(e){

  document.querySelector('#addsubsproduct').style.display = "block"
  const getprodsubstancetype = document.querySelector('.getprodsubstancetype')
   const getprodsubstancelist = document.querySelector('.getprodsubstancelist')
     let matWeightRef = addProdmatsub[i].getAttribute("mat-Weight");
      db.collection('warmdb').add({
      text: "get warm",})
 addsubstanceMassg.onchange = function(e){
  e.preventDefault()
  addsubstanceMassPerc.value = (addsubstanceMassg.value / parseFloat(matWeightRef) * 100).toFixed(2)
}
    getprodsubstancetype.addEventListener('change', (e)=>{
    e.preventDefault()
    getprodsubstancelist.innerHTML =""
         if (getprodsubstancetype.value == "crm") {
          console.log(getprodsubstancetype.value == "crm")
               console.log(getprodsubstancetype.value)
   db.collection("substances").where("crm","==", "Y")
    .get()
    .then((querySnapshot) => {
                const to = `
      <option>Select an option</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', to);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
             let subsname = doc.data().subtanceName;
            var length = 70;
var trimmedString = subsname.substring(0, length);
           const tm = `
   <option value="${doc.data().subtanceName}" style="width:50%;">${subsname}</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    }
    else  {
      console.log(getprodsubstancetype.value == "none")
      console.log(getprodsubstancetype.value)
         db.collection("substances")
    .get()
    .then((querySnapshot) => {
                const to = `
      <option >Select an option</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', to);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
             let subsname = doc.data().subtanceName;
            var length = 70;
var trimmedString = subsname.substring(0, length);
           const tm = `
   <option value="${subsname}" style="width:50%;">${trimmedString}...</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    }

 
  })

   getprodsubstancelist.onchange = function() {
    console.log("im firing up")
    console.log(getprodsubstancelist.value, getprodsubstancetype.value)
 db.collection("substances").where("subtanceName", "==", getprodsubstancelist.value).where(getprodsubstancetype.value, "==", "Y").get()
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

   const addmatsubRef = addProdmatsub[i].getAttribute('data-id');
   console.log(addmatsubRef)
           let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + s4() 
}
let idref = guid()
const addSubs = document.querySelector('#addSubs')
addSubs.onclick = function(e) {
  e.preventDefault()
     db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').doc(`${addmatsubRef}`).collection('selectedSubs').doc(idref).set({
      subProdid: idref,
    substanceName: getprodsubstancelist.value,
    casnumber: addcas.value,
    crm: addcrm.value,
    rohs: addrohs.value,
    substanceMassg: addsubstanceMassg.value,
    substanceMassPerc: addsubstanceMassPerc.value,
   }, {merge: true})
.then(()=>{

  Swal.fire('Saved!', '', 'success')
    const addSubsForm = document.querySelector('.addSubsForm')
    addSubsForm.reset()
  })
 
}
  }}


    const viewmatsub = document.querySelectorAll('.viewmatsub')
    for (let i = 0; i < viewmatsub.length; i++) {
    
    viewmatsub[i].addEventListener('click', ()=>{
  document.querySelector('.substancelist').innerHTML = ""
   const matsubRef = viewmatsub[i].getAttribute('data-id');
   console.log(matsubRef)
   db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').doc(`${matsubRef}`).collection('selectedSubs').get()
  //  .then((query)=>{
  //   const materialRef = query.doc.ref.path;
  //     console.log(materialRef)
  //  })
  
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

		for (var i = 0; i < arrUniq.length; i++){
			var row = `<tr  id= '${arrUniq[i].subProdid}' >
       <td>
                                <div class="checkbox d-inline-block" style="display: flex;
    align-items: center;justify-content: center;">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2" style="height: 15px;
    width: 15px;">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
							<td>${arrUniq[i].substanceName}</td>
              <td>${arrUniq[i].casnumber}</td>
                <td style="width: 15px;">${arrUniq[i].crm}</td>
                
							<td style="width: 15px;">${arrUniq[i].substanceMassg}</td>
							<td style="width: 15px;">${arrUniq[i].substanceMassPerc}</td>
              <td>



  <nav class="navbary"  style="background-color:  #219EBC ";>
	<a href="#" class="navbary__link" >
		<span class="btnprsubdelete"  data-id= '${arrUniq[i].subProdid}'><i class="ri-delete-bin-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label">Delete Substance</span>
	</a>
  </nav>
              </td>
             </tr>`
			document.querySelector('.substancelist').innerHTML += row
      // document.querySelector('.substancelist').insertAdjacentHTML('beforeend', html)


	}}
  })
  .then(()=>{
      let btnprsubdelete = document.querySelectorAll(".btnprsubdelete");
     for (let i = 0; i < btnprsubdelete.length; i++) {
 
 btnprsubdelete[i].onclick = function(event) {
  event.preventDefault()
  Swal.fire({
  title: `Do you want to Delete the Substance ?`,
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    let deleteData = btnprsubdelete[i].getAttribute("data-id");
console.log(deleteData)
   let tr = document.getElementById(`${deleteData}`);
      tr.remove(tr);
      db.collection('recycledproducts').doc(`${btnpraddRef}`).collection('selectedParts').doc(`${partmatRef}`).collection('selectedMaterials').doc(`${matsubRef}`).collection('selectedSubs').doc(deleteData).delete().then(() => {
          Swal.fire('Saved!', '', 'success')
      console.log('Document succesfully deleted!');
    })
 
    .catch(err => {
      console.log('Error removing document', err);
    });
  
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})

  }
}
  })
   
  })}
  })
  })}
  })
  })





  // Click edit user
  const btnprEdit = document.querySelector(`[data-id='${doc.id}'] .btnpr-edit`);
  btnprEdit.addEventListener('click', () => {
    editmodaly.classList.add('modaly-show');
    const editHeader = document.querySelector('.editheader')
    id = doc.id;
    editHeader.innerHTML = '제품정보수정 : ' + doc.data().productName
     editmodalyForm.productCategory.value = doc.data().productCategory;
    editmodalyForm.productName.value = doc.data().productName;
       editmodalyForm.editmodelName.value = doc.data().productMN;
    editmodalyForm.productWeight.value = doc.data().productWeight;
  
    editmodalyForm.editregisteredDate.value = doc.data().registeredDate;
    editmodalyForm.editproductStatus.value = doc.data().productStatus;
      editmodalyForm.editMemo.value = doc.data().memo;

         editmodalyForm.editprodWidth.value = doc.data().prodWidth;
     editmodalyForm.editprodDepth.value = doc.data().prodDepth;
    editmodalyForm.editprodHeight.value = doc.data().prodHeight;
     editmodalyForm.editselectUnit.value = doc.data().sizeUnit;
  });





  // Click delete user
  const btnprDelete = document.querySelector(`[data-id='${doc.id}'] .btnpr-delete`);
  btnprDelete.addEventListener('click', () => {
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
      db.collection('recycledproducts').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
    }).catch(err => {
      console.log('Error removing document', err);
    });
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
  
  });


}
 





// Click add user button
btnprAdd.addEventListener('click', () => {
  const setDate = document.querySelector('.setDate')
  let now = new Date()
    

            setDate.value =         now.getFullYear() + "/" + (now.getMonth() +1)  + "/" + now.getDate() + " - " +   now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  addmodaly.classList.add('modaly-show');
 addproductCategory.value = '';
  addproductName.value = '';
  addproductMN.value = '';
  addproductWeight.value = '';
  addproductStatus.value = '';
  addMemo.value = '';

auth.onAuthStateChanged(user => {

    if(user) {
    //  console.log("add: ", user.uid)    
 const userRef = db.collection('users').where('userID', '==', user.uid).get()

userRef.then((querySnapshot) => {
   querySnapshot.forEach((doc) => {
    console.log("add: ", doc.data().userCompanyname)
const productManufacturer = document.querySelector('#productManufacturer')
productManufacturer.value = doc.data().userCompanyname
   })})}})

var files = [];
document.querySelector(".files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    document.querySelector('.prodImgphld').innerHTML = files[i].name
  }
});
  addProduct.onclick = function(e){
  e.preventDefault();

  if (files.length != 0) {
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
                    console.log(url);



  // console.log(doc.id, " => ", doc.data());
   db.collection('recycledproducts').add({
    productManufacturer: productManufacturer.value,
    productCategory: addproductCategory.value,
    productName: addproductName.value,
    productMN: addproductMN.value,
    productWeight: addproductWeight.value,
    prodWidth: addprodWidth.value,
    prodDepth: addprodDepth.value,
    prodHeight: addprodHeight.value,
    sizeUnit: selectUnit.value,
    registeredDate: addregisteredDate.value,
    productStatus: addproductStatus.value,
    memo: addMemo.value,
    productImg: url,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()


  })
  
    Swal.fire(
  'Success!',
  'New product added successfully!',
  'success'
)
})
        }
      );
    }
  } else {
    db.collection('recycledproducts').add({
    productManufacturer: productManufacturer.value,
    productCategory: addproductCategory.value,
    productName: addproductName.value,
    productMN: addproductMN.value,
    productWeight: addproductWeight.value,
    prodWidth: addprodWidth.value,
    prodDepth: addprodDepth.value,
    prodHeight: addprodHeight.value,
    sizeUnit: selectUnit.value,
    registeredDate: addregisteredDate.value,
    productStatus: addproductStatus.value,
    memo: addMemo.value,
    productImg: 'https://firebasestorage.googleapis.com/v0/b/projectcrm-f4e5f.appspot.com/o/image%20(2).png?alt=media&token=44677c17-1b79-4b1b-82d6-8bd872254af8',
    createdAt: firebase.firestore.FieldValue.serverTimestamp()


  }).then(()=>{
      Swal.fire(
  'Success!',
  'A new product is added!',
  'success'
)
  })
    
  }


}
  
});

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

   if(e.target === addPPmodaly) {
    addPPmodaly.classList.remove('modaly-show');
  }
     if(e.target === assess) {
    assess.classList.remove('modaly-show');
  }

});


// // Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//   console.log(doc.data());
//   })
// });





// Click submit in add modaly
  const buttoni = document.querySelector(".buttoni");
 
// Click submit in edit modaly
const editFormProd = document.querySelector('.editFormProd')
var editfiles = [];
document.querySelector(".editfiles").addEventListener("change", function(e) {
  editfiles = e.target.files;
  for (let i = 0; i < editfiles.length; i++) {
    console.log(editfiles[i]);
    document.querySelector('.editprodImgphld').innerHTML = editfiles[i].name
  }
});

const updateProdImg = document.querySelector(".updateProdImg")
updateProdImg.onclick = function(e) {
  e.preventDefault()
  Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
   if (result.isConfirmed) {
     if (editfiles.length != 0) {
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



  // console.log(doc.id, " => ", doc.data());
   db.collection('recycledproducts').doc(id).update({

    productImg: url
  
  })
  
    Swal.fire(
  'Success!',
  'Product Image updated successfully!',
  'success'
)
})
        }
      );
    }
  } else {
        Swal.fire(
  'warning',
  'No file chosen!',
  'warning'
)}
	
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
}

editFormProd.addEventListener('click', e => {
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
 
  // console.log(doc.id, " => ", doc.data());
   db.collection('recycledproducts').doc(id).update({
    productCategory: editmodalyForm.productCategory.value,
    productMN: editmodalyForm.editmodelName.value,
    productWeight: editmodalyForm.productWeight.value,
    registeredDate: editmodalyForm.editregisteredDate.value,
   productStatus: editmodalyForm.editproductStatus.value,
   memo: editmodalyForm.editMemo.value,

     prodWidth:editprodWidth.value,
    prodDepth:editprodDepth.value,
    prodHeight:editprodHeight.value,
    sizeUnit:editselectUnit.value,
  })
	
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
  });



firebase.auth().onAuthStateChanged(user => {
  const userEmailCard = document.getElementById('useremailcard')
 
  userEmailCard.innerHTML = user.email;
  
})



  






// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
//   var productsRef = db.collectionGroup('recycledproducts');
// productsRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data().productWeight
         
//             return x;
//     })
  
//     // console.log(data)
//     const sum = data.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);
// // document.querySelector('.totalWeight').innerHTML = sum
// // document.querySelector('.totalWeightPerc').innerHTML = parseFloat((sum / 3000000)/100000000000)  .toFixed(2) + "%" 
// // console.log(sum); // 👉️ 65
// })

// .catch((error) => {
//     console.log("Error getting document:", error);
// });

// const fetchData = document.querySelector('.fetchData')
// fetchData.onclick = function(e){
//   e.preventDefault()
//     let prodTableTest = document.querySelector('.prodTabledata')
//       function tableToJson(table) {
//     var data = [];

//     // first row needs to be headers
//     var headers = [];
//     for (var i=0; i<table.rows[0].cells.length; i++) {
//         headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
//     }

//     // go through cells
   

//         var tableRow = table.rows[5];
//         var rowData = {};

//         for (var j=2; j<tableRow.cells.length -1 ; j++) {

//             rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

//         }

//         data.push(rowData);
//    console.log(data, typeof(data))
  
//   }
         
//     JSON.stringify(tableToJson(prodTableTest))
// }


// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
//   var partsRef = db.collectionGroup('recycledparts');
// partsRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
         
//             return x;
//     })
//     console.log(data.length)

// })



// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
//   var partsRef = db.collectionGroup('materials');
// partsRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
         
//             return x;
//     })
//     console.log(data.length)

// // document.querySelector('.nbrmaterials').innerHTML = data.length
// // document.querySelector('.nbrmaterialsperc').innerHTML = parseFloat((data.length / 70) * 100 ).toFixed(2) + "%" 

// })

// .catch((error) => {
//     console.log("Error getting document:", error);
// });










 
  




  
    



  partname.addEventListener('change', (e)=>{
    e.preventDefault()
  partCode.innerHTML = "";
db.collection("recycledparts").where("partName", "==", partname.value)
    .get()
    .then((querySnapshot) => {
          const to = `
      <option>Select an option</option>
  // `;
  partCode.insertAdjacentHTML('beforeend', to);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
           const tm = `
      <option value="${doc.data().partCode}">${doc.data().partCode}</option>
  `;
partCode.insertAdjacentHTML('beforeend', tm);
 
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  })