export default function countdown(idTitulo,txtTitulo,idMotivo,txtMotivo,idContador,limitDate,finalMessage) {
    const d = document;
    //* Se usa dollar para especificar variables del DOM
    const $titulo = d.getElementById(idTitulo);
    const $motivo = d.getElementById(idMotivo);
    const $countdown = d.getElementById(idContador);

    $titulo.innerHTML = txtTitulo;
    $motivo.innerHTML = txtMotivo;
    //* Convertimos la fecha que viene en caracter a milisegundos para poder manipularla mejor aritméticamente
    const countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdownDate-now,
        days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
        hours = ("0"+Math.floor(limitTime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))).slice(-2),
        minutes = ("0"+Math.floor(limitTime % (1000 * 60 * 60)/(1000 * 60))).slice(-2),
        seconds = ("0"+Math.floor(limitTime % (1000 * 60 * 60)/(1000))).slice(-2);
        
        $countdown.innerHTML = `<span>Faltan 
                    <span class="badge">${days}</span> días 
                    <span class="badge">${hours}</span> horas 
                    <span class="badge">${minutes}</span> minutos 
                    <span class="badge">${seconds}</span> segundos.</span>`;
        
        if(limitTime<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    },1000)
}