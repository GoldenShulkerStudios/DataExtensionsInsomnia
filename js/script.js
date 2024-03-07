document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.buttons a');
    var tabContents = document.querySelectorAll('.tab-content');
    var subButtons = document.querySelectorAll('.sub-buttons a');

    // Función para cambiar los contenidos al hacer clic en los botones
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var target = button.getAttribute('data-content');
            tabContents.forEach(function(content) {
                content.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';
        });
    });

    // Función para filtrar archivos según las etiquetas al hacer clic en los elementos de la lista de sub botones
    subButtons.forEach(function(subButton) {
        subButton.addEventListener('click', function(e) {
            e.preventDefault();
            var targetTag = subButton.getAttribute('data-content');
            var files = document.querySelectorAll('.file');

            // Mostrar solo los archivos que tienen la etiqueta correspondiente
            files.forEach(function(file) {
                var tags = file.getAttribute('data-tags').split(' ');
                if (tags.includes(targetTag) || targetTag === 'all') {
                    file.style.display = 'block';
                } else {
                    file.style.display = 'none';
                }
            });
        });
    });
});
