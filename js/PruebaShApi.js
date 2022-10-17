//Creamos siempre nuestro document ready
//Significa que el DOM se haya cargado correctamente

$(function(){

    console.log('Salida Navegador');
    // Creamos nuetsras VARIABLES con sus respectivos selectores

    let buscar =  $('#addEnlace');
    let inpunfindID = $('#numberSuperhApi');
    let InfoSuperHero = $('InfoSuperH');

    //Crearemos los eventos para sacar el numero del input

    inpunfindID.change(function (e) { 
        e.preventDefault();

        let id = inpunfindID.val()
        console.log('retorna el ID',id);
        

    });





})

