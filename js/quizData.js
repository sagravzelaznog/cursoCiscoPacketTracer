const QUIZ_DATA = {
    1: [
        { question: "¿Qué significa LAN?", answers: [{text: "Local Area Network", correct: true}, {text: "Large Area Node", correct: false}, {text: "Logical Access Network", correct: false}, {text: "List of Available Networks", correct: false}] },
        { question: "¿Cuál de estos NO es un dispositivo final?", answers: [{text: "Computadora", correct: false}, {text: "Switch", correct: true}, {text: "Impresora", correct: false}, {text: "Teléfono IP", correct: false}] },
        { question: "¿Qué tipo de red cubre un continente?", answers: [{text: "LAN", correct: false}, {text: "WAN", correct: true}, {text: "MAN", correct: false}, {text: "PAN", correct: false}] },
        { question: "¿Para qué se usa el comando 'ping'?", answers: [{text: "Para apagar el equipo", correct: false}, {text: "Para borrar archivos", correct: false}, {text: "Para verificar conectividad", correct: true}, {text: "Para compilar código", correct: false}] },
        { question: "¿Qué tipo de cable conecta un PC a un Switch?", answers: [{text: "Cable cruzado", correct: false}, {text: "Cable consola", correct: false}, {text: "Fibra óptica multimodo", correct: false}, {text: "Cable recto (Straight-through)", correct: true}] }
    ],
    2: [
        { question: "¿Cuántas capas tiene el modelo OSI?", answers: [{text: "4", correct: false}, {text: "5", correct: false}, {text: "7", correct: true}, {text: "9", correct: false}] },
        { question: "¿Qué capa del modelo OSI es responsable del enrutamiento (IP)?", answers: [{text: "Capa Física", correct: false}, {text: "Capa de Red", correct: true}, {text: "Capa de Transporte", correct: false}, {text: "Capa de Aplicación", correct: false}] },
        { question: "¿Qué protocolo opera en la capa de Transporte del modelo TCP/IP garantizando entrega?", answers: [{text: "UDP", correct: false}, {text: "TCP", correct: true}, {text: "IP", correct: false}, {text: "HTTP", correct: false}] },
        { question: "¿Qué unidad de datos (PDU) se usa en la capa de Enlace de Datos?", answers: [{text: "Paquete", correct: false}, {text: "Segmento", correct: false}, {text: "Trama (Frame)", correct: true}, {text: "Bit", correct: false}] },
        { question: "¿Cuál de estos es un protocolo de la Capa de Aplicación?", answers: [{text: "HTTP", correct: true}, {text: "IP", correct: false}, {text: "TCP", correct: false}, {text: "Ethernet", correct: false}] }
    ],
    3: [
        { question: "¿Qué dispositivo opera en la capa 2 (Enlace de Datos) y usa direcciones MAC?", answers: [{text: "Hub", correct: false}, {text: "Router", correct: false}, {text: "Switch", correct: true}, {text: "Repetidor", correct: false}] },
        { question: "¿Cuál es la función principal de un Router?", answers: [{text: "Conectar dispositivos en la misma red", correct: false}, {text: "Interconectar diferentes redes IP", correct: true}, {text: "Asignar direcciones MAC", correct: false}, {text: "Filtrar spam", correct: false}] },
        { question: "¿Qué dispositivo difunde (broadcasts) la información a todos sus puertos sin filtrar?", answers: [{text: "Switch", correct: false}, {text: "Hub", correct: true}, {text: "Router", correct: false}, {text: "Firewall", correct: false}] },
        { question: "¿Qué es una dirección MAC?", answers: [{text: "Dirección lógica asignada por el proveedor", correct: false}, {text: "Dirección física única de la tarjeta de red", correct: true}, {text: "Nombre de dominio", correct: false}, {text: "Contraseña de Wi-Fi", correct: false}] },
        { question: "¿Qué tabla utiliza el Switch para enviar tramas?", answers: [{text: "Tabla de Enrutamiento", correct: false}, {text: "Tabla ARP", correct: false}, {text: "Tabla de direcciones MAC", correct: true}, {text: "Tabla de DNS", correct: false}] }
    ],
    4: [
        { question: "¿Cuántos bits tiene una dirección IPv4?", answers: [{text: "16", correct: false}, {text: "32", correct: true}, {text: "64", correct: false}, {text: "128", correct: false}] },
        { question: "¿Cuál es la dirección de loopback estándar en IPv4?", answers: [{text: "192.168.1.1", correct: false}, {text: "255.255.255.255", correct: false}, {text: "127.0.0.1", correct: true}, {text: "0.0.0.0", correct: false}] },
        { question: "En la máscara /24, ¿cuántos bits están dedicados a la red?", answers: [{text: "8", correct: false}, {text: "16", correct: false}, {text: "24", correct: true}, {text: "32", correct: false}] },
        { question: "¿Cuál de estas direcciones es Privada?", answers: [{text: "8.8.8.8", correct: false}, {text: "192.168.1.50", correct: true}, {text: "1.1.1.1", correct: false}, {text: "200.10.5.2", correct: false}] },
        { question: "¿Para qué sirve el Default Gateway?", answers: [{text: "Para conectar la PC al monitor", correct: false}, {text: "Para traducir nombres de dominio", correct: false}, {text: "Para enviar paquetes fuera de la red local", correct: true}, {text: "Para cambiar la MAC address", correct: false}] }
    ],
    5: [
        { question: "¿Qué modo del CLI de Cisco se identifica con el prompt 'Router>'?", answers: [{text: "Modo de Configuración Global", correct: false}, {text: "Modo EXEC Usuario", correct: true}, {text: "Modo EXEC Privilegiado", correct: false}, {text: "Modo ROMMON", correct: false}] },
        { question: "¿Qué comando cambia del modo Usuario al modo Privilegiado?", answers: [{text: "configure terminal", correct: false}, {text: "enable", correct: true}, {text: "exit", correct: false}, {text: "login", correct: false}] },
        { question: "¿Qué comando se usa para asignar una IP a una interfaz?", answers: [{text: "ip address [IP] [Mascara]", correct: true}, {text: "set ip [IP]", correct: false}, {text: "interface ip [IP]", correct: false}, {text: "ip config [IP]", correct: false}] },
        { question: "¿Para qué sirve el comando 'no shutdown'?", answers: [{text: "Para apagar el router", correct: false}, {text: "Para encender o habilitar una interfaz", correct: true}, {text: "Para reiniciar el sistema", correct: false}, {text: "Para borrar la configuración", correct: false}] },
        { question: "¿Con qué comando guardas la configuración actual a la NVRAM?", answers: [{text: "save config", correct: false}, {text: "write memory (o copy run start)", correct: true}, {text: "export config", correct: false}, {text: "commit", correct: false}] }
    ],
    6: [
        { question: "¿Cuál es una ventaja del enrutamiento estático?", answers: [{text: "Se adapta automáticamente a los cambios de red", correct: false}, {text: "Consume menos recursos (CPU/RAM) del router", correct: true}, {text: "Es ideal para redes gigantescas", correct: false}, {text: "No requiere configuración manual", correct: false}] },
        { question: "¿Cómo es la sintaxis de una ruta estática en Cisco?", answers: [{text: "ip route [Red_Destino] [Mascara] [Siguiente_Salto]", correct: true}, {text: "route add [Red]", correct: false}, {text: "static route [Red]", correct: false}, {text: "ip add route [Red]", correct: false}] },
        { question: "¿Qué es una Ruta por Defecto (Default Route)?", answers: [{text: "Una ruta hacia la red local", correct: false}, {text: "Una ruta configurada como 0.0.0.0 0.0.0.0", correct: true}, {text: "Una ruta que el router ignora", correct: false}, {text: "Una ruta hacia sí mismo", correct: false}] },
        { question: "¿Cuál de estos es un protocolo de enrutamiento dinámico (Vector Distancia)?", answers: [{text: "OSPF", correct: false}, {text: "BGP", correct: false}, {text: "RIP", correct: true}, {text: "EIGRP", correct: false}] },
        { question: "¿Qué protocolo dinámico usa el algoritmo Dijkstra (Estado de Enlace)?", answers: [{text: "RIP", correct: false}, {text: "OSPF", correct: true}, {text: "BGP", correct: false}, {text: "VLAN", correct: false}] }
    ],
    7: [
        { question: "¿Qué es una VLAN?", answers: [{text: "Virtual Local Area Network", correct: true}, {text: "Visual LAN", correct: false}, {text: "Variable LAN", correct: false}, {text: "Vector Local Area Node", correct: false}] },
        { question: "¿Cuál es el principal beneficio de las VLANs?", answers: [{text: "Aumentar la velocidad del internet", correct: false}, {text: "Reducir el dominio de broadcast y segmentar la red", correct: true}, {text: "Sustituir a los routers", correct: false}, {text: "Evitar el uso de cables", correct: false}] },
        { question: "¿En qué dispositivo se configuran típicamente las VLANs?", answers: [{text: "Hub", correct: false}, {text: "PC", correct: false}, {text: "Switch Administrable", correct: true}, {text: "Punto de Acceso", correct: false}] },
        { question: "¿Qué tipo de puerto en el switch pertenece a una sola VLAN?", answers: [{text: "Puerto Troncal (Trunk)", correct: false}, {text: "Puerto de Acceso (Access)", correct: true}, {text: "Puerto Consola", correct: false}, {text: "Puerto Serial", correct: false}] },
        { question: "¿Qué protocolo se usa en Cisco para etiquetar las tramas en un puerto troncal?", answers: [{text: "IPv4", correct: false}, {text: "802.1Q", correct: true}, {text: "RIPv2", correct: false}, {text: "CSMA/CD", correct: false}] }
    ],
    8: [
        { question: "¿Qué significa ACL en redes?", answers: [{text: "Access Control List", correct: true}, {text: "Automatic Configuration Line", correct: false}, {text: "Anti Cyber Local", correct: false}, {text: "Advanced Cisco LAN", correct: false}] },
        { question: "¿Para qué sirve principalmente una ACL?", answers: [{text: "Para aumentar el ancho de banda", correct: false}, {text: "Para filtrar el tráfico entrante o saliente", correct: true}, {text: "Para crear VLANs", correct: false}, {text: "Para enrutar paquetes", correct: false}] },
        { question: "En un ACL Estándar, ¿qué criterio se usa para filtrar?", answers: [{text: "IP de Origen", correct: true}, {text: "IP de Destino", correct: false}, {text: "Puerto TCP", correct: false}, {text: "Dirección MAC", correct: false}] },
        { question: "¿Qué hace la función 'Port Security' en un Switch?", answers: [{text: "Encripta el tráfico del puerto", correct: false}, {text: "Limita cuántas y cuáles direcciones MAC pueden usar el puerto", correct: true}, {text: "Cierra el puerto físicamente", correct: false}, {text: "Asigna direcciones IP automáticamente", correct: false}] },
        { question: "Al final de toda ACL en Cisco existe un mandato implícito, ¿cuál es?", answers: [{text: "permit any", correct: false}, {text: "deny any (Denegar todo)", correct: true}, {text: "log any", correct: false}, {text: "redirect any", correct: false}] }
    ],
    9: [
        { question: "¿Qué estándar IEEE define las redes inalámbricas (Wi-Fi)?", answers: [{text: "802.3", correct: false}, {text: "802.1Q", correct: false}, {text: "802.11", correct: true}, {text: "802.5", correct: false}] },
        { question: "¿Qué significa SSID?", answers: [{text: "Service Set Identifier (Nombre de la red)", correct: true}, {text: "Secure System ID", correct: false}, {text: "Simple Switch Interface Device", correct: false}, {text: "Signal Strength Indicator Data", correct: false}] },
        { question: "¿Cuál de estos es el protocolo de seguridad Wi-Fi más robusto actualmente?", answers: [{text: "WEP", correct: false}, {text: "WPA2 / WPA3", correct: true}, {text: "TKIP", correct: false}, {text: "Telnet", correct: false}] },
        { question: "¿Qué dispositivo extiende o proporciona acceso inalámbrico en una red LAN?", answers: [{text: "Access Point (Punto de Acceso)", correct: true}, {text: "Hub", correct: false}, {text: "Switch Core", correct: false}, {text: "Cable Modem", correct: false}] },
        { question: "En redes inalámbricas, ¿qué puede causar interferencia?", answers: [{text: "Microondas y teléfonos inalámbricos", correct: true}, {text: "Cables de fibra óptica", correct: false}, {text: "Un router apagado", correct: false}, {text: "El protocolo IPv6", correct: false}] }
    ],
    10: [
        { question: "En el diseño jerárquico de Cisco, ¿cuáles son las 3 capas?", answers: [{text: "Física, Enlace, Red", correct: false}, {text: "Acceso, Distribución, Núcleo (Core)", correct: true}, {text: "Cliente, Servidor, Nube", correct: false}, {text: "LAN, MAN, WAN", correct: false}] },
        { question: "¿Qué significa 'Troubleshooting'?", answers: [{text: "Instalar nuevo hardware", correct: false}, {text: "Resolución sistemática de problemas", correct: true}, {text: "Crear contraseñas fuertes", correct: false}, {text: "Tirar cables", correct: false}] },
        { question: "En Packet Tracer, si un cable entre Switch y PC está en rojo, ¿qué indica?", answers: [{text: "Que hay mucho tráfico", correct: false}, {text: "Que la conexión física está caída (puerto apagado o cable incorrecto)", correct: true}, {text: "Que hay un virus", correct: false}, {text: "Que la IP es incorrecta", correct: false}] },
        { question: "¿Qué comando usamos en PC para rastrear la ruta que toman los paquetes?", answers: [{text: "ping", correct: false}, {text: "ipconfig", correct: false}, {text: "tracert (o traceroute)", correct: true}, {text: "netstat", correct: false}] },
        { question: "¿Qué comando ayuda a ver la configuración completa guardada en el Router?", answers: [{text: "show interface", correct: false}, {text: "show running-config", correct: true}, {text: "show ip route", correct: false}, {text: "show vlan brief", correct: false}] }
    ]
};
