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

document.getElementById('createRoleForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // crear el rol
    closeModal('createRoleModal');
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

function openEditRoleModal(roleId) {
    openModal('editRoleModal');
}

function openDeleteRoleModal(roleId) {
    // guardar el roleId
    openModal('deleteRoleModal');
}
