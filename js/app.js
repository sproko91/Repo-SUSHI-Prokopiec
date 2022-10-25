
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
        nombre = prompt("Bienvenido! Ingrese su Nombre:")
    }
    while (nombre == "" || nombre == null)
    alert ("Hola " + nombre + "! Comencemos a armar su pedido!")
    armarPedido()
}

function salir() {alert("Muchas gracias")
}

function armarPedido () {
    let op = prompt ("Ingrese el numero de la opcion\n1 - Entradas\n2 - Woks\n3 - Sushi\n4 - Promociones\n5 - Salir")
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
        let entrada = prompt ("Seleccion de Entradas:\n1 - Tempura de langostinos - $ 800\n2 - Tempura de Verduras - $ 500\n3 - Rabas - $ 1000\n4 - Harumakis - $ 650\n5 - Sashimi Hot - $ 750\n6 - Giosas - $ 600\n0 - Volver atras")
        switch(entrada){
            case "1": 
                aPagar += 800
                carro = carro + "\nTempura de Langostinos - $ 800"
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 500
                carro = carro + "\nTempura de Verduras - $ 500"
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 1000
                carro = carro + "\nRabas - $ 1000"
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 650
                carro = carro + "\nHarumakis - $ 650"
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 750
                carro = carro + "\nSashimi Hot - $ 750"
                alert ("Se agrego al carro correctamente")
                break
            case "6": 
                aPagar += 600
                carro = carro + "\nGiosas - $ 600"
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
        let woks = prompt ("Seleccion de Woks:\n1 - Arroz con Vegetales - $ 750\n2 - Arroz con Carne - $ 900\n3 - Arroz con Pollo - $ 850\n4 - Arroz con Langostinos - $ 1200\n5 - Fideos con Vegetales - $ 800\n6 - Fideos con Carne - $ 950\n7 - Fideos con Pollo - $ 900\n8 - Fideos con Langostinos - $ 1250\n0 - Volver atras")
        switch(woks){
            case "1": 
                aPagar += 750
                carro = carro + "\nArroz con Vegetales - $ 750"
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 900
                carro = carro + "\nArroz con Carne - $ 900"
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 850
                carro = carro + "\nArroz con Pollo - $ 850"
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 1200
                carro = carro + "\nArroz con Langostinos - $ 1200"
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 800
                carro = carro + "\nFideos con Vegetales - $ 800"
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 950
                carro = carro + "\nFideos con Carne - $ 950"
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 900
                carro = carro + "\nFideos con Pollo - $ 900"
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 1250
                carro = carro + "\nFideos con Langostinos - $ 1250"
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
        let sushi = prompt ("Selecciona de Sushi:\n1 - Buenos Aires - $ 700\n2 - New York - $ 750\n3 - California - $ 800\n4 - Tamago - $ 700\n5 - Honey - $ 800\n6 - Ibiza - $ 950\n7 - Tuna - $ 600\n8 - Mango - $ 650\n9 - Veggie - $ 700\n10 - Vegan - $ 650\n11 - Chic - $ 750\n12 - Cucumber - $ 750\n13 - Niguiri(x3) - $ 450\n14 - Niguiri AVO (x3) - $ 300\n15 - Geisha (x3) - $ 400\n16 - Geisha Kiuri (x3) - $ 350\n17 - Sashimi (x3) - $ 300\n0 - Volver atras")
        switch(sushi){
            case "1": 
                aPagar += 700
                carro = carro + "\nBuenos Aires - $ 700"
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 750
                carro = carro + "\nNew York - $ 750"
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 800
                carro = carro + "\nCalifornia - $ 800"
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 700
                carro = carro + "\nTamago - $ 700"
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 800
                carro = carro + "\nHoney - $ 800"
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 950
                carro = carro + "\nIbiza - $ 950"
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 600
                carro = carro + "\nTuna - $ 600"
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 650
                carro = carro + "\nMango - $ 650"
                alert ("Se agrego al carro correctamente")
                break
            case "9": 
                aPagar += 700
                carro = carro + "\nVeggie - $ 700"
                alert ("Se agrego al carro correctamente")
                break
            case "10": 
                aPagar += 650
                carro = carro + "\nVegan - $ 650"
                alert ("Se agrego al carro correctamente")
                break
            case "11":
                aPagar += 750
                carro = carro + "\nChic - $ 750"
                alert ("Se agrego al carro correctamente")
                break
            case "12": 
                aPagar += 750
                carro = carro + "\nCucumber - $ 750"
                alert ("Se agrego al carro correctamente")
                break 
            case "13": 
                aPagar += 450
                carro = carro + "\nNiguiri (x3) - $ 450"
                alert ("Se agrego al carro correctamente")
                break
            case "14": 
                aPagar += 300
                carro = carro + "\nNiguiri AVO (x3) - $ 300"
                alert ("Se agrego al carro correctamente")
                break
            case "15": 
                aPagar += 400
                carro = carro + "\nGeisha (x3) - $ 400"
                alert ("Se agrego al carro correctamente")
                break    
            case "16": 
                aPagar += 350
                carro = carro + "\nGeisha Kiuri (x3) - $ 350"
                alert ("Se agrego al carro correctamente")
                break
            case "17": 
                aPagar += 300
                carro = carro + "\nSashimi - $ 300"
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
        let promociones = prompt ("Seleccion de Promocion:\n1 - Seleccion - 12 piezas - $ 1360\n2 - Seleccion I - 15 piezas - $ 1800\n3 - Seleccion II - 30 piezas - $ 3500\n4 - Seleccion III - 60 piezas - $ 5350\n5 - Omakase Matsuri - 30 piezas - $ 3230\n6 - Niguiri Moriawase - 12 piezas - $ 1820\n7 - Tokusen - 15 piezas - $ 1570\n8 - Veggie - 20 piezas - $ 1390\n0 - Volver atras")
        switch(promociones){
            case "1": 
                aPagar += 1360
                carro = carro + "\nSeleccion - 12 piezas - $ 1360"
                alert ("Se agrego correctamente al carro")
                break
            case "2": 
                aPagar += 1800
                carro = carro + "\nSeleccion I - 15 piezas - $ 1800"
                alert ("Se agrego al carro correctamente")
                break
            case "3": 
                aPagar += 3500
                carro = carro + "\nSeleccion II - 30 piezas - $ 3500"
                alert ("Se agrego al carro correctamente")
                break
            case "4": 
                aPagar += 5350
                carro = carro + "\nSeleccion III - 60 piezas - $ 5350"
                alert ("Se agrego al carro correctamente")
                break
            case "5": 
                aPagar += 3230
                carro = carro + "\nOmakase Matsuri - 30 piezas - $ 3230"
                alert ("Se agrego correctamente al carro")
                break
            case "6": 
                aPagar += 1820
                carro = carro + "\nNiguiri Moriawase - 12 piezas - $ 1820"
                alert ("Se agrego al carro correctamente")
                break
            case "7": 
                aPagar += 1570
                carro = carro + "\nTokusen - 15 piezas - $ 1570"
                alert ("Se agrego al carro correctamente")
                break
            case "8": 
                aPagar += 1390
                carro = carro + "\nVeggie - 20 piezas - $ 1390"
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
        
        if (seguirComprando.toLowerCase() === "si" ){
        armarPedido()
        }
        else if 
            (seguirComprando.toLowerCase() === "no"){
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

