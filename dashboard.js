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

// creación de rol
document.getElementById('createRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // crear el rol
    closeModal('createRoleModal');
});

// edición de rol
document.getElementById('editRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // editar el rol
    closeModal('editRoleModal');
});

// eliminación de rol
document.getElementById('confirmDeleteRoleBtn').addEventListener('click', function() {
    // eliminar el rol
    closeModal('deleteRoleModal');
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

// Simulación de roles para fines demostrativos
const roles = {
    1: { name: 'Administrador' },
    2: { name: 'Cliente' },
    3: { name: 'Recepcionista' },
    4: { name: 'Recepcionista' }
};

// Función para abrir el modal de edición de rol con los datos prellenados
function openEditRoleModal(roleId) {
    // Simular la obtención de datos del rol desde el servidor
    const role = roles[roleId];
    
    if (role) {
        // Rellenar el campo del formulario con el nombre del rol
        document.getElementById('editRoleName').value = role.name;
        document.getElementById('editRoleId').value = roleId;
        // Mostrar el modal
        openModal('editRoleModal');
    } else {
        console.error('Rol no encontrado');
    }
}

// Manejador del formulario de edición de rol
document.getElementById('editRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const roleId = document.getElementById('editRoleId').value;
    const newRoleName = document.getElementById('editRoleName').value;

    // Simular la actualización del rol en el servidor
    if (roles[roleId]) {
        roles[roleId].name = newRoleName;
        // Actualizar la interfaz de usuario
        updateRoleInTable(roleId, newRoleName);
        closeModal('editRoleModal');
    } else {
        console.error('Rol no encontrado para actualizar');
    }
});

// Función para actualizar la tabla de roles con el nuevo nombre
function updateRoleInTable(roleId, newRoleName) {
    const rows = document.querySelectorAll('#rolesTableBody tr');
    rows.forEach(row => {
        const idCell = row.querySelector('td:first-child');
        if (idCell.textContent == roleId) {
            const nameCell = row.querySelector('td:nth-child(2)');
            nameCell.textContent = newRoleName;
        }
    });
}

// Función para abrir un modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Función para cerrar un modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


function openDeleteRoleModal(roleId) {
    // guardar el roleId
    openModal('deleteRoleModal');
}

// Agregar filas a la tabla de roles
function addRoleRow(id, name, permissions, status) {
    const tbody = document.getElementById('rolesTableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${permissions}</td>
        <td>${status}</td>
        <td class="operations">
            <i class="fas fa-edit" onclick="openEditRoleModal(${id})"></i>
            <i class="fas fa-trash" onclick="openDeleteRoleModal(${id})"></i>
        </td>
    `;

    tbody.appendChild(row);
}

// Manejar el formulario de creación de usuario
document.getElementById('createUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para crear el usuario
    closeModal('createUserModal');
});

// Manejar el formulario de edición de usuario
document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí iría la lógica para editar el usuario
    closeModal('editUserModal');
});

// Manejar la confirmación de eliminación de usuario
document.getElementById('confirmDeleteUserBtn').addEventListener('click', function() {
    // Aquí iría la lógica para eliminar el usuario
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

// Funciones para abrir modales de edición y eliminación de usuario
function openEditUserModal(userId) {
    openModal('editUserModal');
}

function openDeleteUserModal(userId) {
    // Aquí puedes guardar el userId en algún lugar si necesitas
    openModal('deleteUserModal');
}

// Agregar filas a la tabla de usuarios
function addUserRow(id, email, role, status) {
    const tbody = document.getElementById('usersTableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${id}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>${status}</td>
        <td class="operations">
            <i class="fas fa-edit" onclick="openEditUserModal(${id})"></i>
            <i class="fas fa-trash" onclick="openDeleteUserModal(${id})"></i>
        </td>
    `;

    tbody.appendChild(row);
}

function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
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
