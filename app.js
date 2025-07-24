let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
let root = document.documentElement;

toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('modo');

    if (checked) {
        // Modo claro activado: colores azulados
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        root.style.setProperty('--primary-color', '#3366cc');   // azul para sombras y foco
        root.style.setProperty('--accent-color', '#2959a6');    // azul más oscuro para hover
    } else {
        // Modo oscuro activado: colores verdes
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        root.style.setProperty('--primary-color', '#4dc958');
        root.style.setProperty('--accent-color', '#30ac3a');
    }
});


    
