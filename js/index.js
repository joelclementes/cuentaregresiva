import creabotones from "./botones.js";
import countdown from "./cuentaregresiva.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {

    creabotones("botones");


    let 
    txtTitulo = "Contador regresivo ⌛",
    txtMotivo = "Para terminar jornada",
    txtLimitDate = "Apr 12, 2022 15:45:00",
    txtMessage = "Se terminó el tiempo 🦸‍♂️"

    countdown("titulo",txtTitulo,"motivo",txtMotivo,"countdown",txtLimitDate,txtMessage);
})