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
var modalEditarInmueble = document.getElementById('modalEditarInmueble');
var modalEliminarInmueble = document.getElementById('modalEliminarInmueble');

// Obtener los botones para abrir los modales
var btnEditarInmueble = document.getElementById('btnEditarInmueble');
var btnEliminarInmueble = document.getElementById('btnEliminarInmueble');

// Abrir modal de editar inmueble
btnEditarInmueble.addEventListener('click', function() {
    modalEditarInmueble.style.display = 'block';
});

// Abrir modal de eliminar inmueble
btnEliminarInmueble.addEventListener('click', function() {
    modalEliminarInmueble.style.display = 'block';
});

// Cerrar el modal de editar inmueble
document.querySelectorAll('.btn-cancelar, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEditarInmueble.style.display = 'none';
    });
});

// Cerrar el modal de eliminar inmueble
document.querySelectorAll('.btn-cancelar-eliminar, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEliminarInmueble.style.display = 'none';
    });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modalEditarInmueble) {
        modalEditarInmueble.style.display = 'none';
    } else if (event.target === modalEliminarInmueble) {
        modalEliminarInmueble.style.display = 'none';
    }
    else if(event.target == modalInmueble) {
        modalInmueble.style.display = "none";
    }
});

// Lógica para habilitar botón "Aceptar" en el modal de eliminar
var checkboxConfirmarEliminacion = document.getElementById('checkboxConfirmarEliminacion');
var btnAceptarEliminar = document.getElementById('btnAceptarEliminar');

checkboxConfirmarEliminacion.addEventListener('change', function() {
    btnAceptarEliminar.disabled = !checkboxConfirmarEliminacion.checked;
});

// Lógica para aceptar eliminación
btnAceptarEliminar.addEventListener('click', function() {
    if (checkboxConfirmarEliminacion.checked) {
        alert('Inmueble eliminado con éxito');
        modalEliminarInmueble.style.display = 'none';
    }
});
// Obtener el modal
var modalInmueble = document.getElementById("modalAgregarInmueble");

// Obtener el botón que abre el modal
var btnInmueble = document.getElementById("btnAgregarInmueble");

// Obtener el elemento <span> que cierra el modal
var cerrarModalInmueble = document.getElementsByClassName("cerrar-modal-inmueble")[0];

// Cuando el usuario hace clic en el botón, abre el modal
btnInmueble.onclick = function() {
    modalInmueble.style.display = "block";
}

