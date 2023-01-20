
import loadingSkel from './components/products/js/loadingSkelt.js'
import loadProdTable from './components/products/js/loadProdTable.js'





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
// modaly add
const addmodaly = document.querySelector('.add-modaly');
const addmodalyPartsSingle = document.querySelector('.addPartmodaly');
const disposalWeightPerc = document.querySelector('.disposalWeightPerc')
const sumRecovWeightPercChart = document.querySelector('.sumRecovWeightPerc')
const sumReuseWeightPercChart = document.querySelector('.sumReuseWeightPerc')
const sumRecycWeightPercChart = document.querySelector('.sumRecycWeightPerc')
const energyRecoveryWeightperc = document.querySelector('.energyRecoveryWeightperc')
const closebtn = document.querySelectorAll('.action-button-close')
const addPPmodaly = document.querySelector('.addPPmodaly')
let assess = document.querySelector('.assess')

let addcas = document.querySelector('.addcas')
let addcrm = document.querySelector('.addcrm')
let addrohs = document.querySelector('.addrohs')
let addsubstanceMassg = document.querySelector('.addsubstanceMassg')
let addsubstanceMassPerc = document.querySelector('.addsubstanceMassPerc')
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

// modaly view
const viewmodaly = document.querySelector('.view-modaly');
const addPart = document.querySelector('.addPart')

//parts references 

const partname = document.querySelector('#partname')
let quantity = document.querySelector('.quantity')
const partCode = document.querySelector('#partCode')
const partSize = document.querySelector('#partSize')
const partWeight = document.querySelector('#partWeight')
const partRegisteredDate = document.querySelector('#partRegisteredDate')
const companyName = document.querySelector('#companyName')
const partId = document.querySelector('#partId')
const supplierName = document.querySelector('.supplierName')
const renderEN4557 = document.querySelector('.renderEN4557')
const sumTotalWeightPerc = document.querySelectorAll('.sumTotalWeightPerc')
const prodTabledata = document.querySelector('.prodTabledata')
let id;


  document.querySelector('.loadingtitle').innerHTML = "Data is processing - Please wait... ⌛"
  document.querySelector('.loadingtitle').style.fontWeight = "600"
  document.querySelector('.loadingtitle').style.color = "black"
    document.querySelector('.loadingtitle').style.marginLeft = "43%";
 

/** Script for the skeleton loading */
loadingSkel()
/** End of Script for the skeleton loading */

/** Load Products Table */
loadProdTable()
/**End of Load Products Table */



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

// Click add user button
btnprAdd.addEventListener('click', () => {
  const setDate = document.querySelector('.setDate')
  let now = new Date()
    

            setDate.value =  now.getFullYear() + "/" + (now.getMonth() +1)  + "/" + now.getDate() + " - " +   now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
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