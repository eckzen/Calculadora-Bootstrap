
function division(){
    let n1= parseFloat (document.getElementById('factura').value);
    let n2= parseFloat (document.getElementById('propina').value);
    
    let total= n1 * n2 /100;
    
    resultado.innerHTML='La propina es de € '+ total;
    }


    function suma(){
    let n1= parseFloat (document.getElementById('factura').value);
    let n2= parseFloat (document.getElementById('propina').value);
    
    let total= n1+ (n1 * n2 /100);
    let totalp= n1*n2/100;
   

    
    totalcompleto.innerHTML= 'La factura es de ' +n1 +'€' + '<br> La propina es de '+totalp+'€' +'<br> La cuenta total de la factura y la propina es de ' +total+'€';
}