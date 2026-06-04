// ==========================================================================
// Módulo de Control de Sesión
// ==========================================================================

const TOTAL_SESSIONS = 10;

const SESSION_TITLES = {
    1: 'Introducción a Redes',
    2: 'Modelo OSI y TCP/IP',
    3: 'Dispositivos de Red Básicos',
    4: 'Direccionamiento IP y Subredes',
    5: 'Enrutamiento Estático',
    6: 'Protocolos de Enrutamiento Dinámico',
    7: 'VLANs',
    8: 'Seguridad Básica',
    9: 'Redes Inalámbricas',
    10: 'Proyecto Final'
};

/**
 * Gestiona el comportamiento de mostrar/ocultar las soluciones de ejercicios.
 */
const initSolutionToggles = () => {
    const showSolutionButtons = document.querySelectorAll('.show-solution');
    
    showSolutionButtons.forEach(button => {
        // Mejorar accesibilidad añadiendo atributo inicial
        button.setAttribute('aria-expanded', 'false');
        
        button.addEventListener('click', function() {
            const solutionContent = this.nextElementSibling;
            if (!solutionContent) return;

            // Toggle de la clase is-active controlada por CSS
            const isHidden = !solutionContent.classList.contains('is-active');
            solutionContent.classList.toggle('is-active');
            
            // Actualizar accesibilidad y texto
            this.setAttribute('aria-expanded', isHidden.toString());
            this.textContent = isHidden ? 'Ocultar Solución' : 'Mostrar Solución';
        });
    });
};

/**
 * Obtiene el número de la sesión actual a partir de la URL.
 * @returns {number} Número de sesión (1 por defecto).
 */
const getCurrentSessionNumber = () => {
    const currentPath = window.location.pathname;
    const match = currentPath.match(/sesion(\d+)\.html/);
    return match ? parseInt(match[1], 10) : 1;
};

/**
 * Actualiza el enlace hacia la sesión anterior.
 * @param {number} currentSession 
 */
const updatePrevLink = (currentSession) => {
    const prevLink = document.querySelector('.btn-prev');
    if (!prevLink) return;

    if (currentSession > 1) {
        prevLink.href = `sesion${currentSession - 1}.html`;
    } else {
        prevLink.href = '../index.html';
        prevLink.textContent = 'Inicio';
    }
};

/**
 * Actualiza el enlace hacia la sesión siguiente.
 * @param {number} currentSession 
 */
const updateNextLink = (currentSession) => {
    const nextLink = document.querySelector('.btn-next');
    if (!nextLink) return;

    if (currentSession < TOTAL_SESSIONS) {
        nextLink.href = `sesion${currentSession + 1}.html`;
    } else {
        nextLink.style.display = 'none'; // Se oculta totalmente si no hay siguiente
    }
};

/**
 * Actualiza el título del encabezado dinámicamente.
 * @param {number} currentSession 
 */
const updateSessionTitle = (currentSession) => {
    const headerTitle = document.querySelector('header .subtitle') || document.querySelector('header p');
    if (headerTitle && SESSION_TITLES[currentSession]) {
        headerTitle.textContent = `Sesión ${currentSession}: ${SESSION_TITLES[currentSession]}`;
    }
};

/**
 * Coordina la actualización de la navegación.
 */
const updateNavigationLinks = () => {
    const currentSession = getCurrentSessionNumber();
    updatePrevLink(currentSession);
    updateNextLink(currentSession);
    updateSessionTitle(currentSession);
};

// ==========================================================================
// Utilidades Extra
// ==========================================================================

const highlightCode = () => {
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
};

const initTooltips = () => {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('span');
        
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltipText;
        tooltipElement.setAttribute('role', 'tooltip');
        
        tooltip.appendChild(tooltipElement);
        
        // Manejo de eventos usando funciones flecha para conservar el contexto
        const showTooltip = () => {
            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.opacity = '1';
        };
        
        const hideTooltip = () => {
            tooltipElement.style.visibility = 'hidden';
            tooltipElement.style.opacity = '0';
        };

        tooltip.addEventListener('mouseenter', showTooltip);
        tooltip.addEventListener('mouseleave', hideTooltip);
        tooltip.addEventListener('focus', showTooltip);
        tooltip.addEventListener('blur', hideTooltip);
    });
};

// ==========================================================================
// Módulo del Quiz Interactivo
// ==========================================================================

let currentQuestionIndex = 0;
let score = 0;
let currentQuizData = null;

const initQuiz = () => {
    const quizContainer = document.getElementById('quiz-container');
    if (!quizContainer) return;

    const currentSession = getCurrentSessionNumber();
    if (typeof QUIZ_DATA !== 'undefined' && QUIZ_DATA[currentSession]) {
        currentQuizData = QUIZ_DATA[currentSession];
        
        const restartBtn = document.getElementById('restart-btn');
        if (restartBtn) {
            restartBtn.addEventListener('click', startQuiz);
        }
        
        startQuiz();
    }
};

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('score-container').classList.add('is-hidden');
    document.getElementById('answer-buttons').classList.remove('is-hidden');
    document.getElementById('question-text').classList.remove('is-hidden');
    document.getElementById('question-header').classList.remove('is-hidden');
    
    setNextQuestion();
};

const setNextQuestion = () => {
    resetState();
    showQuestion(currentQuizData[currentQuestionIndex]);
    
    const counterElement = document.getElementById('question-counter');
    if (counterElement) {
        counterElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuizData.length}`;
    }
};

const showQuestion = (questionData) => {
    const questionElement = document.getElementById('question-text');
    const answerButtonsElement = document.getElementById('answer-buttons');
    
    questionElement.textContent = questionData.question;
    
    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
};

const resetState = () => {
    const answerButtonsElement = document.getElementById('answer-buttons');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
};

const selectAnswer = (e) => {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';
    
    if (isCorrect) {
        score++;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuizData.length) {
        setNextQuestion();
    } else {
        showScore();
    }
};

const showScore = () => {
    resetState();
    
    document.getElementById('question-text').classList.add('is-hidden');
    document.getElementById('question-header').classList.add('is-hidden');
    document.getElementById('answer-buttons').classList.add('is-hidden');
    
    const scoreContainer = document.getElementById('score-container');
    scoreContainer.classList.remove('is-hidden');
    
    const finalScoreElement = document.getElementById('final-score');
    let mensaje = "";
    
    if (score === currentQuizData.length) mensaje = "¡Perfección absoluta! 🏆";
    else if (score >= currentQuizData.length * 0.7) mensaje = "¡Muy buen trabajo! 🌟";
    else if (score >= currentQuizData.length * 0.5) mensaje = "Vas por buen camino, pero repasa la lección. 📚";
    else mensaje = "No te rindas, repasa la teoría e inténtalo de nuevo. 💻";
    
    finalScoreElement.innerHTML = `Acertaste ${score} de ${currentQuizData.length} preguntas.<br><br>${mensaje}`;
};

/**
 * Inicializador principal de la página de sesión.
 */
const initSessionPage = () => {
    initSolutionToggles();
    updateNavigationLinks();
    highlightCode();
    initTooltips();
    initQuiz();
};

// ==========================================================================
// Bootstrap
// ==========================================================================
document.addEventListener('DOMContentLoaded', initSessionPage);
