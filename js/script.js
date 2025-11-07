// Datos del curso - sesiones
const sessions = [
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

// Función para cargar las sesiones en la página
function loadSessions() {
    const sessionsList = document.getElementById('sessions-list');
    
    if (sessionsList) {
        sessions.forEach(session => {
            const sessionElement = document.createElement('div');
            sessionElement.className = 'session-card';
            sessionElement.innerHTML = `
                <h3>Sesión ${session.id}: ${session.title}</h3>
                <p>${session.description}</p>
                <p><strong>Duración:</strong> ${session.duration}</p>
                <a href="${session.file}" class="btn">Comenzar</a>
            `;
            sessionsList.appendChild(sessionElement);
        });
    }
}

// Función para inicializar la página
function init() {
    loadSessions();
    
    // Añadir el año actual al footer
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.textContent = `© JMGV-PTEL ${currentYear}. Todos los derechos reservados.`;
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
