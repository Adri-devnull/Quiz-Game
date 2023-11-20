import { boxOptionsElement } from "./domElements";
import {userChoices, generateQuestion, generateOption} from "./gameFuncts"

// MOSTRAMOS LA INFORMACION NADA MAS CARGA LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
    generateQuestion()
    generateOption()
})

// LLAMAR A LAS FUNCIONES Y GUARDAR LA ELECCION DEL USUARIO A CADA PREGUNTA
boxOptionsElement.addEventListener('click', (event) => {
    if (!event.target.dataset.button) return;
    else {
        userChoices.push(event.target.textContent);
    }
    generateQuestion()
    generateOption()
});