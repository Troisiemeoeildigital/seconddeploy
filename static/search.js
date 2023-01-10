function tableSearch() {
            let input, filter, table, tr, td, txtValue;

            //Intialising Variables
            input = document.getElementById("myInputPM");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");

            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[2];
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


let searchChoice = document.querySelector(".searchPartSelection")
searchChoice.addEventListener('change', ()=>{
if (searchChoice.value == 1) {
document.getElementsByName('myInputMat')[0].placeholder = 'Search by Part Name'
}
else if (searchChoice.value == 2) {
document.getElementsByName('myInputMat')[0].placeholder = 'Search by Part Code'
}
})

function materialSearch() {
            let input, filter, table, tr, td, txtValue;

let searchChoice = document.querySelector(".searchPartSelection")

            //Intialising Variables
            input = document.getElementById("myInputMat");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTableMat");
            tr = table.getElementsByTagName("tr");
         
    
            for (let i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[searchChoice.value];
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

        
        function productSearch() {
            let input, filter, table, tr, td, txtValue;

            //Intialising Variables
            input = document.getElementById("myInputProd");
            filter = input.value.toUpperCase();
            table = document.getElementById("myTableProd");
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




        