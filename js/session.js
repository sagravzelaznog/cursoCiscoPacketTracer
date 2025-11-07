// Script específico para las páginas de sesión

document.addEventListener('DOMContentLoaded', function() {
    // Actualizar el año en el footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Mostrar/ocultar soluciones
    const showSolutionButtons = document.querySelectorAll('.show-solution');
    showSolutionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const solutionContent = this.nextElementSibling;
            const isHidden = solutionContent.style.display === 'none' || 
                            !solutionContent.style.display;
            
            if (isHidden) {
                solutionContent.style.display = 'block';
                this.textContent = 'Ocultar Solución';
            } else {
                solutionContent.style.display = 'none';
                this.textContent = 'Mostrar Solución';
            }
        });
    });

    // Actualizar enlaces de navegación
    updateNavigationLinks();
});

// Función para actualizar los enlaces de navegación entre sesiones
function updateNavigationLinks() {
    const currentPath = window.location.pathname;
    const currentSession = parseInt(currentPath.match(/sesion(\d+)\.html/)?.[1]) || 1;
    const totalSessions = 10; // Número total de sesiones

    const prevLink = document.querySelector('.btn-prev');
    const nextLink = document.querySelector('.btn-next');

    // Actualizar enlace anterior
    if (currentSession > 1) {
        prevLink.href = `sesion${currentSession - 1}.html`;
    } else {
        prevLink.href = '../index.html';
        prevLink.textContent = 'Inicio';
    }

    // Actualizar enlace siguiente
    if (currentSession < totalSessions) {
        nextLink.href = `sesion${currentSession + 1}.html`;
    } else {
        nextLink.style.visibility = 'hidden';
    }
    
    // Actualizar el título de la sesión en el encabezado
    const sessionTitles = {
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
    
    const headerTitle = document.querySelector('header p');
    if (headerTitle && sessionTitles[currentSession]) {
        headerTitle.textContent = `Sesión ${currentSession}: ${sessionTitles[currentSession]}`;
    }
}

// Función para resaltar el código
function highlightCode() {
    // Esta función podría integrarse con una biblioteca como Prism.js o Highlight.js
    // para resaltar la sintaxis del código en los ejemplos
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// Función para inicializar los tooltips
function initTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        const tooltipText = tooltip.getAttribute('data-tooltip');
        const tooltipElement = document.createElement('span');
        tooltipElement.className = 'tooltip';
        tooltipElement.textContent = tooltipText;
        
        tooltip.appendChild(tooltipElement);
        
        tooltip.addEventListener('mouseenter', () => {
            tooltipElement.style.visibility = 'visible';
            tooltipElement.style.opacity = '1';
        });
        
        tooltip.addEventListener('mouseleave', () => {
            tooltipElement.style.visibility = 'hidden';
            tooltipElement.style.opacity = '0';
        });
    });
}

// Inicializar componentes cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    highlightCode();
    initTooltips();
});
