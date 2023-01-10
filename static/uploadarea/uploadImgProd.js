// var editfiles = [];
// document.querySelector(".editfiles").addEventListener("change", function(e) {
//   editfiles = e.target.files;
//   for (let i = 0; i < editfiles.length; i++) {
//     console.log(editfiles[i]);
//     document.querySelector('.editprodImgphld').innerHTML = editfiles[i].name
//   }
// });

// editMat.addEventListener('click', e => {
//   e.preventDefault();
//    materiallist.innerHTML = ""
//   Swal.fire({
//   title: 'Do you want to save the changes?',
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: 'Save',
//   denyButtonText: `Don't save`,
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) {

//     //Loops through all the selected editfiles
//     for (let i = 0; i < editfiles.length; i++) {
//       //create a storage reference
//       var storage = firebase.storage().ref(editfiles[i].name);

//       //upload file
//       var upload = storage.put(editfiles[i]);

//       //update progress bar
//       upload.on(
//         "state_changed",
//         function progress(snapshot) {
//           var percentage =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
//         },

//         function error() {
//           alert("error uploading file");
//         },

//         function complete() {
        
//             //create a storage reference
//               let filename = editfiles[i].name;
//             var storage = firebase.storage().ref(filename);

//                 //get file url
//                 storage
//                   .getDownloadURL()
//                   .then(function(url) {
//                     console.log(url);


//       db.collection('recycledparts').doc(`${partId}`).collection('materials').doc(`${editData}`).update({
//     materialGroup: PMmaterialGroup.value,
//     materialName: PMmaterialName.value,
//     materialRecycleContent: PMmaterialRecycleContent.value,
//     materialRecycleType: PMMaterialRecycleType.value,
//     materialMassg: PMmaterialMassg.value,
//     materialMassPerc: PMMaterialMassPerc.value,
// 	proofurl: url,
   
//   })
  
//     Swal.fire(
//   'Success!',
//   'Material updated successfully!',
//   'success'
// )
// })
//         }
//       );
//     }
  
	

// } else if (result.isDenied) {
//     Swal.fire('Changes are not saved', '', 'info')
//   }
// })
//   });















