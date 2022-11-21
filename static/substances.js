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
const addmodalySubssSingle = document.querySelector('.addSubsmodaly');
const addModalyForm = document.querySelector('.add-modaly .form');
const addModalyParts = document.querySelector('.addPartmodaly .form');
const addModalySubs = document.querySelector('.addSubsmodaly .form');
const closebtn = document.querySelector('.action-button-close')

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
const editpartsName = document.querySelector('.editpartsName')
const materiallist = document.querySelector('.materiallist')
const subslist = document.querySelector('.subslist')

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
   
     
      
       <tr data-id='${doc.id}' style="    border-bottom: 0.5px solid grey;">

      <td style="padding:20px" class="substxt">${doc.data().subtanceName}</td>
     <td class="substxt">${doc.data().casnumber}</td>
      <td class="substxt">${doc.data().crm}</td>
       <td class="substxt">${doc.data().rohs}</td>
         <td class="substxt">${doc.data().none}</td>
    
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
  let substxt = document.querySelectorAll('.substxt')
  substxt.forEach(e => {
    let text = e.innerHTML
    let reuslt = text.substring(0, 10)
  })
 
// var tableusersfilter, rows, switching, i, x, y, shouldSwitch;
// var tableusersfilter = document.querySelector(".table-users")
//   switching = true;
//   /*Make a loop that will continue until
//   no switching has been done:*/
//   while (switching) {
//     //start by saying: no switching is done:
//     switching = false;
//     rows = tableusersfilter.rows;
//     /*Loop through all table rows (except the
//     first, which contains table headers):*/
//     for (i = 1; i < (rows.length - 1); i++) {
//       //start by saying there should be no switching:
//       shouldSwitch = false;
//       /*Get the two elements you want to compare,
//       one from current row and one from the next:*/
//       x = rows[i].getElementsByTagName("TD")[0];
//       y = rows[i + 1].getElementsByTagName("TD")[0];
//       //check if the two rows should switch place:
//       if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
//         //if so, mark as a switch and break the loop:
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /*If a switch has been marked, make the switch
//       and mark that a switch has been done:*/
//       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//       switching = true;
//     }
//   }

}

// Click add user button
btnprAdd.addEventListener('click', () => {
        // Get the form and file field
		/**
		 * Log the uploaded file to the console
		 * @param {event} Event The file loaded event
		 */
		function logFile (event) {
      event.preventDefault()
			let str = event.target.result;
			let json = JSON.parse(str);
			console.log('string', str);
			console.log('json', json);
for(let i = 0; i < json.length; i++) {
    let obj = json[i];


      
       db.collection('substances').add({
            subtanceName: obj.subtanceName,
            casnumber: obj.casnumber,
            rohs: obj.rohs,
            crm: obj.crm,
            none: obj.none,
       
        }) .then(()=> {
      console.log("Documents Added!")
    });
}
		}
		/**
		 * Handle submit events
		 * @param  {Event} event The event object
		 */
		function handleSubmit (event) {

			// Stop the form from reloading the page
			event.preventDefault();

			// If there's no file, do nothing
			if (!file.value.length) return;

			// Create a new FileReader() object
			let reader = new FileReader();

			// Setup the callback event to run when the file is read
			reader.onload = logFile;

			// Read the file
			reader.readAsText(file.files[0]);
		}
		let form = document.querySelector('#upload');
		let file = document.querySelector('.filey');
		// Listen for submit events
		form.addEventListener('submit', handleSubmit);
  addmodaly.classList.add('modaly-show');
  addModalyForm.substanceName.value = '';
  addModalyForm.cas.value = '';
  addModalyForm.crm.value = '';
  addModalyForm.rohs.value = '';
  addModalyForm.substanceMassg.value = '';
  addModalyForm.substanceMassPerc.value = '';
});

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
db.collection('substances').limit(6).onSnapshot(snapshot => {
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

// Click submit in add modaly
addModalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('substances').add({
    subtanceName: addModalyForm.substanceName.value,
    casnumber: addModalyForm.cas.value,
    crm: addModalyForm.crm.value,
    rohs: addModalyForm.rohs.value,
    substancemassg: addModalyForm.substanceMassg.value,
    
    substancemassperc: addModalyForm.substanceMassPerc.value,

    

  });
  modalyWrapper.classList.remove('modaly-show');
});

// Click submit in edit modaly
editmodalyForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('substances').doc(id).update({
    subtanceName: editmodalyForm.editsubstanceName.value,
    casnumber: editmodalyForm.editcas.value,
    crm: editmodalyForm.editcrm.value,
    rohs: editmodalyForm.editrohs.value,
    substancemassg: editmodalyForm.editsubstanceMassg.value,
    substancemassperc: editmodalyForm.editsubstanceMassPerc.value,
   


     
  });
    
  editmodaly.classList.remove('modaly-show');
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
    // lastsignindata = firebase.auth().currentUser.metadata.lastSignInTime
    // console.log(lastsignindata)
    // notadminElement.style.display = 'flex'
    userTitleCard.innerHTML = 'Viewer'
    //  lastsignin.innerHTML = ''

    }

  } else {
   
    console.log("not an admin")
  }
}


  let sortSubsSelection = document.querySelector(".sortSubsSelection")
sortSubsSelection.addEventListener('change', ()=>{
if (sortSubsSelection.value == 0) {


var tablesubs, rows, switching, i, x, y, shouldSwitch;
var tablesubs = document.querySelector(".table-users")
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = tablesubs.rows;
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
}
else if (sortSubsSelection.value == 1) {


var tablesubs, rows, switching, i, x, y, shouldSwitch;
var tablesubs = document.querySelector(".table-users")
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = tablesubs.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
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
}
})

let searchSubSelection = document.querySelector(".searchSubSelection")
  
searchSubSelection.addEventListener('change', ()=>{
if (searchSubSelection.value == 0) {
document.getElementsByName('myInputSub')[0].placeholder = 'Search by Substance Name'
}
else if (searchSubSelection.value == 1) {
document.getElementsByName('myInputSub')[0].placeholder = 'Search by CAS Number'
}

})
const myInputSub = document.querySelector('#myInputSub')
myInputSub.onkeyup = function() {
     let filter,  tr, td, txtValue, input, table;
                input = document.getElementById("myInputSub");
                table = document.querySelector(".table-users");
            //Intialising Variables
          
            filter = input.value.toUpperCase();
          
            tr = table.getElementsByTagName("tr");
         
    
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[searchSubSelection.value];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
} 
  


