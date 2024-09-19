function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('shifted');
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

function openEditRoleModal() {
    // Seleccionar el modal de edición
    const editRoleModal = document.getElementById('editRoleModal');
    // Mostrar el modal
    editRoleModal.style.display = 'block';
}

// Manejar la edición de roles
document.getElementById('editRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para editar el rol
    closeModal('editRoleModal');
});

// Búsqueda de roles
document.getElementById('searchRoleInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const rows = document.querySelectorAll('#rolesTableBody tr');

    rows.forEach(row => {
        const roleName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (roleName.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Manejar el formulario de creación de usuario
document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para crear el usuario
    closeModal('createUserModal');
});

// Manejar el formulario de edición de usuario
document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para editar el usuario
    closeModal('editUserModal');
});

// Manejar la confirmación de eliminación de usuario
document.getElementById('confirmDeleteUserBtn').addEventListener('click', function() {
    // Lógica para eliminar el usuario
    closeModal('deleteUserModal');
});

// Búsqueda de usuarios
document.getElementById('searchUserInput').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const rows = document.querySelectorAll('#usersTableBody tr');

    rows.forEach(row => {
        const userEmail = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        if (userEmail.includes(searchQuery)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Modales de edición y eliminación de usuario
function openEditUserModal(userId) {
    // Obtener los datos del usuario usando userId y colocarlos en el formulario
    openModal('editUserModal');
}

function openDeleteUserModal(userId) {
    // Usar el userId en algún lugar si es necesario
    openModal('deleteUserModal');
}

// Función para abrir el modal y mostrar la información del usuario
function openViewModal(id) {
    // Obtener los valores actuales de nombre y email
    const name = document.getElementById('name-' + id).innerText;
    const email = document.getElementById('email-' + id).innerText;
    const monto = document.getElementById('monto-' + id).innerText;
    const montor = document.getElementById('montoR-' + id).innerText;
    const reserva = document.getElementById('reserva-' + id).innerText;

    // Rellenar el modal con los valores obtenidos
    document.getElementById('view-name').innerText = name;
    document.getElementById('view-email').innerText = email;
    document.getElementById('view-monto').innerText = monto;
    document.getElementById('view-montoR').innerText = montor;
    document.getElementById('view-reserva').innerText = reserva;

    // Mostrar el modal
    document.getElementById('viewModal').style.display = 'flex';
}

// Función para cerrar el modal de visualización
function closeViewModal() {
    document.getElementById('viewModal').style.display = 'none';
}

// Cierra el menú si se hace clic fuera de él, pero excluye los modales
document.addEventListener('click', (event) => {
    const profileMenu = document.querySelector('.profile-menu');
    const dropdown = document.getElementById('profileDropdown');

    // Verifica si el clic está dentro del menú de perfil o el modal
    if (!profileMenu.contains(event.target) && !event.target.closest('.modal')) {
        dropdown.style.display = 'none';
    }
});
