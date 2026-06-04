// ==========================================================================
// Base de Datos de Sesiones (Simulada)
// ==========================================================================
const SESSIONS_DATA = [
    {
        id: 1,
        title: 'Introducción a Redes',
        description: 'Conceptos básicos y fundamentos de redes de computadoras.',
        duration: '4 horas',
        file: 'sesiones/sesion1.html'
    },
    {
        id: 2,
        title: 'Modelo OSI y TCP/IP',
        description: 'Entendiendo los modelos de referencia de redes.',
        duration: '4 horas',
        file: 'sesiones/sesion2.html'
    },
    {
        id: 3,
        title: 'Dispositivos de Red',
        description: 'Conoce los diferentes dispositivos de red y sus funciones.',
        duration: '4 horas',
        file: 'sesiones/sesion3.html'
    },
    {
        id: 4,
        title: 'Direccionamiento IP',
        description: 'Fundamentos de direccionamiento IP y subredes.',
        duration: '4 horas',
        file: 'sesiones/sesion4.html'
    },
    {
        id: 5,
        title: 'Configuración de Routers',
        description: 'Aprende a configurar routers Cisco básicos.',
        duration: '4 horas',
        file: 'sesiones/sesion5.html'
    },
    {
        id: 6,
        title: 'Enrutamiento Estático y Dinámico',
        description: 'Configuración de rutas estáticas y protocolos de enrutamiento.',
        duration: '4 horas',
        file: 'sesiones/sesion6.html'
    },
    {
        id: 7,
        title: 'VLANs',
        description: 'Redes de Área Local Virtuales y su configuración.',
        duration: '4 horas',
        file: 'sesiones/sesion7.html'
    },
    {
        id: 8,
        title: 'Seguridad Básica',
        description: 'ACLs, seguridad de puertos y administración segura.',
        duration: '4 horas',
        file: 'sesiones/sesion8.html'
    },
    {
        id: 9,
        title: 'Redes Inalámbricas',
        description: 'Configuración de redes WiFi y puntos de acceso.',
        duration: '4 horas',
        file: 'sesiones/sesion9.html'
    },
    {
        id: 10,
        title: 'Proyecto Final',
        description: 'Diseño e implementación de una red empresarial completa.',
        duration: '8 horas',
        file: 'sesiones/sesion10.html'
    }
];

// ==========================================================================
// Lógica de Renderizado y UI
// ==========================================================================

/**
 * Renderiza la tarjeta de una sesión en el DOM.
 * @param {Object} session - Objeto con los datos de la sesión.
 * @returns {HTMLElement} Elemento HTML de la tarjeta de sesión.
 */
const createSessionCard = ({ id, title, description, duration, file }) => {
    const article = document.createElement('article');
    article.className = 'session-card';
    article.setAttribute('role', 'listitem');
    
    article.innerHTML = `
        <h3>Sesión ${id}: ${title}</h3>
        <p>${description}</p>
        <p class="session-meta"><strong>⏱ Duración:</strong> ${duration}</p>
        <a href="${file}" class="btn" aria-label="Comenzar sesión ${id}: ${title}">Comenzar</a>
    `;
    
    return article;
};

/**
 * Inicializa y carga la lista de sesiones en el contenedor principal.
 */
const loadSessions = () => {
    const sessionsList = document.getElementById('sessions-list');
    if (!sessionsList) return;

    // Fragmento para optimizar la inserción en el DOM
    const fragment = document.createDocumentFragment();
    
    SESSIONS_DATA.forEach(session => {
        fragment.appendChild(createSessionCard(session));
    });

    sessionsList.appendChild(fragment);
};

/**
 * Actualiza el año dinámicamente en el pie de página.
 */
const updateFooterYear = () => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

/**
 * Función principal de inicialización.
 */
const initializeApp = () => {
    loadSessions();
    updateFooterYear();
};

// ==========================================================================
// Event Listeners
// ==========================================================================
document.addEventListener('DOMContentLoaded', initializeApp);
