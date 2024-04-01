let productosEnLocalStorage =JSON.parse(localStorage.getItem('mates'));
$('.total').append(
    `
    <section class="resumenS">
        <div>
            
            <button id="boton"<span id="pagarText" >Pagar</span></button>
        </div>
    </section> 
     `

)
for (let i = 0 ; i < productosEnLocalStorage.length;i++){

    $(".carro").append(  `
        <div class="page-contentCarr" >
        <div class="product-conteiner">
                <h3 id="paisaje">${productosEnLocalStorage[i].nombre}</h3>
                <img id="foto" src=${productosEnLocalStorage[i].imagen} alt="Paisaje">
                <h2> $${productosEnLocalStorage[i].precio}</h2>
                <h3> ${productosEnLocalStorage[i].material} </h3>
                <a href = "carrito.html" class = "productos__container--delete deleteButton${i}">Eliminar ${productosEnLocalStorage[i].nombre} del carrito</button>
                
            </div>
            
        </div>`

    )
    $(`.deleteButton${i}`).click(() => {
        
        if(productosEnLocalStorage[i].nombre === productosEnLocalStorage[i].nombre ){

            productosEnLocalStorage.splice(i,1);

        }
        localStorage.setItem('mates', JSON.stringify(productosEnLocalStorage));
    })
  

    
}
$('#boton').click(()=>{
       
  alert("Su pago fue realizado con éxito");
})
