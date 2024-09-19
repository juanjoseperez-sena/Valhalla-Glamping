// Obtener los modales
var addRoomModal = document.getElementById('addRoomModal');
var addFurnitureModal = document.getElementById('addFurnitureModal');
var addServicesModal = document.getElementById('addServicesModal');

// Cerrar el modal al presionar "Cancelar"
var cancelButton = document.querySelector(".next-room2");
if (cancelButton) {
    cancelButton.addEventListener("click", function() {
        addRoomModal.style.display = 'none';  // Cierra el modal de la habitación
    });
}
// Función para abrir/cerrar el sidebar
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

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Mostrar el modal al hacer clic en el botón de agregar habitación
var addRoomBtn = document.getElementById('openAddRoomModal');
if (addRoomBtn) {
    addRoomBtn.addEventListener('click', function() {
        addRoomModal.style.display = 'block';
    });
}

// Manejo de formularios
var addRoomForm = document.getElementById('addRoomForm');
var addFurnitureForm = document.getElementById('addFurnitureForm');
var addServicesForm = document.getElementById('addServicesForm');

if (addRoomForm) {
    addRoomForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addRoomModal.style.display = 'none';
        addFurnitureModal.style.display = 'block';
    });
}

if (addFurnitureForm) {
    addFurnitureForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addFurnitureModal.style.display = 'none';
        addServicesModal.style.display = 'block';
    });
}

if (addServicesForm) {
    addServicesForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addServicesModal.style.display = 'none';
        alert('Habitación agregada con éxito');
    });
}

// Obtener el modal
var myModal = document.getElementById('myModal');

// Obtener todas las imágenes
var images = document.querySelectorAll("img");

// Abrir el modal al hacer clic en cualquier imagen
if (images) {
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            myModal.style.display = "block";
        });
    });
}

// Obtener el modal de editar habitación
var modalEditarHabitacion = document.getElementById('modalEditarHabitacion');

// Obtener los botones "Editar Habitación"
var botonEditarHabitacion = document.getElementById('btnEditarHabitacion');

// Abrir el modal al hacer clic en el botón de editar habitación
if (botonEditarHabitacion) {
    botonEditarHabitacion.addEventListener('click', function() {
        modalEditarHabitacion.style.display = "block";
    });
}

// Cerrar el modal de editar habitación al hacer clic en el botón "Cancelar"
var botonCancelar = document.querySelector('.btn-cancelar');
if (botonCancelar) {
    botonCancelar.addEventListener('click', cerrarModalEditarHabitacion);
}

// Función para cerrar el modal de editar habitación
function cerrarModalEditarHabitacion() {
    modalEditarHabitacion.style.display = "none";
}

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === addRoomModal) {
        addRoomModal.style.display = 'none';
    } else if (event.target === addFurnitureModal) {
        addFurnitureModal.style.display = 'none';
    } else if (event.target === addServicesModal) {
        addServicesModal.style.display = 'none';
    } else if (event.target === myModal) {
        myModal.style.display = 'none';
    } else if (event.target === modalEditarHabitacion) {
        cerrarModalEditarHabitacion();
    }
});
// Obtener el modal y botones
var modalEliminarHabitacion = document.getElementById('modalEliminarHabitacion');
var botonEliminarHabitacion = document.getElementById('btnEliminarHabitacion'); // Asegúrate de tener un botón con este id
var botonCancelarEliminar = document.querySelector('.btn-cancelar-eliminar-habitacion');
var botonAceptarEliminar = document.querySelector('.btn-aceptar-eliminar-habitacion');
var checkboxConfirmarEliminacion = document.getElementById('checkboxConfirmarEliminacion');

// Abrir el modal al hacer clic en el botón de eliminar habitación
botonEliminarHabitacion.addEventListener('click', function() {
    modalEliminarHabitacion.style.display = 'block';
});

// Cerrar el modal al hacer clic en "Cancelar"
botonCancelarEliminar.addEventListener('click', function() {
    modalEliminarHabitacion.style.display = 'none';
});

// Habilitar o deshabilitar el botón "Aceptar" dependiendo del checkbox
checkboxConfirmarEliminacion.addEventListener('change', function() {
    if (checkboxConfirmarEliminacion.checked) {
        botonAceptarEliminar.disabled = false;
    } else {
        botonAceptarEliminar.disabled = true;
    }
});

// Lógica para eliminar la habitación
botonAceptarEliminar.addEventListener('click', function() {
    if (checkboxConfirmarEliminacion.checked) {
        // Aquí puedes agregar la lógica para eliminar la habitación
        alert('Habitación eliminada con éxito.');
        modalEliminarHabitacion.style.display = 'none';
    }
});

// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modalEliminarHabitacion) {
        modalEliminarHabitacion.style.display = 'none';
    }
}
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
var modalEditarTipoHabitacion = document.getElementById('modalEditarTipoHabitacion');
var modalEliminarTipoHabitacion = document.getElementById('modalEliminarTipoHabitacion');

// Obtener los botones para abrir los modales
var btnEditarTipoHabitacion = document.getElementById('btnEditarTipoHabitacion');
var btnEliminarTipoHabitacion = document.getElementById('btnEliminarTipoHabitacion');

// Abrir modal de editar tipo de habitación
btnEditarTipoHabitacion.addEventListener('click', function() {
    modalEditarTipoHabitacion.style.display = 'block';
});

// Abrir modal de eliminar tipo de habitación
btnEliminarTipoHabitacion.addEventListener('click', function() {
    modalEliminarTipoHabitacion.style.display = 'block';
});

// Cerrar el modal de editar tipo de habitación
document.querySelectorAll('.btn-cancelar, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEditarTipoHabitacion.style.display = 'none';
    });
});

// Cerrar el modal de eliminar tipo de habitación
document.querySelectorAll('.btn-cancelar-eliminar-tipo-habitacion, .close').forEach(function(element) {
    element.addEventListener('click', function() {
        modalEliminarTipoHabitacion.style.display = 'none';
    });
});

// Cerrar modales al hacer clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modalEditarTipoHabitacion) {
        modalEditarTipoHabitacion.style.display = 'none';
    } else if (event.target === modalEliminarTipoHabitacion) {
        modalEliminarTipoHabitacion.style.display = 'none';
    }
});

// Lógica para habilitar botón "Aceptar" en el modal de eliminar
var checkboxConfirmarEliminacionTipoHabitacion = document.getElementById('checkboxConfirmarEliminacionTipoHabitacion');
var btnAceptarEliminarTipoHabitacion = document.getElementById('btnAceptarEliminarTipoHabitacion');

checkboxConfirmarEliminacionTipoHabitacion.addEventListener('change', function() {
    btnAceptarEliminarTipoHabitacion.disabled = !checkboxConfirmarEliminacionTipoHabitacion.checked;
});

// Lógica para aceptar eliminación
btnAceptarEliminarTipoHabitacion.addEventListener('click', function() {
    if (checkboxConfirmarEliminacionTipoHabitacion.checked) {
        alert('Tipo de habitación eliminado con éxito');
        modalEliminarTipoHabitacion.style.display = 'none';
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
// Seleccionar el botón de "Registrarme"
var btnRegistrarme = document.querySelector('.btn-registrarme');
// Cerrar el modal al hacer clic en "Registrarme"
btnRegistrarme.addEventListener('click', function() {
    myModal.style.display = 'none';
});


///////////////////////////////
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