// substance product search
let searchProdSubChoice = document.querySelector(".searchProdSubSelection")

  
function subSearch() {
             let filter,  tr, td, txtValue, input, table;
                input = document.getElementById("myInputSub");
                table = document.querySelector(".mysubsTable");
            //Intialising Variables
          
            filter = input.value.toUpperCase();
          
            tr = table.getElementsByTagName("tr");
         
    
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[1];
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



        let searchProdChoice = document.querySelector(".searchProdSelection")
searchProdChoice.addEventListener('change', ()=>{
if (searchProdChoice.value == 3) {
document.getElementsByName('myInputProduct')[0].placeholder = 'Search by Product Name'
}
else if (searchProdChoice.value == 4) {
document.getElementsByName('myInputProduct')[0].placeholder = 'Search by Model Name'
}

})
  
function prodSearch() {
             let filter,  tr, td, txtValue, input, table;
                input = document.getElementById("myInputProduct");
                table = document.querySelector(".prod-table");
            //Intialising Variables
          
            filter = input.value.toUpperCase();
          
            tr = table.getElementsByTagName("tr");
         
    
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[searchProdChoice.value];
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



