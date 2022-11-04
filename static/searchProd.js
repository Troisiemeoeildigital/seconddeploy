// substance product search
let searchProdSubChoice = document.querySelector(".searchProdSubSelection")
searchProdSubChoice.addEventListener('change', ()=>{
if (searchProdSubChoice.value == 0) {
document.getElementsByName('myInputSub')[0].placeholder = 'Search by Substance Name'
}
else if (searchProdSubChoice.value == 2) {
document.getElementsByName('myInputSub')[0].placeholder = 'Search by CRM'
}
else if (searchProdSubChoice.value == 3) {
document.getElementsByName('myInputSub')[0].placeholder = 'Search by ROHS'
}
})
  
function subSearch() {
             let filter,  tr, td, txtValue, input, table;
                input = document.getElementById("myInputSub");
                table = document.querySelector(".mysubsTable");
            //Intialising Variables
          
            filter = input.value.toUpperCase();
          
            tr = table.getElementsByTagName("tr");
         
    
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[searchProdSubChoice.value];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
            

        };
