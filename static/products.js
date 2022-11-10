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

console.log("helllo branch v2!!")

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
const renderUser = doc => {

  const tr = `
    <tr data-id='${doc.id}' style="  border-bottom: 0.5px solid grey;">
         <td>
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
       <td><img style="max-width: 70px; max-height: 70px;" src="${doc.data().productImg}" alt="${doc.data().productName}"></td>
     <td>${doc.data().productCategory}</td>
      <td>${doc.data().productName}</td>
      <td>${doc.data().productMN}</td>
      <td>${doc.data().productWeight}</td>
      <td>${doc.data().prodWidth} x ${doc.data().prodHeight} x ${doc.data().prodDepth} (${doc.data().sizeUnit})</td>
        <td>${doc.data().registeredDate}</td>
           <td>${doc.data().productStatus}</td>
             <td>${doc.data().memo}</td>


    <td>
  
    
 <nav class="navbary" style="margin: 30px;  background-color:  #8ecae6 ;">
	<a href="#" class="navbary__link"  style="background-color:  #8ecae6" ;>
		<span class=" btnpr-addPP"  id='${doc.id}' part-weight='${doc.data().productWeight}'><i class="bx bx-plus" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label">Add Parts</span>
	</a>
	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class=" btnpr-edit" data-id="${doc.id}"><i class='bx bxs-edit-alt' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label">Edit Product</span>
	</a>
	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class=" viewbtn" data-toggle="modal" data-id='${doc.id}' data-PN='${doc.data().productName}'  prodWeight='${doc.data().productWeight}'data-target="#exampleModalScrollable"><i class='ri-file-chart-fill' style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label">View Assessment</span>
	</a>
  	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class=" btnpr-delete" ><i class='ri-delete-bin-line' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label" style="left: -50px;">Delete Product</span>
	</a>
</nav>
   
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
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
}

// Click on view product button to view assessment


  const viewassess = document.querySelector(`[data-id='${doc.id}'] .viewbtn`);
  viewassess.onclick= function (e) {
    e.preventDefault()
let dataPN = viewassess.getAttribute('data-PN');
let prodWeightRef = viewassess.getAttribute('prodWeight');
console.log(dataPN)
   		var table = document.querySelector('.renderParts')
      var renderEN4555 = document.querySelector('.renderEN4555')
    table.innerHTML = "";
    renderEN4555.innerHTML = "";
    renderEN4557.innerHTML = " ";
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
     
     treeproducttitle.innerHTML = 'View ' + doc.data().productName
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
  el.innerHTML = crmWeightSum
})

     // CRM Weight (%)

const crmweightPerc = document.querySelectorAll('.crmweightPerc')
crmweightPerc.forEach((el)=> {
  el.innerHTML = (crmWeightSum / 2500 * 100).toFixed(2)
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
                	<td>${arrUniq[i].rohs}</td>
                  
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
      x: 'CRM Weight',
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
   let materialDataUniq = [...new Map(materialData.map(v => [JSON.stringify([v.materialGroup,v.materialMassPerc,v.materialMassg,v.materialName,v.materialRecycleContent,v.materialRecycleType,v.matnameSelect,v.partRef,v.partWeight,v.productRef,v.recovMat,v.recycMat,v.reuseMat]), v])).values()]

console.log(materialDataUniq)
let secondMatarrUniq = [...new Map(materialData.map(v => [JSON.stringify([v.materialGroup,v.materialName,v.materialMassg]), v])).values()]
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
      let secondmaterialMass = parseFloat(secondMatarrUniq[i].materialMassg)
      let PartMass = parseFloat(materialDataUniq[i].partWeight)
         let recycleRate = parseFloat(secondMatarrUniq[i].materialRecycleContent)
      // Reuse Mass (g)
      let reuseMassgAssess = reuseMat * materialMass
        console.log(reuseMassgAssess)
      // Reuse Mass (%)
      let reuseMassPerAssess = reuseMassgAssess / PartMass
    
      // Recycle Mass (g),  Formula: material mass * Recycle factor
      let recycleMassgAssess = materialMass * recycMat
      // Recycle Mass (%),  Formula: (material mass * Recycle factor) / Part Mass
      let recycleMassPercAssess = recycleMassgAssess  / PartMass
       //Recovery Mass (g),  Formula: material mass * Recovery factor
      let recovMassgAssess = materialMass * recovMat 
     //Recovery Mass (%),  Formula: (material mass * Recovery factor) / Part Mass
      let recovMassPercAssess = recovMassgAssess / PartMass
      //  console.log(recovMassPercAssess.toFixed(2))
      // Disposable Mass (g), Formulat: Material total mass - Recovery mass 
      let disposabaleMassg = (materialMass - recovMassgAssess).toFixed(2)
      // Disposable Mass (%), Formula: (Material total mass - Recovery mass) / Material mass
      let disposabalePercMass = disposabaleMassg / materialMass
      // Energy Recovery Mass (g), Formula: Recovery mass - Reuse mass - Recycling mass 
      let energyRecoMassgAssess = recovMassgAssess - reuseMassgAssess - recycleMassgAssess
     
      //Energy Recovery Mass (%), Formula: (Recovery mass - Reuse mass - Recycling mass ) / Material mass
      const energyRecoMassPercAssess = energyRecoMassgAssess / materialMass 
 console.log(energyRecoMassPercAssess)
      // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
    //  const RecycMatg = materialMass * recycleRate
        // Recycled Material Mass (g), Formula: PartA's material mass * Recycled rate
     let RecycMatg = (recycMat * secondmaterialMass)
   let RecycMatPerc = (RecycMatg * PartMass / 100).toFixed(2)
      energyrecovarr.push(energyRecoMassgAssess)
      energyrecovarrperc.push(energyRecoMassPercAssess)
			var row = `<tr>
              <td>${materialDataUniq[i].partRef}</td>
							<td>${PartMass}</td>
              <td>${materialDataUniq[i].materialName}</td>
              <td>${materialMass}</td>
              <td>${reuseMassgAssess}</td>
              <td>${reuseMassPerAssess.toFixed(2)}</td>
              <td>${recycleMassgAssess}</td>
              <td>${recycleMassPercAssess.toFixed(2)}</td>
              <td>${recovMassgAssess}</td>
              <td>${recovMassPercAssess.toFixed(2)}</td>
              <td>${disposabaleMassg}</td>
              <td>${disposabalePercMass.toFixed(2)}</td>
              <td>${PartMass}</td>
              <td>100</td>
					  </tr>`

			renderEN4555.innerHTML += row

     

      var rowMat = `
         <tr> 
         <td>${secondMatarrUniq[i].materialGroup}</td>
         <td>${secondMatarrUniq[i].materialName}</td>
         <td>${secondMatarrUniq[i].materialMassg}</td>
         <td>${recycleRate}</td>
         <td>${RecycMatg}</td>
             <td>${RecycMatPerc}</td>
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
  el.innerHTML = sumVal
})

  // Summary (not table) Disposable Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[11].innerHTML);
}
const sumDisposableWeightPerc = document.querySelectorAll('.disposalWeightPerc')
sumDisposableWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal
})

  // Summary Reuse Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[4].innerHTML);
}
const sumReuseWeight = document.querySelectorAll('.sumReuseWeight')
sumReuseWeight.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Reuse Weigth (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[5].innerHTML);
}
const sumReuseWeightPerc = document.querySelectorAll('.sumReuseWeightPerc')
sumReuseWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

// Summary Recycling Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[6].innerHTML);
}
const sumRecycWeightg = document.querySelectorAll('.sumRecycWeightg')
sumRecycWeightg.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recycling Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[7].innerHTML);
}
const sumRecycWeightPerc = document.querySelectorAll('.sumRecycWeightPerc')
sumRecycWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
})

// Summary Recovering Weight (g)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[8].innerHTML);
}
const sumRecovWeightg = document.querySelectorAll('.sumRecovWeightg')
sumRecovWeightg.forEach((el)=> {
  el.innerHTML = sumVal
})

// Summary Recovering Weight (%)
  var sumAssess = document.querySelector(".sumAssess"),
  sumVal = 0;
for (var i = 1; i < sumAssess.rows.length; i++) {
  sumVal = sumVal + parseFloat(sumAssess.rows[i].cells[9].innerHTML);
}
const sumRecovWeightPerc = document.querySelectorAll('.sumRecovWeightPerc')
sumRecovWeightPerc.forEach((el)=> {
  el.innerHTML = sumVal.toFixed(2)
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
  el.innerHTML = prodWeightRef
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
      x: 'Reuse Weight(%)',
      y: parseFloat(sumReuseWeightPercChart.textContent )  
    }, {
      x: 'Recycled Weight(%)',
      y: parseFloat(sumRecycWeightPercChart.textContent )  
    }, {
      x: 'Recovery Weight(%)',
      y: parseFloat(sumRecovWeightPercChart.textContent )  
    }, {
      x: 'Disposable Weight(%)',
      y: parseFloat(disposalWeightPerc.textContent ) 
    }, {
      x: 'Energy Recovery Weight(%)',
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


let materialnum = materialChart.rows.length
   let optionsref = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

 //Chart for 2nd assessement
series: [{
  data: [{
    x: 'No. of Recycled Materials',
    y: 0
  }, {
    x: 'Recycled Material(%)',
    y: 0
  }]
}]


}
   let optionstwo = {
  chart: {
    type: 'bar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },

 //Chart for 2nd assessement
series: [{
  data: [{
    x: 'No. of Recycled Materials',
    y: materialnum - 1
  }, {
    x: 'Recycled Material(%)',
    y: parseFloat(sumRecycWeightPerChart.textContent)
  }]
}]
}

let chartsecondref = new ApexCharts(chartsecond, optionsref);
  let chartssecond = new ApexCharts(chartsecond, optionstwo);
  chartsecond.innerHTML = " "
        chartssecond.render();

})
})
})

}

//add parts tp specific product
 const btnpraddParts = document.querySelector(`[data-id='${doc.id}'] .btnpr-addPP`);
btnpraddParts.addEventListener('click', () => {
 
 
  addPPmodaly.classList.add('modaly-show');
  const addedpartslist = document.querySelector('.addedpartslist')
   const btnpraddRef = btnpraddParts.getAttribute('id');
    const btnpraddWeightRef = btnpraddParts.getAttribute('part-weight');
    console.log(btnpraddWeightRef)
  addedpartslist.innerHTML = "";
 console.log(btnpraddRef)




//click on add new parts
const partname = document.querySelector('.partname');
const getPPdata = document.querySelector('.getPPdata')
getPPdata.onclick = function(e) {
 e.preventDefault()
  partSize.value = 0;
  partWeight.value = 0;

//     var tablepartsRef = document.querySelector(".table-parts"),
//   sumPartsWeight = 0;
// for (var i = 1; i < tablepartsRef.rows.length; i++) {
//   sumPartsWeight = sumPartsWeight + parseFloat(tablepartsRef.rows[i].cells[3].innerHTML);
// }

// console.log(sumPartsWeight)

console.log(  typeof(btnpraddWeightRef))
  const partsRef = db.collection("recycledparts")
     partsRef.where("partName", "==", partname.value).where("supplierName", "==", supplierName.value)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const partWeightRef =  parseInt(doc.data().partWeight) * quantity.value;
     
           console.log(partWeightRef)
          console.log(partWeightRef < btnpraddWeightRef)
           if (partWeightRef < btnpraddWeightRef) {
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
        
  icon: 'error',
  title: 'Warning!',
  text: `The selected part weight  ${quantity.value} x ${doc.data().partName} (${partWeightRef} g) can't exceed the product weight. (${btnpraddWeightRef} g) `,
  footer: '<a href="">Why do I have this issue?</a>',
  keydownListenerCapture:true
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
    partWeight: parseFloat(partWeight.value),
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
                            partWeight: parseFloat(partproductweight),
                            materialName: doc.data().materialName,
                            materialGroup:doc.data().materialGroup,
                            materialClassId: doc.data().materialClassId,
                            materialRecycleContent: doc.data().materialRecycleContent,
                            materialRecycleType: doc.data().materialRecycleType,
                            materialMassg:parseFloat(doc.data().materialMassg),
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
            materialWeightgRef: parseFloat(matRefData.materialMassg),
            materialNameRef: matRefData.materialName,
            substanceName: doc.data().substanceName,
            casnumber: doc.data().casnumber,
            crm: doc.data().crm,
            rohs: doc.data().rohs,
            substanceMassg: parseFloat(doc.data().substanceMassg),
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
        buttonaddParts.querySelector("span").innerText = "Add Part to Product";
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
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
        <td>${doc.data().partname}</td>
        <td>${doc.data().partCode}</td>
        <td>${doc.data().partWeight}</td>
        <td>${doc.data().partSize}</td>
        <td>${doc.data().partRegisteredDate}</td>
           <td>${doc.data().quantity}</td>
        <td>${doc.data().partMemo}</td>

          <td>
  <nav class="navbary"  style="background-color:  #8ecae6 ;>

  	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class="btnprodpartdelete" data-Part='${doc.id}' ><i class='ri-delete-bin-line' style="color: white; font-size: 15px;" ></i></span>
		<span class="navbary__label">Delete Part</span>
	</a>
    	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class="viewpartmat"data-toggle="modal" data-target="#partproductmaterial" data-PN= '${doc.data().partname}' data-id='${doc.id}'><i class="ri-eye-line" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label">View Materials</span>
	</a>
</nav>
   
      </td>
  
    </tr>
      `;
      html+=pp
       const bpart = `
       <tr data-id="1" data-parent="0" data-level="1">
        <td data-column="name">${doc.data().partname}</td>
         </tr>
      `;
       
       breadbody.insertAdjacentHTML('beforeend', bpart)
    })

    addedpartslist.insertAdjacentHTML('beforeend', html)
  }
 db.collection('recycledproducts').doc(btnpraddRef).collection('selectedParts').onSnapshot(snapshot => {
  addedpartslist.innerHTML = " "
  setupPartsProducts(snapshot.docs)

//delete material specific to a part
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
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
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
     <nav class="navbary"  style="background-color:  #8ecae6 ;>
	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class=" viewmatsub" id="btnprview" data-toggle="modal" data-target="#partproductmaterialsubs"  data-id='${doc.id}'><i class="ri-eye-line" style="color: white; font-size: 15px;"></i></span>
		<span class="navbary__label">View Substances</span>
	</a>

	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
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
    
 addProdmatsub[i].addEventListener('click', ()=>{
  const getprodsubstancetype = document.querySelector('.getprodsubstancetype')
   const getprodsubstancelist = document.querySelector('.getprodsubstancelist')
     let matWeightRef = addProdmatsub[i].getAttribute("mat-Weight");
 addsubstanceMassg.onchange = function(e){
  e.preventDefault()
  addsubstanceMassPerc.value = (addsubstanceMassg.value / parseFloat(matWeightRef) * 100).toFixed(2)
}
    getprodsubstancetype.addEventListener('change', (e)=>{
    e.preventDefault()
    getprodsubstancelist.innerHTML =""
    db.collection("substances").where(getprodsubstancetype.value,"==", "Y")
    .get()
    .then((querySnapshot) => {
                const to = `
      <option>Select an option</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', to);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
           const tm = `
      <option>${doc.data().subtanceName}</option>
  // `;
  getprodsubstancelist.insertAdjacentHTML('beforeend', tm);
  // editmodalyForm.editsubstancelist.insertAdjacentHTML('beforeend', tm);
 
        });
    })
  })

   getprodsubstancelist.addEventListener('change', ()=> {
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
      })

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
const idref = guid()
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
    // let data = query.docs.map(doc=>{
    //     let x = doc.data()
    //         return x;
    // })
    // console.log(data)
    alert('New substance Added Successfully!')
    const addSubsForm = document.querySelector('.addSubsForm')
    addSubsForm.reset()
  })
  e.stopPropagation()
}
  })}


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
                                <div class="checkbox d-inline-block">
                                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                                    <label for="checkbox2" class="mb-0"></label>
                                </div>
                            </td>
							<td>${arrUniq[i].substanceName}</td>
              <td>${arrUniq[i].casnumber}</td>
                <td>${arrUniq[i].crm}</td>
                    <td>${arrUniq[i].rohs}</td>
							<td>${arrUniq[i].substanceMassg}</td>
							<td>${arrUniq[i].substanceMassPerc}</td>
              <td>



  <nav class="navbary"  style="background-color:  #8ecae6 ;>
	<a href="#" class="navbary__link"  style="background-color:  #8ecae6">
		<span class="btnprsubdelete"  data-id= '${arrUniq[i].subProdid}'><i class="ri-delete-bin-line" style="color: white; font-size: 15px; "></i></span>
		<span class="navbary__label">Delete Substance</span>
	</a>
              </td>
             </tr>`
			document.querySelector('.substancelist').innerHTML += row
      // document.querySelector('.substancelist').insertAdjacentHTML('beforeend', html)


	}}
  })
  .then(()=>{
      let btnprsubdelete = document.querySelectorAll(".btnprsubdelete");
     for (let i = 0; i < btnprsubdelete.length; i++) {
 
 btnprsubdelete[i].addEventListener('click', (event) => {
  event.preventDefault()
  Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
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
      
    event.stopPropagation();

  })
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
    editHeader.innerHTML = 'Edit ' + doc.data().productName
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
  addmodaly.classList.add('modaly-show');
 addproductCategory.value = '';
  addproductName.value = '';
  addproductMN.value = '';
  addproductWeight.value = '';
   addregisteredDate.value = '';
  addproductStatus.value = '';
  addMemo.value = '';


  
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

});


// // Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//   console.log(doc.data());
//   })
// });

// Real time listener
db.collection('recycledproducts').onSnapshot(snapshot => {
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


  // btnpDelete.addEventListener('click', () => {
    
  //   console.log("hello world!")
  
  
  // });
var files = [];
document.querySelector(".files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
    document.querySelector('.prodImgphld').innerHTML = files[i].name
  }
});
  addProduct.addEventListener('click', (e) => {
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
    productImg: url
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
        Swal.fire(
  'warning',
  'No file chosen!',
  'warning'
)
    
  }


})

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
    productCategory: editmodalyForm.productCategory.value,
    productMN: editmodalyForm.editmodelName.value,
    productWeight: editmodalyForm.productWeight.value,
    registeredDate: editmodalyForm.editregisteredDate.value,
   productStatus: editmodalyForm.editproductStatus.value,
   memo: editmodalyForm.editMemo.value,
    productImg: url,
     prodWidth:editprodWidth.value,
    prodDepth:editprodDepth.value,
    prodHeight:editprodHeight.value,
    sizeUnit:editselectUnit.value,
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
        Swal.fire(
  'warning',
  'No file chosen!',
  'warning'
)}
	
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
  });



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
const multiParts = document.querySelector('.multiParts')


  






// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var productsRef = db.collectionGroup('recycledproducts');
productsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data().productWeight
         
            return x;
    })
  
    console.log(data)
    const sum = data.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);
// document.querySelector('.totalWeight').innerHTML = sum
// document.querySelector('.totalWeightPerc').innerHTML = parseFloat((sum / 3000000)/100000000000)  .toFixed(2) + "%" 
// console.log(sum); // 👉️ 65
})

.catch((error) => {
    console.log("Error getting document:", error);
});



// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var partsRef = db.collectionGroup('recycledparts');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data.length)

// document.querySelector('.nbrparts').innerHTML = data.length
// document.querySelector('.totalWeightPerc').innerHTML = (sum / 30000) * 100 + "%" 

})



// get all data in json array: 
//  var productsRef = db.collectionGroup('selectedproducts');
  var partsRef = db.collectionGroup('materials');
partsRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
         
            return x;
    })
    console.log(data.length)

// document.querySelector('.nbrmaterials').innerHTML = data.length
// document.querySelector('.nbrmaterialsperc').innerHTML = parseFloat((data.length / 70) * 100 ).toFixed(2) + "%" 

})

.catch((error) => {
    console.log("Error getting document:", error);
});


//   var addpartsRef = db.collectionGroup('recycledparts');
// addpartsRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
//             return x;
//     })
//      let dataPartWeight = query.docs.map(doc=>{
//         let x = doc.data().substanceMassg

         
//             return x;
//     })
  
//     console.log(data)
//   })

// buildTable(newArray)
// 	function buildTable(newArray){

// 		for (var i = 0; i < newArray.length; i++){
// 			var row = `<tr>
// 							<td>${newArray[i].partRef}</td>
//               <td>${newArray[i].partWeight}</td>
//                 <td>${newArray[i].materialNameRef}</td>
//                     <td>${newArray[i].materialWeightgRef}</td>
// 							<td>${newArray[i].substanceName}</td>
// 							<td>${newArray[i].casnumber}</td>
//               	<td>${newArray[i].substanceMassg}</td>
// 							<td>${newArray[i].substanceMassPerc}</td>
//               	<td>${newArray[i].crm}</td>
//                 	<td>${newArray[i].rohs}</td>
// 					  </tr>`
// 			table.innerHTML += row


// 		}
// 	}

  var addpartsRef = db.collectionGroup('recycledparts');
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
    console.log(data)
   
    buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `
							<option>${data[i].supplierName}</option>
              
					  `
			supplierName.insertAdjacentHTML ("beforeend", row)


		}}
  })


      
// db.collection("recycledparts")
//     .get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//            const tm = `
//       <option value="${doc.data().supplierName}">${doc.data().supplierName}</option>
//   `;

//    supplierName.innerHTML += tm;
 
//         });
//     })


 supplierName.addEventListener('change', ()=>{
   partname.innerHTML = "";
db.collection("recycledparts").where("supplierName", "==", supplierName.value)
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
