// Configuración de Firebase
// TODO: Reemplaza este objeto con el de tu proyecto de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase (Verificando que las credenciales no sean las de relleno)
let db = null;

try {
    if (firebaseConfig.apiKey !== "TU_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        db = firebase.firestore();
        console.log("Firebase inicializado correctamente.");
    } else {
        console.warn("Firebase no está configurado. Por favor añade tus credenciales en js/firebase-config.js");
    }
} catch (error) {
    console.error("Error inicializando Firebase:", error);
}

/**
 * Guarda el resultado del quiz en Firebase Firestore
 * @param {string} userName - Nombre del estudiante
 * @param {number} sessionNum - Número de la sesión
 * @param {number} score - Calificación obtenida
 * @param {number} totalQuestions - Total de preguntas
 * @param {Array} resultsData - Array con el desglose de preguntas
 */
const saveResultToDatabase = async (userName, sessionNum, score, totalQuestions, resultsData) => {
    if (!db) {
        console.warn("No se puede guardar el resultado: Firebase no está configurado.");
        return;
    }

    try {
        await db.collection("resultados_quiz").add({
            nombreUsuario: userName,
            sesion: sessionNum,
            puntaje: score,
            totalPreguntas: totalQuestions,
            detalles: resultsData,
            fecha: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Resultado guardado en la base de datos con éxito.");
    } catch (e) {
        console.error("Error al guardar en la base de datos: ", e);
    }
};
