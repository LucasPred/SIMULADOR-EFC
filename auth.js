/**
 * Módulo de Control de Acceso y Persistencia de Avatar (EFC)
 * Se conecta con sessionStorage para validar sesión y pintar el avatar corporativo.
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Verificar si el usuario está autenticado
    if (sessionStorage.getItem("efc_auth") !== "true") {
        window.location.href = "index.html";
        return;
    }

    // 2. Recuperar datos de sesión
    const usuario = sessionStorage.getItem("efc_usuario") || "USUARIO";
    const razon = sessionStorage.getItem("efc_razon") || "Entidad EFC";
    const avatar = sessionStorage.getItem("efc_avatar") || "";

    // 3. Inyectar o actualizar la barra superior de identificación si existe el contenedor
    const topBarContainer = document.querySelector(".top-bar") || document.querySelector("header");
    
    if (topBarContainer && !document.getElementById("efc-global-user-bar")) {
        // Crear elemento visual superior estandarizado para mantener el avatar en miniatura
        const userBarHTML = `
            <div id="efc-global-user-bar" style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #1e293b; padding-bottom: 15px; margin-bottom: 25px; width: 100%;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="${avatar}" alt="Avatar" style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover; border: 2px solid #38bdf8;">
                    <div>
                        <h1 style="font-size: 1.1rem; color: #38bdf8; text-transform: uppercase; margin: 0;">${usuario}</h1>
                        <span style="font-size: 0.75rem; color: #94a3b8;">${razon}</span>
                    </div>
                </div>
                <div style="font-size: 0.78rem; background: #1e293b; padding: 6px 12px; border-radius: 6px; color: #38bdf8; border: 1px solid #334155;">Auditoría Sistémica Activa</div>
            </div>
        `;
        topBarContainer.innerHTML = userBarHTML;
    }
});
