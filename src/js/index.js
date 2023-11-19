/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-return */
const QUESTIONS = [
    {
        id: 'a5e6c5bf-1a3d-4d5c-bf4a-9e4f4e2aef6f',
        question: '¿En qué país se encuentra la Torre Eiffel?',
        options: ['España', 'Francia', 'Italia', 'Alemania'],
        correctAnswer: 'Francia'
    },
    {
        id: '8a438f44-24ab-4f96-874c-8a2a112d2dc2',
        question: '¿Cuál es el río más largo del mundo?',
        options: ['Amazonas', 'Nilo', 'Yangtze', 'Misisipi'],
        correctAnswer: 'Nilo'
    },
    {
        id: '722cf8d7-00e3-43f9-a9ed-43f23e7baf1d',
        question: '¿Quién pintó la Mona Lisa?',
        options: [
            'Vincent van Gogh',
            'Pablo Picasso',
            'Leonardo da Vinci',
            'Rembrandt'
        ],
        correctAnswer: 'Leonardo da Vinci'
    },
    {
        id: '9a75a534-84d9-4bda-b170-6055c5b407d5',
        question: '¿En qué continente se encuentra el Monte Everest?',
        options: ['América', 'Asia', 'Europa', 'Oceanía'],
        correctAnswer: 'Asia'
    },
    {
        id: '2df1b4c4-4a4a-4b7c-95b3-3b3bb1fb8a87',
        question: '¿Cuál es el océano más grande del mundo?',
        options: [
            'Océano Atlántico',
            'Océano Índico',
            'Océano Pacífico',
            'Océano Ártico'
        ],
        correctAnswer: 'Océano Pacífico'
    },
    {
        id: 'e2d80e91-0516-4db6-a166-0772b3999e0c',
        question: '¿Cuál es el país más grande del mundo por área territorial?',
        options: ['Rusia', 'China', 'Estados Unidos', 'Canadá'],
        correctAnswer: 'Rusia'
    },
    {
        id: '92f9cbb8-c8d2-4ee2-89b7-29912f3818e7',
        question: '¿En qué país se encuentra la Sagrada Familia?',
        options: ['Italia', 'Francia', 'España', 'Portugal'],
        correctAnswer: 'España'
    },
    {
        id: 'd2642f1e-6af2-432f-912c-39dcda9daa6f',
        question: '¿Quién escribió "Cien años de soledad"?',
        options: [
            'Gabriel García Márquez',
            'Pablo Neruda',
            'Mario Vargas Llosa',
            'Octavio Paz'
        ],
        correctAnswer: 'Gabriel García Márquez'
    },
    {
        id: '9b8c67b6-c7b1-4d2d-92ee-5ca1a7a5d5a5',
        question: '¿Cuál es la capital de Italia?',
        options: ['Madrid', 'Roma', 'París', 'Berlín'],
        correctAnswer: 'Roma'
    },
    {
        id: 'f44f605c-c6b7-4f9c-a9e1-690b2a47a3a3',
        question: '¿En qué año comenzó la Segunda Guerra Mundial?',
        options: ['1939', '1940', '1941', '1942'],
        correctAnswer: '1939'
    },
    {
        id: '37f88116-d06a-41d6-a3e6-93173c7b0a0a',
        question: '¿En qué continente se encuentra el río Amazonas?',
        options: ['América', 'Asia', 'Europa', 'África'],
        correctAnswer: 'América'
    },
    {
        id: 'f2b78c1b-2cc3-4f3a-9c4b-7a4ecf45d96d',
        question: '¿Quién inventó la bombilla eléctrica?',
        options: [
            'Thomas Edison',
            'Alexander Graham Bell',
            'Nikola Tesla',
            'Benjamin Franklin'
        ],
        correctAnswer: 'Thomas Edison'
    },
    {
        id: '5e5b5edc-f865-4b72-b73a-27e16e5b6c1d',
        question: '¿Cuál es el océano más frío del mundo?',
        options: [
            'Océano Pacífico',
            'Océano Atlántico',
            'Océano Índico',
            'Océano Ártico'
        ],
        correctAnswer: 'Océano Ártico'
    },
    {
        id: '2d5db5e3-9568-4faa-8622-3b42dfcc3a89',
        question: '¿Quién fue el primer hombre en pisar la Luna?',
        options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard'],
        correctAnswer: 'Neil Armstrong'
    }
];



document.addEventListener('DOMContentLoaded', () => {
    generateQuestion()
    generateOption()
})


// LOCALIZAR LA PREGUNTA DEL DOM
// LOCALIZAR LA BOX DONDE ESTAN LOS BOTONES DE RESPUESTA Y SABER CUANDO SE HA PULSADO CADA UNO
// CUANDO PULSES EN CUALQUIERA ALMACENAR TU OPCION ELEGIDA EN UN ARRAY PARA LUEGO COMPARARLO CON LA CORRECTANSWER AL FINAL
// CADA VEZ QUE ELIGES UNA OPCION QUE SE PINTE UNA NUEVA PREGUNTA Y LAS OPCIONES DE RESPUESTA
// CUANDO HAYAS COMPLETADO TODAS LAS PREGUNTAS TIENE QUE SALIR UNA LISTA CON EL TITULO DE FINAL RESULT
// CADA UNA DE LAS PREGUNTAS Y ABAJO LA OPCION CORRECTA Y LA QUE TU HAS ELEGIDO (EN ROJO SI FALLASTER Y EN VERDE SI ACERTASTE ej. (Asia - America))


// PREGUNTA DEL HMTL
const idQuestionElement = document.getElementById('question');

// CAJA CONTENEDERA DE LAS OPCIONES
const boxOptionsElement = document.getElementById('box-options');

// CAJA CONTENEDORA DE LOS RESULTADOS
const boxResultsElement = document.getElementById('box-results');

// CAJA CONTENEDORA GENERAL
const boxQuizElement = document.getElementById('box-quiz');

// TITULO RESPUESTAS FINALES HTML 
const tittleResultsElement = document.getElementById('final-results');

// CREAMOS ARRAY PARA GUARDAR LAS RESPUESTAS ELEGIDAS POR EL USUARIO
const userChoices = [];

// COUNTERS PARA LAS PREGUNTAS Y LAS OPCIONES DE RESPUESTA
let counterQuestion = 0;
let counterOptions = 0;


// FUNCION QUE GENERA EL ARRAY DE CORRECT ANSWERS
const getCorrectAnswers = () => {
    return QUESTIONS.map(qst => qst.correctAnswer);
}

// ARRAY CON CORRECT ANSWERS 
const correctAnswers = getCorrectAnswers();


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




// GENERAMOS LA PREGUNTA
const generateQuestion = () => {
    if (counterQuestion >= QUESTIONS.length) {
        return
    }
    const question = QUESTIONS[counterQuestion].question;
    idQuestionElement.textContent = question;
    counterQuestion++
}


// GENERAMOS LAS OPCIONES Y LLAMAMOS A LA FUNCION DE PINTAR RESPUESTAS
const generateOption = () => {
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
    const optionBoxes = boxOptionsElement.querySelectorAll('.option-box');
    optionBoxes.forEach((option, index) => {
        option.textContent = options[index]
    })
    counterOptions++
}


// LLAMAR A LAS FUNCIONES Y GUARDAR LA ELECCION DEL USUARIO A CADA PREGUNTA
boxOptionsElement.addEventListener('click', (event) => {
    if (!event.target.dataset.button) return;
    else {
        userChoices.push(event.target.textContent);
    }
    generateQuestion()
    generateOption()
});