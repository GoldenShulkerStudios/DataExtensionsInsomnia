document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.buttons a');
    var tabContents = document.querySelectorAll('.tab-content');
    var subButtons = document.querySelectorAll('.sub-buttons a');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var target = button.getAttribute('data-content');
            tabContents.forEach(function(content) {
                content.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';
            
            var allSubButton = document.querySelector('[data-content="all"]');
            allSubButton.click();
        });
    });

    subButtons.forEach(function(subButton) {
        subButton.addEventListener('click', function(e) {
            e.preventDefault();
            var targetTag = subButton.getAttribute('data-content');
            var files = document.querySelectorAll('.file');

            files.forEach(function(file) {
                var tags = file.getAttribute('data-tags');
                if (tags === targetTag || targetTag === 'all') {
                    file.style.display = 'block';
                } else {
                    file.style.display = 'none';
                }
            });
        });
    });
});