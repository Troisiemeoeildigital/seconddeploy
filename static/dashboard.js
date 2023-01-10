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


//  auth.onAuthStateChanged(user => {
//      if(user) {
      
//  const userRef = db.collection('users').where('userID', '==', user.uid).get()

// userRef.then((querySnapshot) => {
//  querySnapshot.forEach((doc) => {
//   console.log( doc.data().userCompanyname)

    
//   //   console.log('hey')
//   //   document.querySelector('.loadingtitle').innerHTML = "Data is loading - Please wait... ⌛"
//   // document.querySelector('.loadingtitle').style.fontWeight = "600"
//   // document.querySelector('.loadingtitle').style.color = "black"
//   //   document.querySelector('.loadingtitle').style.marginLeft = "43%";
//   var matRef = db.collectionGroup('recycledproducts').where("productManufacturer", '==',  doc.data().userCompanyname).orderBy("createdAt").limit(5);
// matRef
// .get()
//  .then(query=>{
//     let data = query.docs.map(doc=>{
//         let x = doc.data()
//             return x;
            
//     })
//     console.log(data)
//     buildTable(data)
// 	function buildTable(data){

// 		for (var i = 0; i < data.length; i++){
// 			var row = `   <tr style=" height: 60px;  border-bottom: 0.5px solid grey; padding-bottom: 10px;">
      
//    <td style="
//     display: inline-block;
//     margin-top: 10%;
// ">  <img  style=" max-width: 30px; max-height: 30px;" src="${data[i].productImg}" alt="${data[i].productImg}"></td>
					
    
//                 <td style="vertical-align: middle; text-align:center; ">${data[i].productCategory}</td>
//                     <td style="vertical-align: middle; text-align:center;">${data[i].productName}</td>
// 							<td style="vertical-align: middle; text-align:center;">${data[i].productMN}</td>
// 							<td style="vertical-align: middle; text-align:center;">${data[i].productWeight}</td>
//               	<td style="vertical-align: middle; text-align:center;">${data[i].prodWidth} x ${data[i].prodHeight} x ${data[i].prodDepth}</td>
// 							<td style="vertical-align: middle; text-align:center;">${data[i].registeredDate}</td>
//               	<td style="vertical-align: middle; text-align:center;">${data[i].productStatus}</td>
//                 	<td style="vertical-align: middle; text-align:center;">${data[i].memo}</td>
//     </tr>`
// 	 const prodTabledata = document.querySelector('.prodTabledata')
//   prodTabledata.insertAdjacentHTML('afterbegin', row);


// 		}
// 	}
//   })
  
//  })
// })}
//   })
  var matRef = db.collectionGroup('recycledproducts').orderBy("createdAt").limit(5);
matRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
            
    })
    console.log(data)
    buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `   <tr style=" height: 60px;  border-bottom: 0.5px solid grey; padding-bottom: 10px;">
      
   <td style="
    display: inline-block;
    margin-top: 10%;
">  <img  style=" max-width: 30px; max-height: 30px;" src="${data[i].productImg}" alt="${data[i].productImg}"></td>
					
    
                <td style="vertical-align: middle; text-align:center; ">${data[i].productCategory}</td>
                    <td style="vertical-align: middle; text-align:center;">${data[i].productName}</td>
							<td style="vertical-align: middle; text-align:center;">${data[i].productMN}</td>
							<td style="vertical-align: middle; text-align:center;">${data[i].productWeight}</td>
              	<td style="vertical-align: middle; text-align:center;">${data[i].prodWidth} x ${data[i].prodHeight} x ${data[i].prodDepth}</td>
							<td style="vertical-align: middle; text-align:center;">${data[i].registeredDate}</td>
              	<td style="vertical-align: middle; text-align:center;">${data[i].productStatus}</td>
                	<td style="vertical-align: middle; text-align:center;">${data[i].memo}</td>
    </tr>`
	 const prodTabledata = document.querySelector('.prodTabledata')
  prodTabledata.insertAdjacentHTML('afterbegin', row);


		}
	}
  })
  




    var matRef = db.collectionGroup('recycledparts').limit(5);
matRef
.get()
 .then(query=>{
    let data = query.docs.map(doc=>{
        let x = doc.data()
            return x;
            
    })
    console.log(data)
    buildTable(data)
	function buildTable(data){

		for (var i = 0; i < data.length; i++){
			var row = `   <tr style=" height: 60px;  border-bottom: 0.5px solid grey; padding-bottom: 10px;">
 
 <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].supplierName}</td>
     <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partName}</td>
      <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partCode}</td>
        <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partWeight}</td>
         <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partWidth} x ${data[i].partHeight} x ${data[i].partDepth} (${data[i].sizeUnit}) </td>
           <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].reusedPart}</td>
     <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partRegisteredDate}</td>
           <td style="color: black;font-weight: 600; font-size: 15px;vertical-align: middle; text-align:center;">${data[i].partMemo}</td>

    </tr>`
	 const parttable = document.querySelector('.parttable')
  parttable.insertAdjacentHTML('afterbegin', row);


		}
	}
  })

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
     const userBadge = document.querySelector('.userBadge')
    const notadminElement = document.querySelectorAll('.notadmin')
      let sidebar = document.querySelector(".sidebar");
            let sidebarlogOut = document.querySelector("#log_out");
      
    if(user.admin) {

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

