
let aPagar = 0
let carro = "Su pedido es: "
let nombre
let tarjeta
let clave
let pedido
let length
let domicilio


preguntarPedido()

function preguntarPedido(){
    pedido = confirm("Queres hacer un pedido?")
    if (pedido) {
        pedirNombre()
    }
    else{
    salir ()
    }
}

function pedirNombre(){
    do{
        nombre = prompt("Bienvenido!. Ingrese su Nombre:")
    }
    while (nombre == "" || nombre == null)
    armarPedido()
}

function salir() {alert("Muchas gracias")
}

function armarPedido () {
    let op = prompt ("Hola " + nombre + "! Que quieres pedir hoy?\n\nIngrese el numero de la opcion\n1 - Entradas\n2 - Woks\n3 - Sushi\n4 - Promociones\n5 - Salir")
    switch(op){
        case "1":
            mostrarEntradas()
            break
        case "2":
            mostrarWoks ()
            break
        case "3":
            mostrarSushi()
            break
        case "4":
            mostrarPromociones()
            break
        case "5":
            salir()
            break
        default:
            alert ("Opcion invalida") 
            armarPedido()        

    }

    function mostrarEntradas () {
        let entrada = prompt ("Seleccion de Entradas:\n1 - Tempura de langostinos\n2 - Tempura de Verduras\n3 - Rabas\n4 - Harumakis\n5 - Sashimi Hot\n6 - Giosas\n0 - Volver atras")
        switch(entrada){
            case "1": 
                aPagar += 800
                carro = carro + "\nTempura de Langostinos"
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 500
                carro = carro + "\nTempura de Verduras "
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 1000
                carro = carro + "\nRabas "
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 650
                carro = carro + "\nHarumakis "
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 750
                carro = carro + "\nSashimi Hot "
                alert ("Se agrego al carro correctamente")
                break
            case "6": 
                aPagar += 600
                carro = carro + "\nGiosas "
                alert ("Se agrego al carro correctamente")
                break
            case "0": 
                armarPedido()
                break
            default:
                alert ("Opcion invalida") 
                mostrarEntradas() 
        }
        continuarCompra() 

    
    }
    function mostrarWoks (){
        let woks = prompt ("Seleccion de Woks:\n1 - Arroz con Vegetales\n2 - Arroz con Carne\n3 - Arroz con Pollo\n4 - Arroz con Langostinos\n5 - Fideos con Vegetales\n6 - Fideos con Carne\n7 - Fideos con Pollo\n8 - Fideos con Langostinos\n0 - Volver atras")
        switch(woks){
            case "1": 
                aPagar += 750
                carro = carro + "\nArroz con Vegetales "
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 900
                carro = carro + "\nArroz con Carne "
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 850
                carro = carro + "\nArroz con Pollo "
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 1200
                carro = carro + "\nArroz con Langostinos "
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 800
                carro = carro + "\nFideos con Vegetales "
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 950
                carro = carro + "\nFideos con Carne "
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 900
                carro = carro + "\nFideos con Pollo "
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 1250
                carro = carro + "\nFideos con Langostinos "
                alert ("Se agrego al carro correctamente")
                break
            case "0": 
                armarPedido()
                break
            default:
                alert ("Opcion invalida") 
                mostrarWoks() 
        }
        continuarCompra()
    }

    function mostrarSushi (){   
        let sushi = prompt ("Selecciona de Sushi:\n1 - Buenos Aires\n2 - New York\n3 - California\n4 - Tamago\n5 - Honey\n6 - Ibiza\n7 - Tuna\n8 - Mango\n9 - Veggie\n10 - Vegan\n11 - Chic\n12 - Cucumber\n13 - Niguiri(x3)\n14 - Niguiri AVO (x3)\n15 - Geisha (x3)\n16 - Geisha Kiuri (x3)\n17 - Sashimi (x3)\n0 - Volver atras")
        switch(sushi){
            case "1": 
                aPagar += 700
                carro = carro + "\nBuenos Aires "
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 750
                carro = carro + "\nNew York "
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 800
                carro = carro + "\nCalifornia "
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 700
                carro = carro + "\nTamago "
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 800
                carro = carro + "\nHoney "
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 950
                carro = carro + "\nIbiza "
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 600
                carro = carro + "\nTuna "
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 650
                carro = carro + "\nMango "
                alert ("Se agrego al carro correctamente")
                break
            case "9": 
                aPagar += 700
                carro = carro + "\nVeggie "
                alert ("Se agrego al carro correctamente")
                break
            case "10": 
                aPagar += 650
                carro = carro + "\nVegan "
                alert ("Se agrego al carro correctamente")
                break
            case "11":
                aPagar += 750
                carro = carro + "\nChic "
                alert ("Se agrego al carro correctamente")
                break
            case "12": 
                aPagar += 750
                carro = carro + "\nCucumber "
                alert ("Se agrego al carro correctamente")
                break 
            case "13": 
                aPagar += 450
                carro = carro + "\nNiguiri (x3) "
                alert ("Se agrego al carro correctamente")
                break
            case "14": 
                aPagar += 300
                carro = carro + "\nNiguiri AVO (x3) "
                alert ("Se agrego al carro correctamente")
                break
            case "15": 
                aPagar += 400
                carro = carro + "\nGeisha (x3) "
                alert ("Se agrego al carro correctamente")
                break    
            case "16": 
                aPagar += 350
                carro = carro + "\nGeisha Kiuri (x3) "
                alert ("Se agrego al carro correctamente")
                break
            case "17": 
                aPagar += 300
                carro = carro + "\nSashimi "
                alert ("Se agrego al carro correctamente")
                break                
            case "0": 
                armarPedido()
                break
            default:
                alert ("Opcion invalida") 
                mostrarSushi() 
        }
        continuarCompra()
    }

    function mostrarPromociones (){
        let promociones = prompt ("Seleccion de Promocion:\n1 - Seleccion - 12 piezas\n2 - Seleccion I - 15 piezas\n3 - Seleccion II - 30 piezas\n4 - Seleccion III - 60 piezas\n5 - Omakase Matsuri - 30 piezas\n6 - Niguiri Moriawase - 12 piezas\n7 - Tokusen - 15 piezas\n8 - Veggie - 20 piezas\n0 - Volver atras")
        switch(promociones){
            case "1": 
                aPagar += 1360
                carro = carro + "\nSeleccion - 12 piezas "
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 1800
                carro = carro + "\nSeleccion I - 15 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 3500
                carro = carro + "\nSeleccion II - 30 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 5350
                carro = carro + "\nSeleccion III - 60 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 3230
                carro = carro + "\nOmakase Matsuri - 30 piezas "
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 1820
                carro = carro + "\nNiguiri Moriawase - 12 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 1570
                carro = carro + "\nTokusen - 15 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 1390
                carro = carro + "\nVeggie - 20 piezas "
                alert ("Se agrego al carro correctamente")
                break
            case "0": 
                armarPedido()
                break
            default:
                alert ("Opcion invalida") 
                mostrarSushi() 
        }
        continuarCompra()

    }

    function continuarCompra (){    
        let seguirComprando = prompt ("Quieres agregar mas productos? SI/NO")
        
        if ((seguirComprando === "si" )||(seguirComprando === "SI")){
        armarPedido()
        }
        else if 
            ((seguirComprando === "no" )||(seguirComprando === "NO") ){
            entrega()
            }
            else{
                alert ("Opcion invalida") 
                continuarCompra()
            }
    }
    
    function entrega (){
        let eleccion = prompt ('Ingrese forma de entrega:\n\n"RETIRO" si desea pasar por alguno de nuestros Locales\n"ENVIO" si desea que se lo enviemos a su domicilio')
            
        if (eleccion.toLowerCase() == "retiro"){
                seleccioneLocal()
        }
        else if(
            eleccion.toLowerCase() == "envio") {
            ingresarEnvio()
            alert (nombre + ", su pedido sera entregado en " + domicilio + "\nEl tiempo estimado es de 30 a 45 minutos.\nGracias por su compra! ")

            }    
            else{
                alert ("Opcion invalida") 
                entrega()    
            }
    }   
    
    function seleccioneLocal (){
        let local = prompt ("Seleccione el local donde desea retirar\n\n1 - Los Cardales.\n2 - Benavidez.")
        if (local == "1"){
            metodoPago()
            alert(nombre + ", podras retirar por nuestro local en Rivadavia 40, Los Cardales, Buenos Aires.\nGracias por su compra!")
        }
        else if (local=="2") {
            metodoPago()
            alert(nombre + ", podras retirar por nuestro local en Presidente Perón 6408, Benavidez, Buenos Aires.\nGracias por su compra!")
            }
            else{
                alert ("Opcion invalida") 
                seleccioneLocal()
            }
    }
    function metodoPago(){
        let metodoPago = prompt ("Ingresar medio de pago\n\n1 - Efectivo (10% descuento)\n2 - Tarjeta");

        switch(metodoPago){
            case "1": 
                alert("Pendiente de pago en efectivo\n\n" + carro + "\n\nDescuento: $ " + (aPagar * 10 / 100) + "\n\nEl total a pagar es: $ " + (aPagar - aPagar * 10 / 100))
                break
            case "2": 
                ingresarTarjeta();
                alert("El pago se realizo con exito!\n\n" + carro + "\n\nEl total a pagar es: $ " + aPagar)
                break
            default:
                alert ("Opcion invalida") 
                metodoPago()
        }
    
        function ingresarTarjeta() {

            do {
                tarjeta = prompt ("Ingrese los 16 digitos de la tarjeta");
                length = tarjeta.length;
                if (length != 16 || length == null){
                alert ("Error en el numero de la tarjeta")
                }
                            
            }
            while (length != 16);
            clave = prompt ("Ingrese el codigo de Seguridad")
        }
    }

    function ingresarEnvio () {
        let provincia = confirm ("Vives en C.A.B.A. o Gran Buenos Aires?")
        if (provincia){
            do {
                domicilio = prompt ("Ingrese su direccion (CALLE/NRO/PISO/DPTO)")
            }    
            while (domicilio == "" || domicilio == null)
            metodoPago()
        }
        else {alert("Disculpa, no realizamos entregas en tu zona")
        }

    }
    
}

