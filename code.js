$.get("./listaMates.json", data =>{
  
  const guardarProductosEnCarrito =  i => {
    $(`.button-add-${i}`).click( () => {
      const nombre = data.mates[i].tipo;
      const imagen = data.mates[i].imagen;
      const precio = data.mates[i].precio;
      const material = data.mates[i].material;

      let matesObject = {
                  nombre,
                  imagen,
                  precio,
                  material
              } 

     if(localStorage.getItem('mates') === null)
     {
      let matesArray = []
      matesArray.push(matesObject)
      localStorage.setItem('mates', JSON.stringify(matesArray))
      
    }else
    { 
      let productosEnLocalStorage = JSON.parse(localStorage.getItem('mates'));
      productosEnLocalStorage.push(matesObject);
      localStorage.setItem('mates', JSON.stringify(productosEnLocalStorage))
    }    
    var cantidad = parseFloat($('span')[0].innerHTML) 

    cantidad = cantidad + 1 ;
    $('span')[0].innerHTML = cantidad;        
      
    })

  }
   
  {
    for (let i = 0; i < data.mates.length; i++)
     {
          $('#cuerpo').prepend(
        `
            <div class="page-contentC">
            <div class="product-conteiner">
                    <h3 id="paisaje">${data.mates[i].tipo}</h3>
                    <img id="foto" src=${data.mates[i].imagen} alt="Paisaje">
                    <h2> $${data.mates[i].precio}</h2>
                    <h3> ${data.mates[i].material} </h3>
                    <button id="botonAgregar"  class="button-add-${i}">Agregar</button>
                </div>
            </div>
            `)
        guardarProductosEnCarrito(i)
  
    }  
      $('.product-conteiner').hide()
      $('#cuerpo').prepend(`
          <div id="saludo">
            <img id="imgSal" src="Img/Logo.jpeg"" alt="">
            <br/>
            <br/>
            <br/>
            <h1 id="bienvenido">Bienvenidos a Pipack!!</h1>
          </div>
      `)  
      $('#saludo').hide()
                  .slideDown(3000)
                  .delay(4000)
                  .slideUp(3000)
                
      $('.product-conteiner').delay(10000)
                            .slideDown(3000); 

}

}).fail(()=> {
  console.log("error")
  swal("ERROR 404");

});











