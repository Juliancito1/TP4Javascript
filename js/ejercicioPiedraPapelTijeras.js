let movimiento = ["Piedra","Papel","Tijera"]
alert("Bienvenido a Piedra, Papel o Tijera");
    do{
    let jugador = parseInt(prompt("Seleccione su movimiento (1:Piedra) (2:Papel) (3:Tijera)"));
    if(jugador && !isNaN(jugador) && jugador >=1 && jugador<=3)
    {
    let computadora = Math.floor(Math.random()*movimiento.length)
    console.log(computadora);
    switch(jugador)
    {
        case 1:
        if(jugador===1 && computadora===2)
        {
            alert("El jugador eligió Piedra")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El jugador Gana");
        }
        else if(computadora===1)
        {
            alert("El jugador eligió Piedra")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("La Computadora Gana");
        }
        else{
            alert("El jugador eligió Piedra")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El Jugador y La Computadora empataron");
        }
        break
        case 2:
        if(jugador===2 && computadora===0)
        {
            alert("El jugador eligió Papel")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El jugador Gana");
        }
        else if(computadora===2)
        {
            alert("El jugador eligió Papel")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("La Computadora Gana");
        }
        else{
            alert("El jugador eligió Papel")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El Jugador y La Computadora empataron");
        }
        break
        case 3:
        if(jugador===3 && computadora===1)
        {
            alert("El jugador eligió Tijera")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El jugador Gana");
        }
        else if(computadora===0)
        {
            alert("El jugador eligió Tijera")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("La Computadora Gana");
        }
        else{
            alert("El jugador eligió Tijera")
            alert(`La computadora eligió ${movimiento[computadora]}`)
            alert("El Jugador y La Computadora empataron");
        }
        break
    }}
    else{
        document.write("Usted ingreso un número erróneo o una cadena de texto");
        }}while(confirm("¿Desea continuar jugando o elegir una opcion válida?"));
