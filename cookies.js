// Importa la biblioteca Js Cookie
import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js';

// Función para obtener la IP del usuario
async function obtenerIP() {
    const respuesta = await fetch('https://api.ipify.org?format=json');
    const datos = await respuesta.json();
    return datos.ip;
}

// Función para manejar el click en el enlace del dashboard
async function manejarClick() {
    const ipUsuario = await obtenerIP();
    Cookies.set('ipUsuario', ipUsuario);

    // Aquí debes reemplazar 'tu_ip' con la IP que quieres comprobar
    if (ipUsuario === '152.206.240.31') {
        window.location.href = '/login-admin';
    } else {
        window.location.href = '/login-cliente';
    }
}

// Añade el manejador de eventos al enlace del dashboard
document.getElementById('enlaceDashboard').addEventListener('click', manejarClick);
