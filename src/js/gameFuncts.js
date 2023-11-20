import { QUESTIONS } from "./questions";
import {boxResultsElement, boxQuizElement, tittleResultsElement, optionBoxes, idQuestionElement} from "./domElements"



// FUNCION QUE GENERA EL ARRAY DE CORRECT ANSWERS
const getCorrectAnswers = () => {
    return QUESTIONS.map(qst => qst.correctAnswer);
}

// ARRAY CON CORRECT ANSWERS 
const correctAnswers = getCorrectAnswers();


// CREAMOS ARRAY PARA GUARDAR LAS RESPUESTAS ELEGIDAS POR EL USUARIO
export const userChoices = [];

// FUNCION PARA PINTAR LAS RESPUESTAS Y CORRECTANSWERS
let counterAnswers = 0;
const verifyCorrectAnswers = () => {
    if (counterAnswers >= correctAnswers.length) {
        return
    }
    const userAnswerContent = userChoices[counterAnswers];
    const correctAnswerContent = correctAnswers[counterAnswers];
    const questionContent = QUESTIONS[counterAnswers].question;
    const question = document.createElement('h4');
    question.textContent = questionContent;
    const answers = document.createElement('p');
    const correctAnswer = document.createElement('span');
    correctAnswer.textContent = `${correctAnswerContent} - `;
    answers.append(correctAnswer);

    const userAnswer = document.createElement('span');
    userAnswer.textContent = userAnswerContent;
    if (userAnswerContent === correctAnswerContent) {
        userAnswer.classList.add('correct');
    } else {
        userAnswer.classList.add('incorrect');
    }

    answers.append(userAnswer);

    boxResultsElement.append(question);
    boxResultsElement.append(answers);
    counterAnswers++
}

// COUNTER PARA LAS OPCIONES DE RESPUESTA
let counterQuestion = 0;
// GENERAMOS LA PREGUNTA
export const generateQuestion = () => {
    if (counterQuestion >= QUESTIONS.length) {
        return
    }
    const question = QUESTIONS[counterQuestion].question;
    idQuestionElement.textContent = question;
    counterQuestion++
}


// CONTADOR OPTIONS
let counterOptions = 0;

// GENERAMOS LAS OPCIONES Y LLAMAMOS A LA FUNCION DE PINTAR RESPUESTAS
export const generateOption = () => {
    if (counterOptions >= QUESTIONS.length) {
        boxQuizElement.classList.add('hide');
        tittleResultsElement.textContent = 'FINAL RESULTS';
        setInterval(() => {
            verifyCorrectAnswers();
        }, 400);
        console.log('Se terminaron');
        return
    }
    const options = QUESTIONS[counterOptions].options
    optionBoxes.forEach((option, index) => {
        option.textContent = options[index]
    })
    counterOptions++
}
