function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');  // Agrega o remueve la clase "active"
}
function showSection(sectionId) {
    const sections = document.querySelectorAll('main .content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function logout() {
    alert('Cerrar sesión');
}

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    const profileMenu = document.querySelector('.profile-menu');
    const dropdown = document.getElementById('profileDropdown');
    if (!profileMenu.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
var modales = {
    modalEditarTipo: document.getElementById("modalEditarTipo"),
    modalAgregarTipo: document.getElementById("modalAgregarTipo"),
    modalEliminarTipo: document.getElementById("modalEliminarTipo")
};

// Botones que abren los modales
document.getElementById("btnEditarTipo").onclick = function() {
    modales.modalEditarTipo.style.display = "block";
};

document.getElementById("btnAgregarTipo").onclick = function() {
    modales.modalAgregarTipo.style.display = "block";
};

document.getElementById("btnEliminarTipo").onclick = function() {
    modales.modalEliminarTipo.style.display = "block";
};

// Funcionalidad de cerrar el modal al hacer clic fuera de él o en el botón de cerrar
window.onclick = function(event) {
    for (var key in modales) {
        if (event.target == modales[key]) {
            modales[key].style.display = "none";
        }
    }
};

// Cerrar modal al hacer clic en el botón de "Cancelar" o "Cerrar (X)"
document.querySelectorAll('.cerrar, .btn-cancelar').forEach(function(element) {
    element.onclick = function() {
        var modalID = this.getAttribute('data-modal');
        modales[modalID].style.display = "none";
    };
});

// Habilitar botón "Aceptar" en Eliminar tipo solo si se confirma
document.getElementById("confirmarEliminacion").onclick = function() {
    document.getElementById("btnAceptarEliminarTipo").disabled = !this.checked;
};