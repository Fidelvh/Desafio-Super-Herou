$(function () {             //Significa que el DOM se haya cargado correctamente
console.log();
    
//creamos nuetras variables con sus selectores
    let buscar = $('#addEnlace');
    let inpunfindID = $('#numeroSuperH');
    let infoSuperHero = $('#InfoSuperH');

    //Crearemos los eventos para sacar el numero del input
    
    buscar.click(function (e) {
        
        e.preventDefault();
        let id = inpunfindID.val()
        if (id.length != 0 && id > 0) { /* //no exite el cero dentro de la API, NO SE PUEDE NUMERO NEGATIVO, SOLAMENTE ENTEROS POSITIVO// */
            buscarSuperHeroe(id)

        } else {
            alert('Ingrese un Id correcto')
        }
    
    });

    const buscarSuperHeroe = (id) =>{       
        //console.log('salida del id',id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10224391957240785/${id}`,
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log('salida de response-->', response);
            
                let imagen = response.image['url']
                let nombre = response.biography['full-name']
                let id = response.id
                let alias = response.biography.aliases
                let poderes = response.powerstats
                let editor = response.biography.publisher
                let firstAppearance = response.biography['first-appearance']
                let conexiones = response.connections['group-affiliation']
                let ocupacion = response.work.occupation
                let altura = response.appearance.height
                let peso = response.appearance.weight
                
                let datos = [];
            
                        for (const key in poderes) {
                            datos.push(
                                {
                                    y: parseInt( poderes[key] == 'null' ? 0 : poderes[key] ), 
                                    indexLabel: key
                                });
                        };
            
                    
              
             
            
                    var chart = new CanvasJS.Chart("chartContainer", {
                        animationEnabled: true,
                        title: {
                            text: `Dato de ${nombre}`
                        },
                        data: [{
                            type: "pie",
                            startAngle: 100,
                            yValueFormatString: "##0.00\"%\"",
                            indexLabel: "{indexLabel} {y}",
                            legendText: "{indexLabel}",
                            dataPoints: datos
                        }]
                    });
                    chart.render();
                
        
                
             infoSuperHero.html(`
                <h5>SuperHeroe encontrado</h5>
                <hr>
                <div class="card">
                <img src="${response.image['url']}" class="card-img-top Superhero" alt="Superhero">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Imagen: ${imagen}</li>
                    <li class="list-group-item">Editor: ${editor}</li>
                    <li class="list-group-item">Conexiones: ${conexiones}</li>
                    <li class="list-group-item">Ocupación: ${ocupacion}</li>
                    <li class="list-group-item">Primera Aparición: ${firstAppearance}</li>
                    <li class="list-group-item">Altura: ${altura}</li>
                    <li class="list-group-item">Peso: ${peso}</li>
                </ul>
                
                </div>
                

                `)
/* 
                chartSuperHeroe(nombre,id,poderes)
                const chartSuperHeroe = (nombre,id,poderes) => {
           
                    const contenedorSuperheroe = $('#exampleModal');
                    contenedorSuperheroe.attr('id',`exampleModal-${id}`)             //Método .attr 
                        console.log('Poderes--->',contenedorSuperheroe);
            
                        
                    
                    } */
            },

                error : function (response) {
                alert('Hay problemas con la API')
            },
                complete : function (response) {
                alert('Se realizo la consulta')
             }
        });

        return id

    }

    

    
    
}


);









