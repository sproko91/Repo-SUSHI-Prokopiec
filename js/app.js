document.addEventListener("DOMContentLoaded", () => {
  let aPagar = 0;
  let carro = [];

  const entradas = [
    {
      id: 1,
      item: "Tempura de Langostinos",
      precio: 800,
      img: "../img/langostino.jpg",
    },
    {
      id: 2,
      item: "Tempura de Verduras - Apto vegano",
      precio: 500,
      img: "../img/verduras.jpg",
    },
    { id: 3, item: "Rabas", precio: 1000, img: "../img/rabas.jpg" },
    { id: 4, item: "Harumakis", precio: 650, img: "../img/harumakis.jpg" },
    { id: 5, item: "Sashimi Hot", precio: 750, img: "../img/sashi.jpg" },
    { id: 6, item: "Giosas", precio: 600, img: "../img/giosas.jpg" },
  ];

  const woks = [
    {
      id: 1,
      item: "Arroz con Vegetales - Apto vegano",
      precio: 750,
      img: "../img/arrozveg.jpg",
    },
    {
      id: 2,
      item: "Arroz con Carne",
      precio: 900,
      img: "../img/arrozcarne.jpg",
    },
    {
      id: 3,
      item: "Arroz con Pollo",
      precio: 850,
      img: "../img/arrozpollo.jpg",
    },
    {
      id: 4,
      item: "Arroz con Langostinos",
      precio: 1200,
      img: "../img/arrozlango.jpg",
    },
    {
      id: 5,
      item: "Fideos con Vegetales - Apto vegano",
      precio: 800,
      img: "../img/fideosveg.jpg",
    },
    {
      id: 6,
      item: "Fideos con Carne",
      precio: 950,
      img: "../img/fideoscarne.jpg",
    },
    {
      id: 7,
      item: "Fideos con Pollo",
      precio: 900,
      img: "../img/fideospollo.jpg",
    },
    {
      id: 8,
      item: "Fideos con Langostinos",
      precio: 1250,
      img: "../img/fideoslango.jpg",
    },
  ];

  const sushis = [
    { id: 1, item: "Buenos Aires", precio: 700, img: "../img/buenosaires.jpg" },
    { id: 2, item: "New York", precio: 750, img: "../img/newyork.jpg" },
    { id: 3, item: "California", precio: 800, img: "../img/california.jpg" },
    { id: 4, item: "Tamago", precio: 700, img: "../img/tamago.jpg" },
    { id: 5, item: "Honey", precio: 800, img: "../img/honey.jpg" },
    { id: 6, item: "Ibiza", precio: 950, img: "../img/ibiza.jpg" },
    { id: 7, item: "Tuna", precio: 800, img: "../img/tuna.jpg" },
    { id: 8, item: "Mango", precio: 650, img: "../img/mango.jpg" },
    { id: 9, item: "Veggie", precio: 700, img: "../img/veggie.jpg" },
    {
      id: 10,
      item: "Vegan - Apto vegano",
      precio: 650,
      img: "../img/vegan.jpg",
    },
    { id: 11, item: "Chic - Apto vegano", precio: 750, img: "../img/chic.jpg" },
    {
      id: 12,
      item: "Cucumber - Apto vegano",
      precio: 750,
      img: "../img/cucumber.jpg",
    },
    { id: 13, item: "Niguiri (x3)", precio: 450, img: "../img/niguiri.jpg" },
    {
      id: 14,
      item: "Niguiri AVO (x3) - Apto vegano",
      precio: 300,
      img: "../img/niguiriavo.jpg",
    },
    { id: 15, item: "Geisha (x3)", precio: 400, img: "../img/geisha.jpg" },
    {
      id: 16,
      item: "Geisha Kiuri (x3)",
      precio: 350,
      img: "../img/geishakiuri.jpg",
    },
    { id: 17, item: "Sashimi (x3)", precio: 300, img: "../img/sashimi.jpg" },
  ];

  const promociones = [
    {
      id: 1,
      item: "Seleccion - 12 Piezas",
      precio: 1360,
      img: "../img/promo1.webp",
    },
    {
      id: 2,
      item: "Seleccion I - 15 Piezas",
      precio: 1800,
      img: "../img/promo2.webp",
    },
    {
      id: 3,
      item: "Seleccion II - 30 Piezas",
      precio: 3500,
      img: "../img/promo3.webp",
    },
    {
      id: 4,
      item: "Seleccion III - 60 Piezas",
      precio: 5350,
      img: "../img/promo4.webp",
    },
    {
      id: 5,
      item: "Omakase Matsuri - 30 piezas",
      precio: 3230,
      img: "../img/promo5.webp",
    },
    {
      id: 6,
      item: "Niguiri Moriawase - 12 piezas",
      precio: 1820,
      img: "../img/promo6.webp",
    },
    {
      id: 7,
      item: "Tokusen - 15 piezas",
      precio: 1570,
      img: "../img/promo7.webp",
    },
    {
      id: 8,
      item: "Veggie - 20 piezas",
      precio: 1390,
      img: "../img/promo8.webp",
    },
  ];

  const menues = [
    { id: 1, titulo: "Entradas", items: entradas },
    { id: 2, titulo: "Woks", items: woks },
    { id: 3, titulo: "Sushis", items: sushis },
    { id: 4, titulo: "Promociones", items: promociones },
  ];

  let mostrarEntradas = mostrarItems(menues[0].items);
  let mostrarWoks = mostrarItems(menues[1].items);
  let mostrarSushis = mostrarItems(menues[2].items);
  let mostrarPromociones = mostrarItems(menues[3].items);

  var card;

  function mostrarItems(productos) {
    productos.forEach((producto) => {
      function crearItem() {
        let div1 = document.createElement("div");
        div1.classList.add("card", "bg-grey", "producto");

        let div2 = document.createElement("div");

        let img = document.createElement("img");
        img.classList.add("img-fluid", "rounded-start", "imgProducto");
        img.src = producto.img;

        let div3 = document.createElement("div");
        div3.className = "col-lg-9";

        let div4 = document.createElement("div");
        div4.classList.add("card-body", "d-flex", "justify-content-evenly");

        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.textContent = producto.item;

        let p = document.createElement("p");
        p.className = "card-text mx-2";
        p.textContent = "$ " + producto.precio;

        const a = document.createElement("a");
        a.className = "mas";

        let img2 = document.createElement("img");
        img2.src = "../img/add-icon.png";
        img2.dataset.titulo = producto.item;
        img2.dataset.precio = producto.precio;

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

      if (productos == menues[0].items) {
        card = document.getElementById("collapseExample");
      } else if (productos == menues[1].items) {
        card = document.getElementById("collapseExample1");
      } else if (productos == menues[2].items) {
        card = document.getElementById("collapseExample2");
      } else if (productos == menues[3].items) {
        card = document.getElementById("collapseExample3");
      }

      crearItem();
    });
  }

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
});
