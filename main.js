


alert("Bienvenido a un minijuego creado con JS");

let nombre = prompt("¿Cuál es tu nombre?");


alert(nombre + ", te acompañaré en esta aventura.");


let respuesta = confirm("¿Estás dispuesto a eliminar cada contrincante?");
if (!respuesta) {
    alert("¡Tal vez en otro momento!");
} else {
    let respuestaParaAventura = confirm("Bien, empecemos con esta aventura, te recuerdo que tiene 35 puntos de vida.");
    if (!respuestaParaAventura) {
        alert("¡Tal vez en otro momento!");
    } else {
       
        const VidasMonstruos = [1, 2, 3, 4, 5];

        
        const monstruos = [
            { nombre: "Cuervo Sangriento, debil", vida: 1, ataque: 1 },
            { nombre: "Lobo Salvaje, habil contra el contra-ataque", vida: 4, ataque: 3 },
            { nombre: "Dragón Bebé, indefenso", vida: 2, ataque: 2 },
            { nombre: "Mago Negro", vida: 4, ataque: 3 },
            { nombre: "Troll Gigante, hasta aca llegaste", vida: 1, ataque: 10 },
            { nombre: "Demonio de Fuego", vida: 4, ataque: 5 }
            
        ];

        monstruos.pop()

        console.log(monstruos);
        
        let vidaDelJugador = 35;

        
        function verificarEleccion(monstruo) {
            while (true) {
                let eleccion = prompt(`Adivina la vida del ${monstruo.nombre} (elige un número del 1 al 5):`);
                if (parseInt(eleccion) === monstruo.vida) {
                    return true;
                } else {
                    alert(`¡Fallaste! Intenta de nuevo.`);
                    vidaDelJugador -= monstruo.ataque;
                    alert(`El ${monstruo.nombre} te atacó. Ahora tienes ${vidaDelJugador} vidas.`);
                    if (vidaDelJugador <= 0) {
                        return false;
                    }
                }
            }
        }

        
        for (let i = 0; i < monstruos.length; i++) {
            if (vidaDelJugador <= 0) {
                alert("La aventura ha terminado. No tienes más vidas.");
                break;
            }

            alert(`Te enfrentarás a ${monstruos[i].nombre}.`);

            if (verificarEleccion(monstruos[i])) {
                alert(`¡Adivinaste correctamente! Pasas al siguiente piso.`);
            } else {
                alert("¡Has sido derrotado!");
                break;
            }
        }

        
        if (vidaDelJugador > 0) {
            alert("¡Has completado la aventura! ¡Felicidades!");
        } else {
            alert("La aventura ha terminado. Intenta de nuevo la próxima vez.");
        }
    }
}