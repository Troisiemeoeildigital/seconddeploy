

// Initialize Firebase
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

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app)
const auth = firebase.auth(app);

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const roleSelect = document.querySelector('.roleSelect')
const requestAccess = document.querySelector('.requestAccess')
loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});




const renderUser = doc => {
   console.log(doc.ref.path)
  const tr = `
	      <h4 class="requestInfo">현재 권한: <span>Default</span></h4>
         <h4 class="requestInfo">요청 상태: <span> ${doc.data().requestStatus} </span></h4>
            <h4 class="requestInfo"> 요청 권한: <span> ${doc.data().requestRole} </span></h4>
  `
   const requestData = document.querySelector('.requestData')
  requestData.insertAdjacentHTML('beforeend', tr);
}


const requestStatus = document.querySelector('.requestStatus')
const requestRoleType = document.querySelector('.requestRoleType')
	auth.onAuthStateChanged(user => {
    if(user) {
 db.collection('users').where('userID', '==', `${user.uid}`).onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
        // renderTest(change.doc);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
     const requestData = document.querySelector('.requestData')
      requestData.innerHTML = "";
      renderUser(change.doc);
        // renderTest(change.doc);
    }
  })
})

		requestAccess.onclick = function(e) {
	e.preventDefault()
	roleSelect.value
		db.collection('users').where('userID', '==', `${user.uid}`).get()
		.then((querySnapshot) => {
 querySnapshot.forEach((doc) => {
	console.log(doc.id)
	db.collection('users').doc(doc.id).update({
			requestRole: roleSelect.value,
			requestType: true,
			requestStatus: "🟢"
	})
// 	 .then(()=>{
	
//  })
 })

})
		
}}
	})

