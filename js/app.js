let carrito = document.getElementById("carrito")
carrito.onclick = () => {preguntarPedido() };

let aPagar = 0;
let carro = "Su pedido es: ";
let nombre;
let tarjeta;
let clave;
let pedido;
let length;
let domicilio;
let vegan;



const entradas = [
  { id: 1, item: "Tempura de Langostinos", precio: 800 },
  { id: 2, item: "Tempura de Verduras - Apto vegano", precio: 500 },
  { id: 3, item: "Rabas", precio: 1000 },
  { id: 4, item: "Harumakis", precio: 650 },
  { id: 5, item: "Sashimi Hot", precio: 750 },
  { id: 6, item: "Giosas", precio: 600 },
];

const woks = [
  { id: 1, item: "Arroz con Vegetales - Apto vegano", precio: 750 },
  { id: 2, item: "Arroz con Carne", precio: 900 },
  { id: 3, item: "Arroz con Pollo", precio: 850 },
  { id: 4, item: "Arroz con Langostinos", precio: 1200 },
  { id: 5, item: "Fideos con Vegetales - Apto vegano", precio: 800 },
  { id: 6, item: "Fideos con Carne", precio: 950 },
  { id: 7, item: "Fideos con Pollo", precio: 900 },
  { id: 8, item: "Fideos con Langostinos", precio: 1250 },
];

const sushis = [
  { id: 1, item: "Buenos Aires", precio: 700 },
  { id: 2, item: "New York", precio: 750 },
  { id: 3, item: "California", precio: 800 },
  { id: 4, item: "Tamago", precio: 700 },
  { id: 5, item: "Honey", precio: 800 },
  { id: 6, item: "Ibiza", precio: 950 },
  { id: 7, item: "Tuna", precio: 800 },
  { id: 8, item: "Mango", precio: 650 },
  { id: 9, item: "Veggie", precio: 700 },
  { id: 10, item: "Vegan - Apto vegano", precio: 650 },
  { id: 11, item: "Chic - Apto vegano", precio: 750 },
  { id: 12, item: "Cucumber - Apto vegano", precio: 750 },
  { id: 13, item: "Niguiri (x3)", precio: 450 },
  { id: 14, item: "Niguiri AVO (x3) - Apto vegano", precio: 300 },
  { id: 15, item: "Geisha (x3)", precio: 400 },
  { id: 16, item: "Geisha Kiuri (x3)", precio: 350 },
  { id: 17, item: "Sashimi (x3)", precio: 300 },
];

const promociones = [
  { id: 1, item: "Seleccion - 12 Piezas", precio: 1360 },
  { id: 2, item: "Seleccion I - 15 Piezas", precio: 1800 },
  { id: 3, item: "Seleccion II - 30 Piezas", precio: 3500 },
  { id: 4, item: "Seleccion III - 60 Piezas", precio: 5350 },
  { id: 5, item: "Omakase Matsuri - 30 piezas", precio: 3230 },
  { id: 6, item: "Niguiri Moriawase - 12 piezas", precio: 1820 },
  { id: 7, item: "Tokusen - 15 piezas", precio: 1570 },
  { id: 8, item: "Veggie - 20 piezas", precio: 1390 },
];

var arrVegano = []

const menues = [
    {id: 1, titulo: "Entradas", items: entradas},
    {id: 2, titulo: "Woks", items: woks}, 
    {id: 3, titulo: "Sushis", items: sushis}, 
    {id: 4, titulo: "Promociones", items: promociones},
];


function preguntarPedido() {
  pedido = confirm("Queres hacer un pedido?");
  if (pedido) {
    pedirNombre();
  } else {
    salir();
  }
}

function vacioNull (texto){
    return (texto == "" || texto == null)
}



function pedirNombre() {
  do {
    nombre = prompt("Bienvenido! Ingrese su Nombre:");
  } while (vacioNull(nombre));
  alert("Hola " + nombre + "! Comencemos a armar su pedido!");
  preguntarVegano()
}

function salir() {
  alert("Muchas gracias");
}

function preguntarVegano (){
    vegan = confirm("Queres conocer las opciones Apto Vegano?")
    
  if (vegan){ mostrarVegano()
  }

  else{  armarPedido()

}
}

function mostrarVegano() {
  
  const veganoEntradas = entradas.filter((entrada) => entrada.item.includes("Apto"));
  arrVegano.push(veganoEntradas)
  const veganoWoks = woks.filter((wok) => wok.item.includes("Apto"));
  arrVegano.push(veganoWoks)
  const veganoSushis = sushis.filter((sushi) => sushi.item.includes("Apto"));
  arrVegano.push(veganoSushis)
  const veganoPromociones = promociones.filter((promocion) => promocion.item.includes("Apto"));
  arrVegano.push(veganoPromociones)

  
for (const veganoEntrada of veganoEntradas){
  console.log("------ENTRADAS------" + veganoEntrada.item + " - $ "+ veganoEntrada.precio)
  }

  for (const veganoWok of veganoWoks){
    console.log("------WOKS------" + veganoWok.item + " - $ "+ veganoWok.precio)
    }

  for (const veganoSushi of veganoSushis){
      console.log("------SUSHIS------" + veganoSushi.item + " - $ "+ veganoSushi.precio)
      }

  for (const veganoPromocion of veganoPromociones){
        console.log("------PROMOCIONES------" + veganoPromocion.item + " - $ "+ veganoPromocion.precio)
        }
  console.log("------------------------------------");

armarPedido()    
}


function armarPedido() {
   
    let fraseDeMenu = ""
    menues.forEach((menu) => {
        // 1 - Entradas
        fraseDeMenu = fraseDeMenu +  menu.id + " - " + menu.titulo + "\n"
    }
    )

  let opcion = Number(
    prompt(
      "Ingrese el numero de la opcion \n" + fraseDeMenu + "5 - Salir"
    )
  );
    if (opcion == 5){
        salir();
    }
    else if (opcion <= 0 || opcion > menues.length){
        alert("Opcion invalida");
      armarPedido();}
    else{
    mostrarProductos(menues[opcion-1].items,menues[opcion-1].titulo)
    }

  function mostrarProductos(productos, titulo) {
    productos.forEach((producto) => {
        console.log(
            producto.id + " - " + producto.item + " - $ " + producto.precio
          )
    })
    console.log("------------------------------------");
    let op = Number(
      prompt(
        "Seleccion de " + titulo + '\nIngrese el numero de la opcion que elija.\n\n Para volver atras presione "Cancelar"'
      )
    );
    if (op > 0 && op <= productos.length) {
      aPagar += productos[op - 1].precio;
      carro =
        carro +
        "\n" +
        productos[op - 1].item +
        " - $ " +
        productos[op - 1].precio;
      alert("Se agrego correctamente al carro");
      continuarCompra();
    } else if (op == 0) {
      armarPedido();
    } else {
      alert("Opcion invalida");
      mostrarProductos(productos, titulo);
    }    
  }

  function compararPalabras (textoIngresado, textoEsperado){
    let esIgual = textoIngresado != null && (textoIngresado.toLowerCase() === textoEsperado)  
    return esIgual
  }


  function continuarCompra() {
    let seguirComprando = prompt("Quieres agregar mas productos? SI/NO");
    if (compararPalabras(seguirComprando,"si")){
      armarPedido();
    } else if (compararPalabras(seguirComprando,"no")) {
      entrega();
    } else {
      alert("Opcion invalida");
      continuarCompra();
    }
  }

  function entrega() {
    let eleccion = prompt(
      'Ingrese forma de entrega:\n\n"RETIRO" si desea pasar por alguno de nuestros Locales\n"ENVIO" si desea que se lo enviemos a su domicilio'
    );

    if (compararPalabras(eleccion, "retiro")) {
      seleccioneLocal();
    } else if (compararPalabras(eleccion, "envio")) {
      ingresarEnvio();
      alert(
        nombre +
          ", su pedido sera entregado en " +
          domicilio +
          "\nEl tiempo estimado es de 30 a 45 minutos.\nGracias por su compra! "
      );
    }
      else if (op == 0) {
      entrega(); 
    } else {
      alert("Opcion invalida");
      entrega();
    }
  }

  function seleccioneLocal() {
    let local = prompt(
      "Seleccione el local donde desea retirar\n\n1 - Los Cardales.\n2 - Benavidez."
    );
    if (local == "1") {
      metodoPago();
      alert(
        nombre +
          ", podras retirar por nuestro local en Rivadavia 40, Los Cardales, Buenos Aires.\nGracias por su compra!"
      );
    } else if (local == "2") {
      metodoPago();
      alert(
        nombre +
          ", podras retirar por nuestro local en Presidente Perón 6408, Benavidez, Buenos Aires.\nGracias por su compra!"
      );
    } else {
      alert("Opcion invalida");
      seleccioneLocal();
    }
  }
  function metodoPago() {
    let metodoPago = prompt(
      "Ingresar medio de pago\n\n1 - Efectivo (10% descuento)\n2 - Tarjeta"
    );

    switch (metodoPago) {
      case "1":
        alert(
          "Pendiente de pago en efectivo\n\n" +
            carro +
            "\n\nDescuento: $ " +
            (aPagar * 10) / 100 +
            "\n\nEl total a pagar es: $ " +
            (aPagar - (aPagar * 10) / 100)
        );
        break;
      case "2":
        ingresarTarjeta();
        alert(
          "El pago se realizo con exito!\n\n" +
            carro +
            "\n\nEl total a pagar es: $ " +
            aPagar
        );
        break;
      default:
        alert("Opcion invalida");
        metodoPago();
    }

    function ingresarTarjeta() {
      do {
        tarjeta = prompt("Ingrese los 16 digitos de la tarjeta");
        length = tarjeta.length;
        if (length != 16 || length == null) {
          alert("Error en el numero de la tarjeta");
        }
      } while (length != 16 || length == null);
      clave = prompt("Ingrese el codigo de Seguridad");
    }
  }

  function ingresarEnvio() {
    let provincia = confirm("Vives en C.A.B.A. o Gran Buenos Aires?");
    if (provincia) {
      do {
        domicilio = prompt("Ingrese su direccion (CALLE/NRO/PISO/DPTO)");
      } while (vacioNull(domicilio));
      metodoPago();
    } else {
      alert("Disculpa, no realizamos entregas en tu zona");
    }
  }
}
