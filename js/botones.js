const d = document;
export default function creabotones(container) {
    fetch("../configuracion.json")
        .then(data => {
            return data.json();
        })
        .then(buttons => {
            showButtons(buttons,container);
        });
}
function showButtons(buttons,container){
    var c = d.getElementById(container);
    for(let b of buttons){
        // Creamos un div para la etiqueta y el botón
        let newDiv = d.createElement('div');
        let divAtt = d.createAttribute("class");
        divAtt.value = "mb-3";
        newDiv.setAttributeNode(divAtt);
        c.appendChild(newDiv);

        
        // Creamos la etiqueta
        let newLabel = d.createElement("label");
        newLabel.innerHTML = b.titulo;
        
        // Creamos y configuramos el botón
        let newButton = d.createElement("button");
        newButton.type = "button";
        newButton.innerText = b.tituloBoton;
        let att = d.createAttribute("class");
        att.value = "btn btn-success form-control";
        newButton.setAttributeNode(att);

        newDiv.appendChild(newLabel);
        newDiv.appendChild(newButton);
    }
}