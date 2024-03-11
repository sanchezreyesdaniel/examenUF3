import { bd } from "../bd/bd"


export const pedido = {
    template:`<div class="container mt-3 p-5 border shadow-lg ">
    <h1 class="text-center mb-5 ">----- Vista usuario -----</h1>
    <div class="row">
      
      <div class="col-6">
        <h3>Grupo</h3>
        <form id="form">
        <label for="nombreGrupo" class="label-control">Nombre del grupo:</label>
        <input id="grupo" type="text" class="form-control" required minlength="4" maxlength="10" mt-2" placeholder ="Borrachos de DAW2">
        <label for="numeroMesa" class="label-control class="form-control" >Mesa numero</label>
        <div  class="invalid-feedback" class="form-control invalid-feedback" >El número de mesa debe estar entre 1 y 15.</div>
        <input id="mesa" type="number" class="form-control mt-2" required min="0" max="15" required min="1" placeholder ="0">
      
        <h3 class="mt-5">Haz tu pedido</h3>
        <div class="d-flex gap-3 ">
          <select name="cervezas" id="cervezas" class="form-control " required >
            <option  value="">Selecciona qué birra quieres</option>
            <option  value="">Estrella Galicia</option>
          </select>
          <div class="invalid-feedback">Selecciona una cerveza.</div>
          <input id="cantidad" type="number" value="0" class="form-control" required min="1">
          <div class="invalid-feedback">La cantidad de cervezas debe ser mayor que 0.</div>
        </div>
        <button id="enviar" class="btn btn-success mt-4 w-100">¡Enviar pedido!</button>
        </form>
      </div>
      <div id="carta" class="col-6 border ">
        <div class="p-3 d-flex">
          <div class="w-50">
            <img src="estrella.jpg" alt="" class="w-100">
          </div>
          <div>
            <h4 class="">Estrella Galicia</h4>
            <p>Cerveza suave y equilibrada con un sabor ligeramente amargo y aroma a malta.</p>
          </div>
          

        </div>
      </div>
    </div>
    

  </div>`,
  script:()=>{

  






    let optionCerveza = '<option value="">Selecciona qué birra quieres</option>'
    bd.map((item) =>{
        optionCerveza += `<option  value="${item.id}">${item.nombre}</option>`
      
    })

    document.querySelector('#cervezas').innerHTML = optionCerveza
    // document.querySelector('#enviar').addEventListener('click',()=>{
        
    // })
    

    document.querySelector('#cervezas').addEventListener('change',()=>{
        let cervezaValue = document.querySelector('#cervezas').value
        bd.forEach(cerveza => {
            if(cerveza.id == cervezaValue){
                let html=` 
                <div class="p-3 d-flex">
                  <div class="w-50">
                    <img  src="${cerveza.imagen}" alt="" class="w-100">
                  </div>
                  <div>
                    <h4 class="">${cerveza.nombre}</h4>
                    <p>${cerveza.descripcion}</p>
                  </div>
                  
        
                </div>
              `
                document.querySelector('#carta').innerHTML = html
            }
            
        });
        
    })
    
    
}
    

  

    }
    
  


