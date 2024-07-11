document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('theme');
    const imageElement = document.getElementById('footerImage')
    selectElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue == 'Dark') {
            document.body.classList.add('dark');
            imageElement.src = 'logo-white.png'
        } else {
            document.body.classList.remove('dark');
            imageElement.src = 'byui-logo_blue.webp'
        }
    });
});