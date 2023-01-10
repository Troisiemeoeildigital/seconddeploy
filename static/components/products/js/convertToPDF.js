   const report = document.querySelector('.report')
       const reportbtn = document.querySelector('.reportbtn')
        const reportEN4558 = document.querySelector('.reportEN4558')
       const reportbtnEN4558 = document.querySelector('.reportbtnEN4558')
        const reportEN4557 = document.querySelector('.reportEN4557')
         const reportbtnEN4557 = document.querySelector('.reportbtnEN4557')

          const reportTablebtnEN4557 = document.querySelector('.reportTablebtnEN4557')
            const reportTableEN4557 = document.querySelector('.reportTableEN4557')


              const reportTableEN4558 = document.querySelector('.reportTableEN4558')
                const reportbtnTableEN4558 = document.querySelector('.reportbtnTableEN4558')
        
                const reportTablebtn = document.querySelector('.reportTablebtn')
                const reportTable = document.querySelector('.reportTable')
                
                
window.onload = function () {
       reportbtn
        .addEventListener("click", () => {
            const invoice = report;
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.1,
                filename: 'Assessment Report.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'cm', format: 'A1', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })

    reportbtnEN4558
        .addEventListener("click", () => {
            const invoice = reportEN4558;
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.1,
                filename: 'Assessment Report EN4558.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: 'A2', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })

     
       reportbtnEN4557.addEventListener("click", () => {
            const invoice = reportEN4557;
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.1,
                filename: 'Assessment Report EN4557.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'cm', format: 'A2', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
          
}
