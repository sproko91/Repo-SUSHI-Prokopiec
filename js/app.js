
document.addEventListener("DOMContentLoaded", () => {



function obtenerEntradasJSON() {

fetch('../data/entradas.json')
.then((res)=>{
  return res.json()
})
.then((entradas)=>{
  card = document.getElementById("collapseExample")
  render(entradas);
   
 })
.catch((error)=> console.log(error))    

}

function obtenerWoksJSON() {

  fetch('../data/woks.json')
  .then((res)=>{
    return res.json()
  })
  .then((woks)=>{
    card = document.getElementById("collapseExample1")
    render(woks);
     
   })
  .catch((error)=> console.log(error))    
  
  }

function obtenerSushisJSON() {

    fetch('../data/sushis.json')
    .then((res)=>{
      return res.json()
    })
    .then((sushis)=>{
      card = document.getElementById("collapseExample2")
      render(sushis);
       
     })
    .catch((error)=> Swal.fire({
      title:
        error,
      
      icon: "error",
      confirmButtonText: "Salir",
    }))    
    
    } 

function obtenerPromocionesJSON() {

  fetch('../data/promociones.json')
  .then((res)=>{
    return res.json()
  })
  .then((promociones)=>{
    card = document.getElementById("collapseExample3")
    render(promociones);
     
   })
   .catch((error)=> Swal.fire({
    title:
      error,
    
    icon: "error",
    confirmButtonText: "Salir",
  }))    
  
  }



const render = (datos)=>{
  
  datos.forEach((dato) => {{
    
      let div1 = document.createElement("div");
      div1.classList.add("card", "bg-grey", "producto");

      let div2 = document.createElement("div");

      let img = document.createElement("img");
      img.classList.add("img-fluid", "rounded-start", "imgProducto");
      img.src = dato.img;

      let div3 = document.createElement("div");
      div3.className = "col-lg-9";

      let div4 = document.createElement("div");
      div4.classList.add("card-body", "d-flex", "justify-content-evenly");

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = dato.item;

      let p = document.createElement("p");
      p.className = "card-text mx-2";
      p.textContent = "$ " + dato.precio;

      const a = document.createElement("a");
      a.className = "mas";

      let img2 = document.createElement("img");
      img2.src = "../img/add-icon.png";
      img2.dataset.titulo = dato.item;
      img2.dataset.precio = dato.precio;

      img2.addEventListener("click", agregarCarro);

      card.appendChild(div1);
      div1.appendChild(div2);
      div2.appendChild(img);
      div1.appendChild(div3);
      div3.appendChild(div4);
      div4.appendChild(h5);
      div4.appendChild(p);
      div4.appendChild(a);
      a.appendChild(img2);
    }
})
}


obtenerEntradasJSON()
obtenerWoksJSON()
obtenerSushisJSON()
obtenerPromocionesJSON()


  let aPagar = 0;
  let carro = [];
  var card;
  
function agregarCarro(evt) {

    let titulo = evt.currentTarget.dataset.titulo;
    let precio = evt.currentTarget.dataset.precio;
    carro.push({ titulo, precio });
    sessionStorage.setItem("carro", JSON.stringify(carro));
    aPagar = aPagar + Number(precio);
    updateCarro();
    Toastify({
      text: "Agregado al carro!",
      duration: 2000,
      position: 'right',
      style: {
        background: 'linear-gradient(to right, #56E409, #14B00C)'}
  }).showToast();
  }

  function updateCarro() {
    let html = "";

    for (let item of carro) {
      html += `
    <li>${item.titulo} - $ ${item.precio}</li>`;
    }

    let ul = document.querySelector("#compra ul");
    ul.innerHTML = html;

    let p = document.querySelector("#compra p");
    p.textContent = "Total: $ " + aPagar;
  }

  let lnkVaciar = document.getElementById("lnkStartOver");

  lnkVaciar.addEventListener("click", (evt) => {
    evt.preventDefault();
    carro = [];
    sessionStorage.removeItem("carro", JSON.stringify(carro));
    aPagar = 0;
    updateCarro();
    Toastify({
      text: "Carro vacio!",
      duration: 2000,
      position: 'right',
      style: {
        background: 'linear-gradient(to right, #FF0000, #C60303)'}
  }).showToast();
  });

  let lnkiraPagar = document.getElementById("btn-abrir-popup");

  let overlay = document.getElementById("overlay");
  let popup = document.getElementById("popup");
  let btnCerrarPopup = document.getElementById("btn-cerrar-popup");

  lnkiraPagar.addEventListener("click", () => {
    if (carro.length > 0) {
      overlay.classList.add("active");
      popup.classList.add("active");
    }
  });

  btnCerrarPopup.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
  });

  let continuar = document.getElementById("continuar");
  continuar.addEventListener("click", guardarDatos);

  function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;

    if (
      nombre !== "" &&
      telefono !== "" &&
      direccion !== "" &&
      checked.id == "efectivo"
    ) {
      overlay.classList.remove("active");
      popup.classList.remove("active");
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("telefono", telefono);
      sessionStorage.setItem("direccion", direccion);

      Swal.fire({
        title: sessionStorage.getItem("nombre") + ", Gracias por tu compra!",
        html:
          "Tu pedido sera entregado en " +
          sessionStorage.getItem("direccion") +
          ", y la demora estimada es de 30 a 45 minutos. <br><br>" +
          "El total a pagar es: $ " +
          (aPagar - (aPagar * 10) / 100),
        icon: "success",
        confirmButtonText: "Salir",
      }).then((result) => {
        if (result.isConfirmed) {
          carro = [];
          sessionStorage.removeItem("carro", JSON.stringify(carro));
          aPagar = 0;
          updateCarro();
        }
      });
    } else if (
      nombre !== "" &&
      telefono !== "" &&
      direccion !== "" &&
      checked.id == "tarjeta"
    ) {
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("telefono", telefono);
      sessionStorage.setItem("direccion", direccion);

      let continuar = document.getElementById("continuar");
      continuar.classList.add("ocultar");

      let divNombre = document.getElementById("divNombre");
      divNombre.classList.add("ocultar");

      let divTelefono = document.getElementById("divTelefono");
      divTelefono.classList.add("ocultar");

      let divDireccion = document.getElementById("divDireccion");
      divDireccion.classList.add("ocultar");

      let efectivoTarjeta = document.getElementById("divEfectivoTarjeta");
      efectivoTarjeta.classList.add("ocultar");

      let form = document.getElementById("formulario");
      let div = document.createElement("div");

      let label = document.createElement("label");
      label.setAttribute("for", "tarjeta");
      label.textContent = "Ingrese los 16 numeros de su tarjeta:";

      let input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", "numeroTarjeta");
      input.setAttribute("placeholder", "0000 0000 0000 0000");
      input.classList.add("input");

      let div2 = document.createElement("div");

      let label2 = document.createElement("label");
      label2.setAttribute("for", "codigo");
      label2.textContent = "Ingrese codigo de seguridad:";

      let input2 = document.createElement("input");
      input2.setAttribute("type", "text");
      input2.setAttribute("id", "codigo");
      input2.setAttribute("placeholder", "123");
      input2.classList.add("input");

      let boton = document.createElement("input");
      boton.setAttribute("type", "button");
      boton.setAttribute("id", "pagar");
      boton.setAttribute("value", "Pagar");
      boton.classList.add("btn-submit");

      let div3 = document.createElement("div");

      form.appendChild(div);
      div.appendChild(label);
      div.appendChild(input);
      form.appendChild(div2);
      div2.appendChild(label2);
      div2.appendChild(input2);
      form.appendChild(div3);
      div3.appendChild(boton);

      let pagar = document.getElementById("pagar");

      pagar.addEventListener("click", () => {
        let lengthTarjeta =
          document.getElementById("numeroTarjeta").value.length;
        let lengthCodigo = document.getElementById("codigo").value.length;
        if (
          lengthTarjeta != 19 ||
          lengthTarjeta == null ||
          lengthCodigo != 3 ||
          lengthCodigo == null
        ) {
          Swal.fire({
            title:
              sessionStorage.getItem("nombre") +
              ", No se pudo procesar el pago!",
            html: "Verifique los datos ingresados de la tarjeta",
            icon: "error",
            confirmButtonText: "Salir",
          });
        } else {
          overlay.classList.remove("active");
          popup.classList.remove("active");

          Swal.fire({
            title:
              sessionStorage.getItem("nombre") + ", Gracias por tu compra!",
            html:
              "Tu pedido sera entregado en " +
              sessionStorage.getItem("direccion") +
              ", y la demora estimada es de 30 a 45 minutos. <br><br>" +
              "Pagaste con tarjeta: $ " +
              aPagar,
            icon: "success",
            confirmButtonText: "Salir",
          }).then((result) => {
            if (result.isConfirmed) {
              carro = [];
              sessionStorage.removeItem("carro", JSON.stringify(carro));
              aPagar = 0;
              updateCarro();
              continuar.classList.remove("ocultar");
              divNombre.classList.remove("ocultar");
              divTelefono.classList.remove("ocultar");
              divDireccion.classList.remove("ocultar");
              efectivoTarjeta.classList.remove("ocultar");
              div.classList.add("ocultar");
              div2.classList.add("ocultar");
              div3.classList.add("ocultar");
            }
          });
        }
      });
    }
  }

  let checked = null;

  for (let radio of document.getElementsByClassName("only-one")) {
    radio.onclick = function () {
      if (checked != null) {
        checked.checked = false;
        checked = radio;
      }
      checked = radio;
    };
  }
})

