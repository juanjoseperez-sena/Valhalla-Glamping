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
// Obtener los modales
var modalEditarServicio = document.getElementById('modalEditarServicio');
var modalEliminarServicio = document.getElementById('modalEliminarServicio');

// Obtener los botones para abrir los modales
var btnEditarServicio = document.getElementById('btnEditarServicio');
var btnEliminarServicio = document.getElementById('btnEliminarServicio');

// Abrir modal de editar servicio
btnEditarServicio.addEventListener('click', function() {
    modalEditarServicio.style.display = 'block';
});

// Abrir modal de eliminar servicio
btnEliminarServicio.addEventListener('click', function() {
    modalEliminarServicio.style.display = 'block';
});

// Cerrar el modal de editar servicio
document.querySelectorAll('.btn-cancelar, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEditarServicio.style.display = 'none';
    });
});

// Cerrar el modal de eliminar servicio
document.querySelectorAll('.btn-cancelar-eliminar-servicio, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEliminarServicio.style.display = 'none';
    });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modalEditarServicio) {
        modalEditarServicio.style.display = 'none';
    } else if (event.target === modalEliminarServicio) {
        modalEliminarServicio.style.display = 'none';
    }
    else if (event.target == modalServicio) {
        modalServicio.style.display = "none";
    }
});

// Lógica para habilitar botón "Aceptar" en el modal de eliminar
var checkboxConfirmarEliminacionServicio = document.getElementById('checkboxConfirmarEliminacionServicio');
var btnAceptarEliminarServicio = document.getElementById('btnAceptarEliminarServicio');

checkboxConfirmarEliminacionServicio.addEventListener('change', function() {
    btnAceptarEliminarServicio.disabled = !checkboxConfirmarEliminacionServicio.checked;
});

// Lógica para aceptar eliminación
btnAceptarEliminarServicio.addEventListener('click', function() {
    if (checkboxConfirmarEliminacionServicio.checked) {
        alert('Servicio eliminado con éxito');
        modalEliminarServicio.style.display = 'none';
    }
});
// Obtener el modal
var modalServicio = document.getElementById("modalAgregarServicio");

// Obtener el botón que abre el modal
var btnServicio = document.getElementById("btnAgregarServicio");

// Obtener el elemento <span> que cierra el modal
var cerrarModalServicio = document.getElementsByClassName("cerrar-modal-servicio")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btnServicio.onclick = function() {
    modalServicio.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), cierra el modal
cerrarModalServicio.onclick = function() {
    modalServicio.style.display = "none";
}
